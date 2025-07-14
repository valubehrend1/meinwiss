import { createSlice } from '@reduxjs/toolkit';

export interface Message {
  sender: 'user' | 'assistant';
  content: string;
  sources?: RetrieverItem[];
  answerFound?: boolean;
  isFinalResponse: boolean;
  isClarification?: boolean;
  error?: string;
}

export interface Organization {
  name: string;
  description: string;
  website: string;
}

interface UserContext {
  originCountry: string | null;
  timeInGermany: string | null;
  age: string | null;
  location: string;
}

export interface RetrieverItem {
  collection_metadata: {
    source_type: string;
    source_name?: string;
    source_url?: string;
    source_date?: string;
  };
  text: string;
}

interface AssistantResponse {
  assistant_response: {
    answer: string;
    improved_answer: string;
    answer_found: boolean;
  };
  retriever_items: RetrieverItem[];
  status: unknown;
  status_display: {
    status: string;
    display_message: string | null;
  };
  language: {
    language_code: string;
    language_name: string;
  };
  organizations: Organization[] | null;
  domain: string;
  improved_query: string | null;
  is_final_response: boolean;
  sensitive_topic: unknown;
  is_clarification: boolean;
  intent: string;
  is_loading: boolean;
  error: string | null;
}

interface ChatState {
  userQuery: string;
  userContext: UserContext;
  isLoading: boolean;
  error: string | null;
  assistantResponse: AssistantResponse;
  messages: Message[];
  accumulatedOrganizations: Organization[];
  originalStatus: string;
  statusDisplay: string;
  stepsCompleted: boolean;
}

const initialState: ChatState = {
  userQuery: '',
  userContext: {
    originCountry: null,
    timeInGermany: null,
    age: null,
    location: 'Berlin',
  },
  assistantResponse: {
    assistant_response: {
      answer: '',
      improved_answer: '',
      answer_found: false,
    },
    retriever_items: [],
    status: null,
    status_display: {
      status: '',
      display_message: '',
    },
    language: {
      language_code: '',
      language_name: '',
    },
    organizations: null,
    domain: '',
    improved_query: null,
    is_final_response: false,
    sensitive_topic: null,
    is_clarification: false,
    intent: '',
    is_loading: false,
    error: null,
  },
  isLoading: false,
  error: null,
  messages: [],
  accumulatedOrganizations: [],
  originalStatus: '',
  statusDisplay: '',
  stepsCompleted: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setUserQuery: (state, action) => {
      state.userQuery = action.payload;
    },
    setAssistantResponse: (state, action) => {

      const {
        assistant_response,
        retriever_items = [],
        is_clarification = false,
        is_final_response = false,
        status = null,
        status_display = { status: null, display_message: null },
        organizations = [],
        error = null
      } = action.payload;

      // Manejar payload nulo
      const safeAssistantResponse = assistant_response || { improved_answer: '', answer_found: false };
      const improvedAnswer = safeAssistantResponse.improved_answer || '';

      // Asignar originalStatus (si es null, lo pasamos como string vacío)
      state.originalStatus = status || '';

      // Solo actualizamos el estado si *no* es null/undefined
      if (
        status_display &&
        status_display.display_message !== null &&
        status_display.display_message !== undefined
      ) {
        state.statusDisplay = status_display.display_message;
      }

      // Buscar si el último mensaje del asistente es parcial o final
      const lastMessage = state.messages[state.messages.length - 1];
      const isLastMessageAssistant =
        lastMessage && lastMessage.sender === 'assistant' && !lastMessage.isFinalResponse;

      const messageError = safeAssistantResponse.error || error;

      if (isLastMessageAssistant) {
        // Concatenamos (o sobrescribimos) el texto parcial
        lastMessage.content += improvedAnswer;
        lastMessage.answerFound = safeAssistantResponse.answer_found;
        lastMessage.isClarification = is_clarification;
        lastMessage.isFinalResponse = is_final_response;
        lastMessage.sources = retriever_items;
        lastMessage.error = messageError || null;
      } else {
        // Creamos un nuevo mensaje
        const newMessage: Message = {
          sender: 'assistant',
          content: improvedAnswer,
          sources: retriever_items,
          answerFound: safeAssistantResponse.answer_found,
          isClarification: is_clarification,
          isFinalResponse: is_final_response,
        };
        state.messages.push(newMessage);
      }

      // Manejo de organizaciones
      if (Array.isArray(organizations) && organizations.length > 0) {
        organizations.forEach((newOrg: Organization) => {
          const orgAlreadyExists = state.accumulatedOrganizations.some(
            (existingOrg) => existingOrg.name === newOrg.name
          );
          if (!orgAlreadyExists) {
            state.accumulatedOrganizations.push(newOrg);
          }
        });
      }
    },
    setOriginCountry: (state, action) => {
      state.userContext.originCountry = action.payload;
    },
    setTimeInGermany: (state, action) => {
      state.userContext.timeInGermany = action.payload;
    },
    setAge: (state, action) => {
      state.userContext.age = action.payload;
    },
    setLocation: (state, action) => {
      state.userContext.location = action.payload;
    },
    setLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    resetSearch: (state) => {
      /*       state.userQuery = '';
            state.userContext = {
              originCountry: '',
              timeInGermany: '',
              age: '',
              location: '', */
      state.userQuery = '';
      state.userContext = {
        originCountry: null,
        timeInGermany: null,
        age: null,
        location: 'Berlin',
      };
      state.isLoading = false;
      state.error = null;
      state.messages = [];
      state.accumulatedOrganizations = [];
      state.originalStatus = '';
      state.statusDisplay = '';
    },
    finalizeOldAssistantMessages: (state) => {
      state.messages.forEach((msg) => {
        if (msg.sender === 'assistant') {
          msg.isFinalResponse = true;
        }
      });
    },
    addUserMessage: (state, action) => {
      state.messages.push({
        sender: 'user',
        content: action.payload,
        isClarification: action.payload.is_clarification,
        isFinalResponse: action.payload.is_final_response,
      });
    },
    completeStep: (state) => {
      state.stepsCompleted = true;
    },
  },
});

export const {
  setUserQuery,
  setAssistantResponse,
  setOriginCountry,
  setTimeInGermany,
  setAge,
  setLocation,
  setLoading,
  setError,
  addUserMessage,
  resetSearch,
  finalizeOldAssistantMessages,
  completeStep,
} = chatSlice.actions;

export const selectUserQuery = (state: { chat: ChatState }) => state.chat.userQuery;
export const selectAssistantResponse = (state: { chat: ChatState }) => state.chat.assistantResponse;
export const selectUserContext = (state: { chat: ChatState }) => state.chat.userContext;
export const selectTimeInGermany = (state: { chat: ChatState }) => state.chat.userContext.timeInGermany;
export const selectOriginCountry = (state: { chat: ChatState }) => state.chat.userContext.originCountry;
export const selectLocation = (state: { chat: ChatState }) => state.chat.userContext.location;
export const selectAge = (state: { chat: ChatState }) => state.chat.userContext.age;
export const selectAccumulatedOrganizations = (state: { chat: ChatState }) => state.chat.accumulatedOrganizations;
export const selectStatusDisplay = (state: { chat: ChatState }) => state.chat.statusDisplay;
export const selectOriginalStatus = (state: { chat: ChatState }) => state.chat.originalStatus;
export const selectIsLoading = (state: { chat: ChatState }) => state.chat.isLoading;
export const selectError = (state: { chat: ChatState }) => state.chat.error;
export const selectMessages = (state: { chat: ChatState }) => state.chat.messages;
export const selectStepsCompleted = (state: { chat: ChatState }) => state.chat.stepsCompleted;

export const chatReducer = chatSlice.reducer;
export default chatSlice;

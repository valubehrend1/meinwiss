import { createSlice } from '@reduxjs/toolkit';

export interface Message {
  sender: 'user' | 'assistant';
  content: string;
  sources?: RetrieverItem[];
  answerFound?: boolean;
  isFinalResponse: boolean;
  isClarification?: boolean;
  status?: unknown;
}

export interface Organization {
  name: string;
  description: string;
  website: string;
}

interface UserContext {
  originCountry: string;
  timeInGermany: string;
  age: string;
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
  retriever_items: RetrieverItem[]; // Puedes reemplazar 'any' con el tipo adecuado si lo tienes
  status: unknown; // Reemplaza 'any' con el tipo adecuado
  language: {
    language_code: string;
    language_name: string;
  };
  organizations: Organization[] | null;
  domain: string;
  improved_query: string | null;
  is_final_response: boolean;
  sensitive_topic: unknown; // Reemplaza 'any' con el tipo adecuado
  is_clarification: boolean;
  intent: string;
  is_loading: boolean;
  error: null; // Reemplaza 'any' con el tipo adecuado
}


interface ChatState {
  userQuery: string;
  userContext: UserContext;
  isLoading: boolean;
  error: string | null;
  assistantResponse: AssistantResponse;
  messages: Message[];
  accumulatedOrganizations: Organization[];
}

// Estado inicial del slice
const initialState: ChatState = {
  userQuery: '',
  userContext: {
    originCountry: '',
    timeInGermany: '',
    age: '',
    location: '',
  },
  assistantResponse: {
    assistant_response: {
      answer: "",
      improved_answer: "",
      answer_found: false,
    },
    retriever_items: [],
    status: null,
    language: {
      language_code: "",
      language_name: ""
    },
    organizations: null,
    domain: "",
    improved_query: null,
    is_final_response: false,
    sensitive_topic: null,
    is_clarification: false,
    intent: "",
    is_loading: false,
    error: null,
  },
  isLoading: false,
  error: null,
  messages: [],
  accumulatedOrganizations: [],
};


// Crear el slice de Redux
const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setUserQuery: (state, action) => {
      state.userQuery = action.payload;
    },
    setAssistantResponse: (state, action) => {
      console.log("setAssistantResponse", action.payload);

      state.assistantResponse = action.payload;

      const incomingOrganizations = action.payload.organizations; // Venía como "organizations" del backend

      // 3) Si efectivamente vienen nuevas organizaciones, las procesamos
      if (Array.isArray(incomingOrganizations) && incomingOrganizations.length > 0) {
        // Por cada organización nueva, chequeamos si ya existe en el array global `accumulatedOrganizations`
        incomingOrganizations.forEach((newOrg: Organization) => {
          const orgAlreadyExists = state.accumulatedOrganizations.some(
            (existingOrg) => existingOrg.name === newOrg.name
          );
          // Si no existe, la agregamos
          if (!orgAlreadyExists) {
            state.accumulatedOrganizations.push(newOrg);
          }
        });
      }

      state.messages = [...state.messages, {
        sender: 'assistant',
        content: action.payload.assistant_response.improved_answer,
        sources: action.payload.retriever_items,
        answerFound: action.payload.answer_found,
        isClarification: action.payload.is_clarification,
        isFinalResponse: action.payload.is_final_response,
        status: action.payload.status,
      }];
      // Añadir la respuesta del asistente como un nuevo mensaje
      /*      state.messages.push({
             sender: 'assistant',
             content: action.payload.assistant_response.improved_answer || '',
           }); */
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
      state.userQuery = '';
      state.userContext = {
        originCountry: '',
        timeInGermany: '',
        age: '',
        location: '',
      };
      state.isLoading = false;
      state.error = null;
      state.messages = [];
    },
    addUserMessage: (state, action) => {
      state.messages = [
        ...state.messages,
        {
          sender: 'user',
          content: action.payload,
          isClarification: action.payload.is_clarification,
          isFinalResponse: action.payload.is_final_response,
        },
      ];
    },
  },
});

// Exportar las acciones y el reducer
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
  resetSearch } = chatSlice.actions;

export const selectUserQuery = (state: { chat: ChatState }) => state.chat.userQuery;
export const selectAssistantResponse = (state: { chat: ChatState }) => state.chat.assistantResponse;
export const selectUserContext = (state: { chat: ChatState }) => state.chat.userContext;
export const selectTimeInGermany = (state: { chat: ChatState }) => state.chat.userContext.timeInGermany;
export const selectOriginCountry = (state: { chat: ChatState }) => state.chat.userContext.originCountry;
export const selectLocation = (state: { chat: ChatState }) => state.chat.userContext.location;
export const selectAge = (state: { chat: ChatState }) => state.chat.userContext.age;
export const selectAccumulatedOrganizations = (state: { chat: ChatState }) => state.chat.accumulatedOrganizations;
export const selectIsLoading = (state: { chat: ChatState }) => state.chat.isLoading;
export const selectError = (state: { chat: ChatState }) => state.chat.error;
export const selectMessages = (state: { chat: ChatState }) => state.chat.messages;

export const chatReducer = chatSlice.reducer;
export default chatSlice;

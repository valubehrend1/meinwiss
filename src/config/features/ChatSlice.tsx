import { createSlice } from '@reduxjs/toolkit';

interface Message {
  sender: 'user' | 'assistant';
  content: string;
}

interface UserContext {
  originCountry: string;
  timeInGermany: string;
  age: string;
  location: string;
}

interface RetrieverItem {
  collection_metadata: {
    source_type: string;
    source_description?: string;
    source_name?: string;
  };
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
  domain: string;
  improved_query: string | null;
  sensitive_topic: unknown; // Reemplaza 'any' con el tipo adecuado
  intent: string;
  is_loading: boolean;
  error: unknown; // Reemplaza 'any' con el tipo adecuado
}


interface ChatState {
  userQuery: string;
  userContext: UserContext;
  isLoading: boolean;
  error: string | null;
  assistantResponse: AssistantResponse;
  messages: Message[];
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
    domain: "",
    improved_query: null,
    sensitive_topic: null,
    intent: "",
    is_loading: false,
    error: null,
  },
  isLoading: false,
  error: null,
  messages: [],
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

      state.messages = [...state.messages, {
        sender: 'assistant',
        content: action.payload.assistant_response.improved_answer,
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
export const selectIsLoading = (state: { chat: ChatState }) => state.chat.isLoading;
export const selectError = (state: { chat: ChatState }) => state.chat.error;
export const selectMessages = (state: { chat: ChatState }) => state.chat.messages;

export const chatReducer = chatSlice.reducer;
export default chatSlice;

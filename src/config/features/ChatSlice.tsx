import { createSlice } from '@reduxjs/toolkit';
import {
  Message,
  ChatState
} from '../../types/redux/chat';
import {
  Organization
} from '../../types/models';

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

      // Handle null payload
      const safeAssistantResponse = assistant_response || { improved_answer: '', answer_found: false };
      const improvedAnswer = safeAssistantResponse.improved_answer || '';

      // Assign originalStatus (if it's null, we pass it as an empty string)
      state.originalStatus = status || '';

      // We only update the status if it's *not* null/undefined
      if (
        status_display &&
        status_display.display_message !== null &&
        status_display.display_message !== undefined
      ) {
        state.statusDisplay = status_display.display_message;
      }

      // Check if the last assistant message is partial or final
      const lastMessage = state.messages[state.messages.length - 1];
      const isLastMessageAssistant =
        lastMessage && lastMessage.sender === 'assistant' && !lastMessage.isFinalResponse;

      const messageError = safeAssistantResponse.error || error;

      if (isLastMessageAssistant) {
        // We concatenate (or overwrite) the partial text
        lastMessage.content += improvedAnswer;
        lastMessage.answerFound = safeAssistantResponse.answer_found;
        lastMessage.isClarification = is_clarification;
        lastMessage.isFinalResponse = is_final_response;
        lastMessage.sources = retriever_items;
        lastMessage.error = messageError || null;
      } else {
        // We create a new message
        const newMessage: Message = {
          sender: 'assistant',
          content: improvedAnswer,
          sources: retriever_items,
          answerFound: safeAssistantResponse.answer_found,
          isClarification: is_clarification,
          isFinalResponse: is_final_response,
          error: messageError || undefined,
        };
        state.messages.push(newMessage);
      }

      // Organizations handling
      if (Array.isArray(organizations) && organizations.length > 0) {
        organizations.forEach((newOrg: Organization) => {
          const orgAlreadyExists = state.accumulatedOrganizations.some(
            (existingOrg: Organization) => existingOrg.name === newOrg.name
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

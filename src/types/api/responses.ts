// Types related to API responses

import { Organization } from '../models';

/**
 * Information item retrieved from the API retrieval system
 */
export interface RetrieverItem {
  collection_metadata: {
    source_type: string;
    source_name?: string;
    source_url?: string;
    source_date?: string;
  };
  text: string;
}

/**
 * Assistant response from the API
 */
export interface AssistantResponse {
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

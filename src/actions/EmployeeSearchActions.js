import { SEARCH_TEXT_CHANGED } from './types';

export const searchTextChanged = (query) => (
    {
       type: SEARCH_TEXT_CHANGED,
       payload: query 
   }
);

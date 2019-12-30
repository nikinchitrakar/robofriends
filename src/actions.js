import { CHANGE_SEARCHFIELD } from './costants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
});
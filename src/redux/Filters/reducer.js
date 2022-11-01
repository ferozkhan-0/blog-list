import initialState from "./initialState";
import { CATEGORY, AUTHOR, SEARCH } from "./actiontypes";
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                searchKey: action.payload,
            };
        case CATEGORY:
            return {
                ...state,
                category: action.payload,
            };
        case AUTHOR:
            return {
                ...state,
                author: action.payload,
            };
        default:
            return state;
    }
};
export default reducer;

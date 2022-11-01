import { SEARCH, AUTHOR, CATEGORY } from "./actiontypes";
export const searchAction = (search) => {
    return {
        type: SEARCH,
        payload: search,
    };
};
export const categoryAction = (cate) => {
    return {
        type: CATEGORY,
        payload: cate,
    };
};
export const authorAction = (author) => {
    return {
        type: AUTHOR,
        payload: author,
    };
};

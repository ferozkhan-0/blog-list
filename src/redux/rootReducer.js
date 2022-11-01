import { combineReducers } from "redux";
import blogsReducer from "./Blogs/reducer";
import filterReducer from "./Filters/reducer";

const rootReducer = combineReducers({
    blogs: blogsReducer,
    filters: filterReducer,
});

export default rootReducer;

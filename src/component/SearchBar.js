import { useDispatch } from "react-redux";
import search from "../assets/search.svg";
import { searchAction } from "../redux/Filters/action";

const SearchBar = () => {
    const dispatch = useDispatch();

    const searchHandle = (fu, dealy) => {
        let timeOutId;
        return (...arg) => {
            clearTimeout(timeOutId);
            timeOutId = setTimeout(() => {
                fu(...arg);
            }, dealy);
        };
    };

    const getSearchKey = (value) => {
        dispatch(searchAction(value));
    };
    const debounceGetKey = searchHandle(getSearchKey, 2000);
    return (
        <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
            <input
                className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                placeholder="Search"
                onChange={(e) => debounceGetKey(e.target.value)}
            />
            <img
                className="inline h-6 cursor-pointer"
                src={search}
                alt="Search"
            />
        </div>
    );
};

export default SearchBar;

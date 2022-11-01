import Footer from "./component/Footer";
import SearchBar from "./component/SearchBar";
import Navigation from "./component/Navigation";
import BlogTitle from "./component/BlogTitle";
import BlogList from "./component/BlogList";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
    return (
        <Provider store={store}>
            <div>
                <Navigation />
                <SearchBar />
                <div className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
                    <div className="absolute inset-0">
                        <div className="bg-white h-1/3 sm:h-2/3"></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto">
                        <BlogTitle />
                        <BlogList />
                    </div>
                </div>
                <Footer />
            </div>
        </Provider>
    );
}

export default App;

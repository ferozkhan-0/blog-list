import lws from "../assets/lws.svg";
const Navigation = () => {
    return (
        <nav className="bg-slate-100 shadow-md">
            <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
                <div href="index.html">
                    <img className="h-10" src={lws} alt="Learn with Sumit" />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;

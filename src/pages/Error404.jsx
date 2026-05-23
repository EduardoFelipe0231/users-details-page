import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="h-[calc(100vh-78px)] flex flex-col items-center justify-center text-zinc-800">
            <h1 className="text-7xl font-black md:text-9xl">404</h1>
            <p className="text-2xl md:text-3xl">Not Found</p>
            <span className="text-lg text-zinc-500 md:text-xl">The requested URL was not found on this server.</span>
            <Link to="/" className="bg-red-400 p-2 text-white cursor-pointer mt-5 rounded text-xl">
                Home
            </Link>
        </div>
    )
}

export default Error404;
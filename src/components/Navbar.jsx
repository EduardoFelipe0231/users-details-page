import { Link  } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
    return (
        <header className="shadow-lg w-full">
            <div className="container mx-auto flex items-center justify-between py-4 gap-5 font-light text-lg px-3">
                <Link to="/" className="flex-1 font-bold text-3xl block">
                    User<span className="text-red-400">s</span>
                </Link>

                <nav className="hidden gap-7 text-zinc-800 md:flex">
                    <Link className="hover:text-zinc-800 transition-all ">
                        Blog
                    </Link>
                    <Link className="hover:text-zinc-800 transition-all">
                        About us
                    </Link>
                    <Link className="hover:text-zinc-800 transition-all">
                        Contact
                    </Link>
                </nav>

                <div className="hidden gap-3 sm:flex">
                    <button className="px-5 py-2 rounded text-xl border text-white cursor-pointer hover:shadow-sm bg-zinc-700 hover:bg-zinc-700/85 transition-all">Sign Up</button>
                    <button className="bg-red-400 px-5 py-2 rounded text-white text-xl cursor-pointer hover:bg-red-400/85 transition-all">Login</button>
                </div>

                <div>
                    <Menu />
                </div>
            </div>
        </header>
    )
}

export default Navbar;
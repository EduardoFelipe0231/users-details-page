import { UserRound } from "lucide-react"
import { Link } from "react-router-dom";

export default function Person( { pers } ){
    return(
        <div className="bg-white-100 relative text-center py-7 shadow-sm rounded-2xl cursor-pointer space-y-6 border border-zinc-300">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <UserRound size={64} className="bg-zinc-400 shadow-sm rounded-full p-2 text-white" />
            </div>
            <h2 className="text-2xl font-bold tracking-wide md:text-2xl">{pers.name}</h2>
            <Link className="bg-zinc-700 p-2 px-4 rounded-sm text-white cursor-pointer hover:bg-zinc-700/85 transition-all" to={`/person/details/${pers.id}`}>See more</Link>
        </div>
    )
}
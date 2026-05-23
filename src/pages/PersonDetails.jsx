import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { ArrowBigDownDash, ArrowLeft, Building2, Contact, MapPin, UserRound } from "lucide-react"
import { useEffect, useState } from "react";
import { getPerson, getPersonById } from "../data/person";


export default function PersonDetails(){

    const { id } = useParams();
    const [details, setDetails] = useState(null)
    const navigate = useNavigate();
     
    useEffect(() => {
        const foundPerson = getPersonById(id);        
        
        if (!foundPerson) {
            navigate("/")
            return;
        }

        setDetails(foundPerson)

    }, [id]);

    if (!details){
        return <h1>Loading...</h1>
    }

    return(        
        <div>
            <div className="bg-zinc-300 flex items-center justify-center h-55 relative ">
                <h1 className="text-4xl tracking-widest font-black text-zinc-800 md:text-5xl">{details.name}</h1>
            </div>
            <div className="container mx-auto mt-4 px-3 py-10">
                <div className="py-2">
                    <div className="flex gap-2 items-center text-zinc-700 justify-center md:justify-start">
                        <Contact size={20} />
                        <h2 className="text-2xl font-bold">Personal Details</h2>                    
                    </div>
                    <div className="grid grid-cols-1 mt-2 gap-3 lg:grid-cols-4 md:grid-cols-2 md:gap-5">
                        <article className="flex flex-col items-center bg-zinc-50 cursor-pointer rounded-sm py-5 border border-zinc-200 transition-all">
                            <h3 className="text-xl font-bold capitalize">Username</h3>
                            <p className="text-lg">{details.username}</p>
                        </article>
                        <article className="flex flex-col items-center bg-zinc-50 cursor-pointer rounded-sm py-5 border border-zinc-200 transition-all">
                            <h3 className="text-xl font-bold capitalize">email</h3>
                            <p className="text-lg">{details.email}</p>
                        </article>
                        <article className="flex flex-col items-center bg-zinc-50 cursor-pointer rounded-sm py-5 border border-zinc-200  transition-all">
                            <h3 className="text-xl font-bold capitalize">phone</h3>
                            <p className="text-lg">{details.phone}</p>
                        </article>
                        <article className="flex flex-col items-center bg-zinc-50 cursor-pointer rounded-sm py-5 border border-zinc-200  transition-all">
                            <h3 className="text-xl font-bold capitalize">website</h3>
                            <p className="text-lg">{details.website}</p>
                        </article>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="py-2">
                    <div className="flex gap-2 items-center text-zinc-700 justify-center md:justify-start">
                        <MapPin size={20} />
                        <h2 className="text-2xl font-bold">Location</h2>                    
                    </div>
                    <div className="w-full flex flex-col mt-2 ">
                        <section className="flex flex-col items-center text-center justify-center bg-zinc-50 cursor-pointer rounded-sm py-5 border border-zinc-200 transition-all px-3 md:px-5 text-lg  lg:flex-row gap-3">
                            <p>
                                <span className="font-bold block md:inline-block">Street</span> {details.address.street} - {details.address.suite}, {details.address.city} 
                            </p>
                            <p><span className="font-bold block md:inline-block">Zipcode</span> {details.address.zipcode}</p>
                        </section>                        
                    </div>
                    </div>
                    <div className="py-2">
                        <div className="flex gap-2 items-center text-zinc-700 justify-center md:justify-start">
                            <Building2 size={20} />
                            <h2 className="text-2xl font-bold">Company</h2>                    
                        </div>
                        <div className="w-full flex flex-col mt-2 text-lg">
                            <section className="flex bg-zinc-50 cursor-pointer rounded-sm py-5 border border-zinc-200 transition-all px-3 md:px-5 justify-center md:justify-start">
                                <p>{details.company.name}</p>
                            </section>                        
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center mt-20">
                    <Link to="/">
                        <button className="bg-red-400 rounded-sm text-white px-6 py-3 text-2xl text-center cursor-pointer hover:bg-red-400/85 transition-all">Back home</button>
                    </Link>
                </div>
            </div>
        </div>        
    )
}
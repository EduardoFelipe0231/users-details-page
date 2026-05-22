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
            <div className="bg-zinc-300 flex items-center justify-center h-55 relative">
                <h1 className="text-5xl tracking-widest font-black text-zinc-800">{details.name}</h1>
            </div>
            <div className="container mx-auto mt-4">
                <div className="py-2">
                    <div className="flex gap-2 items-center text-zinc-700">
                        <Contact size={20} />
                        <h2 className="text-2xl font-bold">Personal Details</h2>                    
                    </div>
                    <div className="grid grid-cols-4 mt-2 gap-5">
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

                <div className="grid grid-cols-2 gap-5">
                    <div className="py-2">
                    <div className="flex gap-2 items-center text-zinc-700">
                        <MapPin size={20} />
                        <h2 className="text-2xl font-bold">Location</h2>                    
                    </div>
                    <div className="w-full flex flex-col mt-2 ">
                        <section className="flex bg-zinc-50 cursor-pointer rounded-sm py-5 border border-zinc-200 transition-all px-5">
                            <p className="text-lg"><span className="font-bold">Street</span> {details.address.street} - {details.address.suite}, {details.address.city} - <span className="font-bold">ZipCode</span>: {details.address.zipcode}</p>
                        </section>                        
                    </div>
                    </div>
                    <div className="py-2">
                        <div className="flex gap-2 items-center text-zinc-700">
                            <Building2 size={20} />
                            <h2 className="text-2xl font-bold">Company</h2>                    
                        </div>
                        <div className="w-full flex flex-col mt-2 ">
                            <section className="flex flex-col bg-zinc-50 cursor-pointer rounded-sm py-5 border border-zinc-200 transition-all px-5">
                                <p><span className="font-bold">Name:</span> {details.company.name} - <span className="font-bold">Cargo:</span> {details.company.bs}</p>
                            </section>                        
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center mt-20">
                    <Link to="/">
                        <button className="bg-emerald-600 rounded-sm text-white px-6 py-3 text-2xl text-center cursor-pointer">Back home</button>
                    </Link>
                </div>
            </div>
        </div>        
    )
}
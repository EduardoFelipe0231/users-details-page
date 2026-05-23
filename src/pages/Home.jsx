import { getPerson } from '../data/person'
import Person from "../components/Person";

export default function Home(){
    const person = getPerson();
    
    return (
        <div>
            <main className="container mx-auto pb-10">
                <div className="flex flex-col items-center mt-12 gap-2">
                    <h1 className="font-bold text-3xl  uppercase text-zinc-800 md:text-4xl">Registered users</h1>
                    <p className="text-xl text-zinc-600 text-center">Click to see more details and discover more information.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 mt-20 px-3">
                    {person.map((pers) => (
                        <Person pers={pers} key={pers.id} />
                    ))}
                </div>      
            </main>
        </div>
    )
}
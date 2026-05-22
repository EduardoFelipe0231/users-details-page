import { getPerson } from '../data/person'
import Person from "../components/Person";

export default function Home(){
    const person = getPerson();
    return (
        <div>
            <main className="container mx-auto pb-10">
                <div className="flex flex-col items-center mt-12 gap-2">
                    <h1 className="font-bold text-4xl uppercase text-zinc-800">Registered people</h1>
                    <p className="text-xl text-zinc-600">Learn more about each person and make friends and contacts for your company.</p>
                </div>
                <div className="grid grid-cols-3 gap-15 mt-20">
                    {person.map((pers) => (
                        <Person pers={pers} key={pers.id} />
                    ))}
                </div>            
            </main>
        </div>
    )
}
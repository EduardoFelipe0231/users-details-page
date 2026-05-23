import { useState } from "react";

const Auth = () => {

    const [mode, setMode] = useState("signup")

    const onSubmit = (e) => {
        e.preventDefault();
        alert("ok")
    }

    return(
        <div className="flex flex-col items-center h-[calc(100vh-78px)]  bg-zinc-200 py-15">
            <div className="container mx-auto bg-zinc-100 shadow rounded-2xl p-6 max-w-lg w-full justify-center flex flex-col text-zinc-900">
                <div className="text-center">
                    <h1 
                        className="text-4xl font-semibold">
                        {mode === 'signup'? "Create Account" : "Login"}
                        </h1>

                    <p 
                        className="font-light text-zinc-500">
                        {mode === 'signup' ? "Sign up to join the event" : "enter your account and have fun!"}        
                    </p>

                </div>
                <form action="#" onSubmit={onSubmit}>
                    {mode === 'signup' ? (

                        <div className="flex flex-col w-full mt-5 gap-2">
                            <label htmlFor="username" className="text-lg font-semibold">Username</label>
                            <input type="text" name="username" id="username" placeholder="your name"  className="rounded-sm p-3 border border-zinc-200 focus:border-red-400 focus:outline-hidden text-zinc-500" />
                        </div>

                    ) : null
                    }

                    <div className="flex flex-col w-full mt-5 gap-2">
                        <label htmlFor="email" className="text-lg font-semibold">Email</label>
                        <input type="email" name="email" id="email" placeholder="email@outlook.com"  className="rounded-sm p-3 border border-zinc-200 focus:border-red-400 focus:outline-hidden text-zinc-500" />
                    </div>
                    <div className="flex flex-col w-full mt-5 gap-2">
                        <div className="flex items-center justify-between">  
                            <label htmlFor="password" className="text-lg font-semibold">Password</label>
                            {mode === 'signup' ? null : <a href="#" className="text-red-400">Forgot your password?</a>}
                        </div>
                        <input type="password" name="password" id="password" placeholder="************" className="rounded-sm p-3 border border-zinc-200 focus:border-red-400 focus:outline-hidden text-zinc-500" />
                    </div>

                    <div className="space-y-4 mt-5">
                        <button 
                            className="bg-red-400 w-full text-white p-3 rounded-sm cursor-pointer hover:bg-red-400/85 transition-all outline-0 font-bold" type="submit">
                            {mode === 'signup' ? "Sign Up" : "Login"}    
                        </button>

                        {mode === 'signup' ? (
                            <p className="text-center text-lg">Already have an account? <a className="text-red-400 hover:text-red-400/85 cursor-pointer" onClick={() => setMode("Login")}> Login</a> </p>
                            
                        ) : (
                            <p className="text-center text-lg">Don't have an account? <a className="text-red-400 hover:text-red-400/85 cursor-pointer" onClick={() => setMode("signup")}> Sign Up</a> </p>
                        )}
                    </div>                    
                </form>
            </div>
        </div>
    )
}

export default Auth;
import Link from "next/link";
import { Form as LoginForm } from "../../../../../components/loginform";


export default function LoginPage(){
    return(
        <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
            <div className="shadow-xl px-8 pb-8 pt-12 bg-teal-800 rounded-xl space-y-12"> 
                <h1 className="font-bold text-4xl text-white text-center">ROPANG </h1>
                <LoginForm/>
                <p className="text-center text-white">
                    Need to create an account?  
                    <Link className="text-indigo-400 hover:underline" href="/register">
                        Create Account</Link>{' '} 
                </p>
            </div>
        </div>
    )
}

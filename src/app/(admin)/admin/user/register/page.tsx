import Link from "next/link";
import { RegisterForm } from "../../../../../components/registerform";

export default function RegisterPage(){
    return(
        <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
            <div className="shadow-xl px-8 pb-8 pt-12 bg-teal-800 rounded-xl space-y-12"> 
                <h1 className="font-bold text-3xl text-center text-white">Create your Account</h1>
                <RegisterForm />
                <p className="text-center text-white">
                    Have an account?  <Link className="text-indigo-400 hover:underline" href="/login">Sign in</Link>{' '} 
                </p>
            </div>
        </div>
    )
}

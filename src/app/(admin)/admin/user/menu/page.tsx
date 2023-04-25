import Link from "next/link";
import Image from 'next/image';
import DisplayPic from '../menu/burger.png'
import Button  from "@/ui/Button"

export default function MenuIdPage(){
    return(
    <div>
        {/* Navigation Bar */}
        <nav>
            {/* Content of navigation bar */}
        </nav>

        {/* Back Button */}
        <button className= "py-8 flex justify-center items-center"style={{display: "block", margin: "0 auto"}}>Back</button>
        
        {/* Picture */}
        <Image 
        className= " max-w-xs mx-auto"
        src={DisplayPic} 
        alt="Product" />

        {/* Text */}
        <h1 className = "font-bold text-4xl text-center">
            Ini Burger
        </h1>
        <h2 className="font-semibold text-2xl text-center">
            RM 21.00
        </h2>

        {/* Buttons */}
        <div className="py-6" style={{display: "flex", justifyContent: "center"}}>
            <Button className= "rounded-md"style={{marginRight: "10px"}}>Add to Cart</Button>
            <Button>Reserve Table</Button>
        </div>

        <h1 className = "font-medium text-3xl text-center">
            Ingredients
        </h1>

         {/* Text Below */}
        <p style={{textAlign: "center"}}>Lorem Ipsum</p>
    </div>
    )
}
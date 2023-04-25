'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
// import {signIn } from "next-auth/react"
import { useState } from "react"

export const Form = () => {
    const [name, setName] = useState ('')
    const [price, setPrice] = useState ('')
    const [ingredients, setIngredients] = useState('')
    
    const onSubmit = (e: React.FormEvent) => {
        console.log('Login!')

        // e.preventDefault()
        // signIn ('credentials',{
        //     email,
        //     password
        // })
    }

    return (
        <form onSubmit = {onSubmit} className="space-y-12 w-[400px]">
        <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        id="name"
        type="name"/>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="price">Price</Label>
        <Input 
            className="w-full"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id='price' 
            type="price"/>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="ingredients">Ingredients</Label>
        <Input 
            className="w-full"
            required
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            id='ingredients' 
            type="ingredients"/>
        </div>
    </form>
    )
}
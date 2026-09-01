import { NextRequest, NextResponse } from "next/server";
import {Resend} from 'resend'


export async function POST(req: NextRequest){

    
    try{
        const resend = new Resend(process.env.RESEND_API_KEY || '')
        const {name, email, phone, text} = await req.json()
        if(!name || !email || !phone )
        {
            console.log("404: invalid request")
            return NextResponse.json({ok:false},{status: 404})
        }
        const resp = await resend.emails.send({
            from: process.env.RESEND_SENDER_EMAIL || '',
            to: process.env.RESEND_TARGET_EMAIL || '',
            subject:'new webapp lead',
            html:`
                <h1>Lead Information:</h1>
                <h2>name: ${name}</h2>
                <h2>email: ${email}</h2>
                <h2>phone: ${phone}</h2>
                <p>${text}</p>
            `
        
        })

        return NextResponse.json({ok: true},{status:200})
    }
    catch(e){
        return NextResponse.json({ok:false},{status:500})
    }


    
}
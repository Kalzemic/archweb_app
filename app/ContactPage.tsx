'use client'
import { useState } from 'react';
import '@/Styles/ContactPage.css'
import { motion } from 'framer-motion';


export default function Contactpage() {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {

        
        e.preventDefault()
        const payload = {name,phone,email,text}
        try{
            const resp = await fetch('/api/contact',
                {
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body: JSON.stringify(payload)
                })
            if(!resp.ok)
            {
                alert('שגיאת שרת, פרטים לא נשלחו'); 
                return;
            }
            setName('')
            setPhone('')
            setEmail('')
            setText('')
            alert('פרטים נשלחו בהצלחה')
        }catch(e){
            alert('לא ניתן לשלוח פרטים')
        }
    }


   
    return (
        <div className="contact-page">
          <div className="contact-copy">
            <p className="contact-kicker">צרו קשר</p>
      
            <h2 className="english-display">
              Start a Project
            </h2>
      
            <p>
              ספרו לנו מה אתם רוצים לבנות, איזו בעיה אתם מנסים לפתור
              ומה חשוב לכם בתהליך. נחזור אליכם כדי להבין את הפרויקט
              ולבחון את הדרך המתאימה לפתח אותו.
            </p>
          </div>
      
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            aria-label="טופס יצירת קשר"
          >
            <div className="form-field">
              <label htmlFor="name">שם</label>
      
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                autoComplete="name"
                required
                onChange={(event) => setName(event.target.value)}
              />
            </div>
      
            <div className="form-field">
              <label htmlFor="phone">טלפון</label>
      
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                autoComplete="tel"
                inputMode="tel"
                required
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
      
            <div className="form-field">
              <label htmlFor="email">אימייל</label>
      
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                autoComplete="email"
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
      
            <div className="form-field">
              <label htmlFor="message">ספרו לנו על הפרויקט</label>
      
              <textarea
                id="message"
                name="message"
                value={text}
                rows={6}
                onChange={(event) => setText(event.target.value)}
              />
            </div>
      
            <button className="button-primary contact-submit" type="submit">
              שליחת הפרטים
            </button>
          </form>
        </div>
    );
}
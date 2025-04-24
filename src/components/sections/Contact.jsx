import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com'

export const Contact = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""
    })

    const SERVICE_ID = "service_ww8jo4o"
    const TEMPLATE_ID = "template_5e6aa4n"
    const PUBLIC_KEY = "XVmnBxgz4Jh_c1wfC"

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                alert("Message Sent!")
                setFormData({name:"", email:"", message:""})
            })
            .catch(() => alert("Oops! Something went wrong. Please Try again"))
    }

    return (
        <div className="px-20 py-10">
            
        <section id="contact" className="w-full lg:w-1/1 bg-white/60 p-8 rounded-2xl shadow-md border border-gray-100 backdrop-blur px-160">
            {/* Background overlay for better readability */}
            <div className="absolute inset-0 z-[-1] bg-white/80 backdrop-blur-sm"></div>
            
            <RevealOnScroll>
                <div className="px-4 w-full max-w-md md:max-w-lg">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input 
                                type="text"  
                                id="name" 
                                name="name" 
                                required
                                value={formData.name}
                                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Name"
                                onChange={(e) => setFormData({...formData, name:e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <input 
                                type="email"  
                                id="email" 
                                name="email" 
                                required
                                value={formData.email}
                                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="example@gmail.com"
                                onChange={(e) => setFormData({...formData, email:e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <textarea   
                                id="message" 
                                name="message" 
                                required 
                                value={formData.message}
                                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Your Message..."
                                rows="5"
                                onChange={(e) => setFormData({...formData, message:e.target.value})}
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
        </div>
    )
}
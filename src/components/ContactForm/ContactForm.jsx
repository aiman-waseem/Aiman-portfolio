import React, {useRef} from 'react'
import { Formik, Form, Field } from "formik";
import emailjs from '@emailjs/browser';
import { useState } from "react";





function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

 const form =useRef()


  const handleSubmit = (e) => {
    e.preventDefault();
    

const templateParameters = {
  user_name: name,
  user_email: email,
  to_name: "Aiman Waseem",
  message: message,
};
console.log(templateParameters)

emailjs.sendForm('service_nsfo5wi', 'template_wf3llwh', form.current, 'ZX5Dv6onCYjUP0dxl')
      .then((result) => {
        console.log("current form is", form.current)
          console.log("Result text is",result.text, "Result is",result);
          alert("Your message sent successfully.")
      }, (error) => {
          console.log(error.text);
          
      });
      e.target.reset()
  }

    return (
        <>
       <div className="formContainer  h-1/2 py-[5rem] max-w-sm px-8  min-[1000px]:max-w-2xl mx-auto text-center text-lg bg-sl-200 text-white">
        Contact Me
        <Formik initialValues={{ name: "", email: "" }}>
          <Form
           ref={form}
            onSubmit={handleSubmit}
            className="flex w-full  min-[600px]:text-md text-sm justify-between text-center flex-col"
          >
            <Field
              type="text"
              name="name"
              placeholder="Your Full Name"
              onChange={(e) => setName(e.target.value)}
              className="bg-slate-800   rounded-lg py-4 px-4"
              required="true"
              value={name}
            />
            <Field
              type="email"
              name="email"
              placeholder="Your Email Address"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-800 my-4 rounded-lg py-4 px-4"
              required="true"
              value={email}
            />
            <Field
              name="message"
              as="textarea"
              rows="5"
              placeholder="Your Message"
              onChange={(e) => setMessage(e.target.value)}
              required="true"
              className="bg-slate-800 rounded-lg py-4 px-4"
              value={message}
            />
            <button className='bg-slate-800 my-6 py-5 w-1/2 rounded-lg flex  place-content-center mx-auto md:max-w-xs md:px-1 ' type="submit">Send Message</button>
            </Form>
            </Formik>
       </div>
        </>
    )
    }

export default ContactForm

'use client'
import {Container, FormControl, FormErrorMessage, FormLabel, Heading, Input } from "@chakra-ui/react"
import { Textarea } from "@chakra-ui/react"

import '@styles/contact.css'
import { useState } from "react"

const initValues = {
    name: "",
    email: "",
    subject: "",
    message:""
 };
const initState = {values: initValues};

const page = () => {
    const [state, setState] = useState(initState);
    const {values} = state;
    const handleChange = ({target}) => setState((prev)=>({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value,
        },
    }));
  return (
    <div className="contact-container">
    <section className="contact-subscription">
        <div className='contact-subscription-heading'>
    <h1 className='title'>Contact</h1>
        <p>
            "Always find ways to improve"
        </p>
        <p>
            Get in touch
        </p>
        <p style={{color: "var(--primaryTextColor)", paddingBottom: "10px"}}>Email: santiagohernandez120199@gmail.com</p>
        </div>
            <div className="input-areas">
                <FormControl isRequired className="email-form">
                    <FormLabel className="input-name">Name</FormLabel>
                    <Textarea
                    className="input-field"
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={handleChange}/>
                    <FormErrorMessage className="error-message">Required</FormErrorMessage>
                </FormControl>
                <FormControl isRequired className="email-form">
                    <FormLabel className="input-name">Email</FormLabel>
                    <Textarea
                    className="input-field"
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={handleChange}/>
                    <FormErrorMessage className="error-message">Required</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={true}className="email-form">
                    <FormLabel className="input-name">Subject</FormLabel>
                    <Textarea
                    className="input-field"
                    type='text'
                    errorBorderColor="red.300"
                    name='subject'
                    value={values.subject}
                    onChange={handleChange}/>
                    <FormErrorMessage className="error-message">Required</FormErrorMessage>
                </FormControl>
                <FormControl isRequired className="email-form">
                    <FormLabel className="input-name">Message</FormLabel>
                    <Textarea
                    className="input-field"
                    type='text'
                    name='message'
                    value={values.message}
                    onChange={handleChange}/>
                    <FormErrorMessage className="error-message">Required</FormErrorMessage>
                </FormControl>
                {/* <EmailForm/> */}
                
            </div>
        
    </section>
</div>
  )
}

export default page
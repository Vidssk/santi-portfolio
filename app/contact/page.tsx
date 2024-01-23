'use client'
import {Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, useToast } from "@chakra-ui/react"
import { Textarea } from "@chakra-ui/react"
import {sendContactForm} from '../lib/api'
import '@styles/contact.css'
import { useState } from "react"

interface ContactFormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  
  interface ContactFormState {
    values: ContactFormValues;
    isLoading: boolean;
    error: string | null;
  }
  
  const initValues: ContactFormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
// const initValues = {
//     name: "",
//     email: "",
//     subject: "",
//     message:"",
//  };

const initState = {values: initValues, isLoading: false, error: null};

const Page = () => {
    const toast = useToast();
    const [state, setState] = useState<ContactFormState>(initState);
    const[touched, setTouched] = useState<Record<string,boolean>>({});

    const {values, isLoading, error} = state;

    const onBlur = (name: string) => () => setTouched((prev) => ({ ...prev, [name]: true }));

    const handleChange = (name: string) => (event: React.ChangeEvent<HTMLTextAreaElement>) => setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: event.target.value,
      },
    }));
    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading:true
        }));
        try {
            await sendContactForm(values);
            setTouched({});
            setState(initState);
            toast({
                title: "Message sent.",
                status: "success",
                duration: 2000,
                position: "top",
            })
            
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading:false,

            }));
        }
        
    }
  return (
    <div className="contact-container">
    <section className="contact-subscription">
        <div className='contact-subscription-heading'>
    <h1 className='title'>Contact</h1>
    {error && (
        <h2>{error}</h2>
    )}
        <p>
        &quot;Always find ways to improve&quot;
        </p>
        <p>
            Get in touch
        </p>
        <p style={{color: "var(--primaryTextColor)", paddingBottom: "10px"}}>Email: santiagohernandez120199@gmail.com</p>
        </div>
            <div className="input-areas">
                <FormControl isRequired isInvalid={touched.name &&!values.name}className="email-form">
                    <FormLabel className="input-name">Name</FormLabel>
                    <Textarea
                    className="input-field"
                    name='name'
                    value={values.name}
                    onChange={handleChange('name')}
                    onBlur={onBlur('name')}
                    />
                    <FormErrorMessage className="error-message">Required</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={touched.email && !values.email} className="email-form">
                    <FormLabel className="input-name">Email</FormLabel>
                    <Textarea
                    className="input-field"
                    name='email'
                    value={values.email}
                    onChange={handleChange('email')}
                    onBlur={onBlur('email')}
                    />
                    <FormErrorMessage className="error-message">Required</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={touched.subject && !values.subject}className="email-form">
                    <FormLabel className="input-name">Subject</FormLabel>
                    <Textarea
                    className="input-field"
                    // errorBorderColor="red"
                    focusBorderColor="red.300"
                    name='subject'
                    value={values.subject}
                    onChange={handleChange('subject')}
                    onBlur={onBlur('subject')}
                    />
                    <FormErrorMessage className="error-message">Required</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={touched.message && !values.message} className="email-form">
                    <FormLabel className="input-name">Message</FormLabel>
                    <Textarea
                    className="input-field"
                    name='message'
                    value={values.message}
                    onChange={handleChange('message')}
                    onBlur={onBlur('message')}
                    />

                    <FormErrorMessage className="error-message">Required</FormErrorMessage>
                </FormControl>
                <Button
                    // variant="outline"
                    marginTop="20px"
                    backgroundColor="var(--secondaryColor)"
                    padding="10px"
                    borderRadius="10px"
                    border= "2px solid rgba(255, 255, 255, 0.039)" 
                    boxShadow= "0 0 10px rgba(0, 0, 0, 0.5)" 
                    color='var(--secondaryTextColor)'
                    isDisabled={!values.name || !values.email || !values.message || !values.subject}
                    isLoading={isLoading}
                    onClick={onSubmit}
                    >Submit</Button>
                {/* <EmailForm/> */}
                
            </div>
        
    </section>
</div>
  )
}

export default Page
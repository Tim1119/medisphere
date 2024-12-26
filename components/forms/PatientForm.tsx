"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { userFormValidation } from "@/lib/validation"
import { useRouter } from "next/router"


export enum FormFieldType {
   INPUT = 'input',
   TEXTAREA = 'textarea',
   PHONE_INPUT = 'phoneInput',
   CHECKBOX = 'checkbox',
   DATE_PICKER = 'datePicker',
   SELECT = 'select',
   SKELETON = 'skeleton',
}

const  PatientForm = () => {


    // const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof userFormValidation>>({
      resolver: zodResolver(userFormValidation),
      defaultValues: {
        name: "",
        phone: "",
        email: "",
      },
    })


   
  async function onSubmit({name,email,phone}: z.infer<typeof userFormValidation>) {
      setIsLoading(true)
      try {
        // const userData = {name,email,phone }

        // const user  = await createUser(userData)

        // if (user) router.push(`patients/${user.$id}/register`)
        console.log(true)
      } catch (error){
        console.log("-->",error)
      }
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1 ">
        <section className="mb-12 space-y-4" >
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Schedule your first appointment</p>
        </section>

        <CustomFormField 
          fieldType={FormFieldType.INPUT}  
          control={form.control} 
          name="name" 
          label="Full Name" 
          placeholder="John Doe" 
          iconSrc="/assets/icons/user.svg" 
          iconAlt="user" 
        />
        <CustomFormField 
          fieldType={FormFieldType.INPUT}  
          control={form.control} 
          name="email" 
          label="Email" 
          placeholder="johndoes@gmail.com" 
          iconSrc="/assets/icons/email.svg" 
          iconAlt="email" 
        />

        <CustomFormField 
          fieldType={FormFieldType.PHONE_INPUT}  
          control={form.control} 
          name="phone" 
          label="Phone n umber" 
          placeholder="(234) 567-8901" 
          iconSrc="/assets/icons/email.svg" 
          iconAlt="email" 
        />
        
        <SubmitButton isLoading={isLoading}>
          Get Started
        </SubmitButton>
      </form>
    </Form>
  )
}


export default PatientForm;
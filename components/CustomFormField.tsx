import React from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {E164Number} from 'libphonenumber-js'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input" 
import { Control } from 'react-hook-form'
import { FormFieldType } from './forms/PatientForm'
import Image from 'next/image'

interface CustomProps{
    control:Control<any>,
    fieldType:FormFieldType,
    name:string,
    label?:string;
    placeholder?:string;
    iconSrc?:string;
    iconAlt?:string;
    disabled?:boolean;
    dateFormate?:string;
    showTimeSelect?:boolean;
    children?:React.ReactNode;
    renderSkeleton?:(field:any)=>React.ReactNode;

}

const RenderInput = ({field,props}:{field:any,props:CustomProps} )=>{

    //  const {control,fieldType,name,label,placeholder,iconSrc,iconAlt,disabled,dateFormate,showTimeSelect,children,renderSkeleton} = props;
    // return(
    //     <Input type={field} placeholder={props.placeholder} />
    // )

    switch (props.fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className='flex rounded-md border border-dark-500 bg-dark-400' type="text" placeholder={props.placeholder} {...field}>
                   {props.iconSrc && (
                        <Image src={props.iconSrc} alt={props.iconAlt || "icon"} height={24} width={24} className='ml-2' />
                   )}
                    <FormControl>
                        <Input className='shad-input border-0' placeholder={props.placeholder} {...field} />
                    </FormControl>
                </div>
            )
        case FormFieldType.PHONE_INPUT:
            return (
               
                    <FormControl>
                    <PhoneInput
                    defaultCountry='NG'
                        placeholder={props.placeholder}
                        international
                        withCountryCallingCode
                        value={field.value as E164Number | undefined}
                        onChange={field.onChange}
                        className="input-phone shad-input" 
                        />
                    </FormControl>
            )
        // 
    }
}

const CustomFormField = (props:CustomProps) => {

    const {control,fieldType,name,label,placeholder,iconSrc,iconAlt,disabled,dateFormate,showTimeSelect,children,renderSkeleton} = props;
  return (
    <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem>
                {fieldType !== FormFieldType.CHECKBOX && props.label && (
                    <FormLabel>{props.label}</FormLabel>
                )}

                <RenderInput field={field} props={props}  />

                <FormMessage className='shad-error' />
              {/* <FormLabel>Username</FormLabel>
             
              <FormMessage /> */}
            </FormItem>
          )}
        />
  )
}

export default CustomFormField
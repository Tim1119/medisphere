import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen" >
      {/* TODO: OTP Verfication */}
    <section className="remove-scrollbar container my-auto" >
        <div className="sub-container max-w-[496px]" > 
          <Image src="/assets/icons/logo-full.svg" alt="Medisphere Logo" width={1000} height={1000} className="mb-12 h-10 w-fit" />
          
          <PatientForm />  
          <div className="text-14-regular mt-20 flex justify-between items-center">
              <p className="justify-items-end text-dark-600 xl:text-left" >
                © 2024 Medisphere
              </p>
              <Link href="/?admin=true" className="text-green-500" >
                Admin
              </Link>
          </div>
        </div>
      </section> 
      <Image src="/assets/images/onboarding-img.png" alt="Medisphere Onboarding Background" width={1000} height={1000} className="side-img max-w-[50%]"/>
    </div> 
  );
}

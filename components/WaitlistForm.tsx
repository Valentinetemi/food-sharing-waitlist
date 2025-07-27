"use client";
import React, { useState } from "react";
import { Mail, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { set } from "date-fns";
import { Input } from "@/components/ui/input"
import { createClient } from "@supabase/supabase-js";
import { useToast } from "@/components/ui/use-toast";
import { toast } from "sonner";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if(!email || !email.includes("@")) {
        setEmailError("Please enter a valid email address dummy");
        return;
    }

    const {  error } = await supabase.from("Waitlist").insert([{ email }]);

    if (!error) {
      setIsSubmitted(true)
      setEmail("");


      //show toast
     toast.success("You've been added to the waislist love",{
        duration: 5000,
     });

      //reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
     console.error("Error:", error.message);
     setEmailError("Something went wrong. please try again. ");


     toast.error(error.message, {
        duration: 5000,
     });
    }
  };

  return (
    <div className="max-w-md mx-auto">
              <form onSubmit={(e) => handleSubmit(e )} className="space-y-4">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                    className="w-full h-14 px-6 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 rounded-xl backdrop-blur-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                  {emailError && (
                    <p className="text-red-400 text-sm mt-2 text-left">
                      {emailError}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full h-14 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitted ? (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      You're on the list!
                    </div>
                  ) : (
          
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      Join the Waitlist
                    </div>
                  )}
                </Button>
              </form>
              </div>
  );
}
            

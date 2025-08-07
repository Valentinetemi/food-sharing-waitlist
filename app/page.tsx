"use client";

import { useState } from 'react';


import type React from "react";





import {
  Camera,
  BarChart3,
  Users,
  Mail,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import WaitlistForm from "@/components/WaitlistForm";

function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [ctaEmail, setCtaEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ctaSubmitted, setCtaSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [ctaEmailError, setCtaEmailError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent, isCta = false) => {
    e.preventDefault();
    const currentEmail = isCta ? ctaEmail : email;
    const setError = isCta ? setCtaEmailError : setEmailError;
    const setSubmitted = isCta ? setCtaSubmitted : setIsSubmitted;

    if (!currentEmail) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(currentEmail)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      if (isCta) {
        setCtaEmail("");
      } else {
        setEmail("");
      }
    }, 3000);
  };

  const features = [
    {
      icon: Camera,
      title: "Share Meals with Photos",
      description:
        "Capture and share your culinary creations with beautiful photos and detailed descriptions.",
    },
    {
      icon: BarChart3,
      title: "Calorie & Nutrition Tracking",
      description:
        "Track your daily nutrition intake with smart calorie counting and detailed nutritional insights.",
    },
    {
      icon: Users,
      title: "A Community of Food Lovers",
      description:
        "Connect with fellow food enthusiasts, discover new recipes, and get inspired by others.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-purple-600/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-2xl">F</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Share Your Meals.
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Track Your Calories.
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Join the Foodie Revolution.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              FoodShare is a social platform where you can share meals, get
              inspired, and track your health goals.
            </p>

            {/* Email Waitlist Form */}
            <WaitlistForm/>
            
              <p className="text-gray-400 text-sm mt-4">
                Be the first to experience the future of food sharing
              </p>
          </div>
        </div>
        </section>
      

      {/* Features Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Everything you need to
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                revolutionize your food journey
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover powerful features designed to make food sharing and
              nutrition tracking effortless and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-purple-600/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_70%)]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Be the first to know when
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              FoodShare goes live!
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of food enthusiasts who are already waiting to
            transform their culinary experience.
          </p>
        

          {/* CTA Form */}
          <WaitlistForm/>

            <div className="flex items-center justify-center gap-2 mt-6 text-gray-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full border-2 border-gray-900 flex items-center justify-center text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-100">
                Join lots of food lovers already waiting
              </span>
            </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold text-white">FoodShare</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2025 FoodShare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
  );
}

export default WaitlistPage;
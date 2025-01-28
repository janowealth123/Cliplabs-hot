import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ArrowRight, CheckCircle, DollarSign, Users, Sparkles, Clock } from 'lucide-react';

// ... (previous component definitions remain the same) ...

export default function GlowLanding() {
  const [animatedCount, setAnimatedCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const targetCount = 1243;

  // ... (previous useEffect and other functions remain the same) ...

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = formRef.current;
      const formData = new FormData(form);
      
      const response = await fetch('https://api.convertkit.com/v3/forms/d-SHTwAoFv8xjHmZQiQ5vQ/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          api_key: 'd-SHTwAoFv8xjHmZQiQ5vQ', // Your ConvertKit API key
          email: formData.get('email'),
          first_name: formData.get('firstName'),
        })
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      // Wait for the subscription to complete before redirecting
      await response.json();
      
      // Reset form and redirect
      form.reset();
      window.location.href = 'https://discord.gg/cliplabs';
      
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error joining the waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1b1523] relative overflow-hidden">
      {/* ... (previous JSX remains the same until the form) ... */}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput 
          name="firstName" 
          type="text" 
          placeholder="First Name" 
          disabled={isSubmitting}
        />
        <FormInput 
          name="email" 
          type="email" 
          placeholder="Email" 
          disabled={isSubmitting}
        />
        <button 
          type="submit" 
          className="w-full bg-white text-purple-600 font-medium py-3 px-6 rounded-xl"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
        </button>
      </form>
      
      {/* ... (rest of the JSX remains the same) ... */}
    </div>
  );
}

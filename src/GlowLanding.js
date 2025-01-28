import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ArrowRight, CheckCircle, DollarSign, Users, Sparkles, Clock } from 'lucide-react';
import SubscribeForm from './components/SubscribeForm'; // Import the subscribe form

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center text-center border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105 cursor-pointer">
    <Icon className="w-8 h-8 text-purple-200 mb-3" />
    <div className="text-3xl font-bold text-white mb-2">{value}</div>
    <div className="text-purple-200">{label}</div>
  </div>
);

const FeatureItem = ({ feature }) => (
  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
    <div className="flex-shrink-0 w-8 h-8 bg-purple-400/20 rounded-full flex items-center justify-center">
      <CheckCircle className="w-5 h-5 text-purple-200" />
    </div>
    <span className="text-lg text-purple-100">{feature}</span>
  </div>
);

const FormInput = ({ name, type, placeholder, required = true }) => (
  <input
    name={name}
    type={type}
    placeholder={placeholder}
    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all hover:bg-white/10"
    required={required}
  />
);

export default function GlowLanding() {
  const [animatedCount, setAnimatedCount] = useState(0);
  const formRef = useRef(null);
  const targetCount = 1243;

  const stats = useMemo(() => [
    { icon: DollarSign, label: 'Average Per Clip', value: '$200-2000' },
    { icon: Users, label: 'Clippers Joined', value: animatedCount.toLocaleString() },
    { icon: Clock, label: 'Time to First Clip', value: '24hr' }
  ], [animatedCount]);

  const features = useMemo(() => [
    'Direct payments from top creators',
    'Set your own rates ($200-2000 per clip)',
    'Choose your own schedule',
    'Work with trending creators'
  ], []);

  useEffect(() => {
    const animateCount = () => {
      const duration = 2000;
      const steps = 60;
      const increment = targetCount / steps;
      let current = 0;
      
      return setInterval(() => {
        current += increment;
        if (current >= targetCount) {
          setAnimatedCount(targetCount);
          return;
        }
        setAnimatedCount(Math.floor(current));
      }, duration / steps);
    };

    const timer = animateCount();
    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.replace('https://discord.gg/cliplabs');
  };

  return (
    <div className="min-h-screen bg-[#1b1523] relative overflow-hidden">
      <style>{`
        @keyframes glow {
          0% { box-shadow: 0 0 20px #ffffffb3, 0 0 40px #ffffff80, 0 0 60px #ffffff50; }
          100% { box-shadow: 0 0 10px #ffffff80, 0 0 30px #ffffff60, 0 0 50px #ffffff40; }
        }
        .glow-button {
          animation: glow 2s ease-in-out infinite alternate;
        }
      `}</style>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <nav className="flex justify-between items-center py-6">
          <div className="text-3xl font-bold text-white">
            ClipLabs
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm border border-white/10">
              <Users className="w-4 h-4 text-purple-200 mr-2" />
              <span className="text-purple-100 font-medium">{animatedCount.toLocaleString()} Clippers</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center pt-8 pb-16 max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm border border-white/10">
              <Sparkles className="w-4 h-4 text-purple-200" />
              <span className="text-purple-200 font-medium">Launching Soon</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Get Payouts To Make<br />Viral Clips
            </h1>

            <p className="text-xl text-purple-200">
              Clip for Top Influencers And Brands– Get Paid to Create
            </p>

            <div className="pt-4 pb-8">
              <button
                onClick={scrollToForm}
                className="glow-button relative inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 hover:translate-y-[-2px] text-lg border border-white/50 backdrop-blur-sm shadow-xl"
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-purple-200 mt-4 text-sm">Limited spots available for early access</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Features and Form Section */}
        <div className="py-12 grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Why Join ClipLabs?
            </h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <FeatureItem key={index} feature={feature} />
              ))}
            </div>
          </div>

          <div ref={formRef} className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                Learn How Clipping Can Earn You An Extra $350-500 A Day
              </h3>
              <p className="text-purple-200">Be first in line when we launch.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <FormInput name="firstName" type="text" placeholder="First Name" />
              <FormInput name="email" type="email" placeholder="Email" />
              <button type="submit" className="w-full bg-white text-purple-600 font-medium py-3 px-6 rounded-xl">
                Join the Waitlist
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ArrowRight, CheckCircle, DollarSign, Users, Sparkles, Clock } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center text-center
    border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105 cursor-pointer">
    <Icon className="w-8 h-8 text-white mb-3" />
    <div className="text-3xl font-bold text-white mb-2">{value}</div>
    <div className="text-purple-100">{label}</div>
  </div>
);

const FeatureItem = ({ feature }) => (
  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20
    hover:bg-white/15 transition-all cursor-pointer">
    <div className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
      <CheckCircle className="w-5 h-5 text-white" />
    </div>
    <span className="text-lg text-white">{feature}</span>
  </div>
);

const FormInput = ({ name, type, placeholder, required = true }) => (
  <input
    name={name}
    type={type}
    placeholder={placeholder}
    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-200 
      focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all hover:bg-white/15"
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
    <div className="min-h-screen bg-gradient-to-br from-[#181A1B] via-[#2C2F33] to-[#23272A] relative overflow-hidden">
      <style>{`
        @keyframes glow {
          0% { box-shadow: 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #B794F4, 0 0 60px #B794F4; }
          100% { box-shadow: 0 0 15px #fff, 0 0 20px #fff, 0 0 30px #B794F4, 0 0 40px #B794F4; }
        }
        .glow-button {
          animation: glow 2s ease-in-out infinite alternate, float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .launching-soon {
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(107,75,204,0.3),rgba(37,38,44,0.2))]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <nav className="flex justify-between items-center py-6">
          {/* Replaced the text "ClipLabs" with the image logo */}
          <div className="flex items-center">
            <img src="/IMG_2123.png" alt="ClipLabs Logo" className="w-10 h-10" />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm border border-white/10">
              <Users className="w-4 h-4 text-white mr-2" />
              <span className="text-white font-medium">{animatedCount.toLocaleString()} Clippers</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center pt-8 pb-16 max-w-3xl mx-auto">
          <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
            Clip Labs
          </h1>
          
          <p className="text-xl text-white/80 mt-4">
            Clip for Top Influencers and Brands— Get Paid to Create
          </p>

          <div className="pt-6">
            <button
              onClick={scrollToForm}
              className="glow-button relative inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-medium 
              transition-all transform hover:scale-105 hover:translate-y-[-2px] text-lg
              border border-white/50 backdrop-blur-sm shadow-xl"
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}

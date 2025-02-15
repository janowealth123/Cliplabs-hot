import React, { useState, useEffect } from 'react';

const WebinarPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const targetDate = new Date('2025-02-22T14:00:00-05:00');
      const now = new Date();
      const difference = targetDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    };

    const timer = setInterval(calculateTime, 1000);
    calculateTime();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-purple-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ClipLabs
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-5 py-1.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm font-medium mb-2">
            The Newest Side Hustle 2025
          </div>
          
          <div className="inline-block px-4 py-2 bg-purple-100 rounded-lg mb-4 mt-2">
            <span className="text-purple-600 font-semibold">🚀 Official Launch Event</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            The Fast & Easy Way To Make 10k/Month From Home
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 font-semibold text-gray-800">
            (Getting Paid From Famous Influencers And Brands)
          </p>

          <a href="https://event.webinarjam.com/register/3/wwvkka7" 
             className="inline-block px-16 py-6 text-3xl font-bold text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse hover:animate-none border-2 border-white/20">
            Register
          </a>
          
          <div className="mt-2 text-sm text-gray-600">
            Secure your free seat above and avoid missing out
          </div>

          <div className="mt-12 mb-4">
            <div className="grid grid-cols-4 gap-3 max-w-xl mx-auto">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-white rounded-xl p-3 shadow-lg border border-purple-100">
                    <div className="text-2xl md:text-3xl font-bold text-purple-600">
                      {String(value).padStart(2, '0')}
                    </div>
                    <div className="text-gray-600 text-xs md:text-sm capitalize">{unit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-800">
            Sat, February 22nd 2025 AT 2:00PM EST
          </h3>

          <div className="mt-16">
            <div className="relative mb-6">
              <img 
                src="https://i.imgur.com/GWoILI6.jpeg"
                alt="Luca & Jano" 
                className="w-full rounded-xl shadow-xl object-cover h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
            </div>
            
            <h2 className="text-2xl font-bold mb-3">Meet Your Hosts</h2>
            <p className="text-xl text-gray-800 font-semibold mb-3">Luca & Jano</p>
            <p className="text-lg text-purple-600 font-medium mb-5">
              You may recognize us on your TikTok and Instagram feeds as the "brainrot millionaires"
            </p>
            
            <div className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed mb-10">
              For the first time ever, we're revealing our brand new platform that connects everyday people 
              directly with the biggest names in social media. We've been quietly testing this with a small 
              group who are now earning life-changing money from viral clips.
            </div>

            <a href="https://event.webinarjam.com/register/3/wwvkka7" 
               className="inline-block px-16 py-6 text-3xl font-bold text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse hover:animate-none border-2 border-white/20">
              Register
            </a>
            
            <div className="mt-2 text-sm text-gray-600">
              Secure your free seat above and avoid missing out
            </div>
          </div>

          <div className="text-center py-6 text-sm text-gray-600 border-t border-purple-100 mt-16">
            Copyright 2025 ClipLabs. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarPage;
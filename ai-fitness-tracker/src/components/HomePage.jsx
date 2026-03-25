
import React from 'react';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 px-4 text-center">

        <p className="text-lg text-slate-600 mb-8 max-w-2xl">
          Track your form, count your reps, and analyze your progress using our advanced 
          artificial intelligence engine.
        </p>
        
        {/* Central Picture Container */}
        <div className="relative w-full max-w-4xl h-96 bg-slate-200 rounded-2xl overflow-hidden shadow-2xl mb-12">
          <img 
            src="https://via.placeholder.com/800x450" 
            alt="AI Fitness Tracking Interface" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        {/* Credentials / Key Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="p-6 bg-white rounded-xl shadow-md border-t-4 border-blue-500">
            <h3 className="text-xl font-bold mb-2">99% Accuracy</h3>
            <p className="text-slate-500 text-sm">Real-time pose estimation using the latest neural networks.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md border-t-4 border-blue-500">
            <h3 className="text-xl font-bold mb-2">Instant Feedback</h3>
            <p className="text-slate-500 text-sm">Correct your form immediately to prevent injuries.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md border-t-4 border-blue-500">
            <h3 className="text-xl font-bold mb-2">Privacy First</h3>
            <p className="text-slate-500 text-sm">All processing is done locally or securely encrypted.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
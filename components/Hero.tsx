export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
  </div>

  {/* Navigation */}
  <nav className="relative z-10 px-4 sm:px-6 lg:px-8 py-6">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center transform rotate-12">
          <span className="text-white text-2xl font-bold transform -rotate-12">🚩</span>
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Red Flags</span>
      </div>
      <button className="px-6 py-2.5 bg-white text-red-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-red-100">
        Sign In
      </button>
    </div>
  </nav>

  {/* Hero Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-20 sm:pb-32">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left Column - Text Content */}
      <div className="text-center lg:text-left space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md border border-red-100 animate-fade-in">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-gray-700">AI-Powered Relationship Insights</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
            <span className="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              See the Signs
            </span>
            <br />
            <span className="text-gray-900">Before It&apos;s</span>
            <br />
            <span className="text-gray-900">Too Late</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Your AI relationship coach that analyzes conversations, spots patterns, and helps you build healthier connections—at work, home, and everywhere in between.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="group px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-full shadow-2xl hover:shadow-red-300 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
            <span>Start Free Analysis</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200 flex items-center justify-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            <span>Watch Demo</span>
          </button>
        </div>

        {/* Social Proof */}
        <div className="flex items-center space-x-6 pt-4 justify-center lg:justify-start">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-white"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-400 border-2 border-white"></div>
          </div>
          <div className="text-left">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-600 font-medium">12,000+ relationships improved</p>
          </div>
        </div>
      </div>

      {/* Right Column - Visual Element */}
      <div className="relative lg:block">
        {/* Main Card */}
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
          {/* Mock Chat Interface */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-gray-900">Conversation Analysis</p>
                  <p className="text-xs text-gray-500">Real-time insights</p>
                </div>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse animation-delay-200"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse animation-delay-400"></div>
              </div>
            </div>

            {/* Message Bubbles */}
            <div className="space-y-3">
              <div className="flex justify-end">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-xs">
                  <p className="text-sm">We need to talk about this...</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-2xl rounded-tl-sm max-w-xs">
                  <p className="text-sm">Not now, I&apos;m busy</p>
                </div>
              </div>
            </div>

            {/* Analysis Panel */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-4 space-y-3 mt-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900">🚩 Red Flags Detected</span>
                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">3</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                  <p className="text-xs text-gray-700">Dismissive language pattern detected</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5"></div>
                  <p className="text-xs text-gray-700">Communication timing concerns</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                  <p className="text-xs text-gray-700">Direct communication attempt</p>
                </div>
              </div>
              <button className="w-full py-2 bg-white text-red-600 font-semibold rounded-xl text-sm hover:shadow-md transition-shadow">
                View Full Analysis →
              </button>
            </div>
          </div>
        </div>

        {/* Floating Stats Cards */}
        <div className="absolute -left-4 top-12 bg-white rounded-2xl shadow-xl p-4 transform -rotate-6 hover:rotate-0 transition-transform hidden lg:block">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-lg">✅</span>
            </div>
            <div>
              <p className="text-xs text-gray-500">Health Score</p>
              <p className="text-lg font-bold text-green-600">78%</p>
            </div>
          </div>
        </div>

        <div className="absolute -right-4 bottom-24 bg-white rounded-2xl shadow-xl p-4 transform rotate-6 hover:rotate-0 transition-transform hidden lg:block">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-lg">📊</span>
            </div>
            <div>
              <p className="text-xs text-gray-500">Insights</p>
              <p className="text-lg font-bold text-purple-600">24</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Trust Badges */}
    <div className="mt-16 pt-12 border-t border-gray-200">
      <p className="text-center text-sm text-gray-500 mb-6">Trusted by relationship experts and therapists</p>
      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-60">
        <div className="text-gray-400 font-semibold text-lg">Psychology Today</div>
        <div className="text-gray-400 font-semibold text-lg">TherapyMatch</div>
        <div className="text-gray-400 font-semibold text-lg">RelationshipHub</div>
        <div className="text-gray-400 font-semibold text-lg">MindWell</div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes blob {
      0%, 100% { transform: translate(0, 0) scale(1); }
      25% { transform: translate(20px, -20px) scale(1.1); }
      50% { transform: translate(-20px, 20px) scale(0.9); }
      75% { transform: translate(20px, 20px) scale(1.05); }
    }
    .animate-blob {
      animation: blob 7s infinite;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
    .animation-delay-200 {
      animation-delay: 0.2s;
    }
    .animation-delay-400 {
      animation-delay: 0.4s;
    }
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fade-in 0.6s ease-out;
    }
  `}</style>
</div>
  );
}
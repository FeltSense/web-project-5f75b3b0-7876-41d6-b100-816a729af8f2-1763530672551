export default function Services() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50">
  {/* Playful background elements */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>

  <div className="relative max-w-7xl mx-auto">
    {/* Section header */}
    <div className="text-center mb-20">
      <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full mb-6 transform hover:scale-105 transition-transform">
        <span className="text-white text-sm font-bold tracking-wider uppercase">Your Relationship Toolkit</span>
      </div>
      <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
        Level Up Your
        <span className="block bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Communication Game
        </span>
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        AI-powered insights that actually help you understand what&apos;s going on in your relationships
      </p>
    </div>

    {/* Services grid - asymmetric layout */}
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      {/* Service 1 - Large featured card */}
      <div className="md:col-span-2 group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-4 border-rose-100 hover:border-rose-300">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
        
        <div className="relative flex flex-col md:flex-row items-start gap-8">
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-purple-600 rounded-3xl animate-pulse"></div>
              <div className="absolute inset-2 bg-white rounded-3xl flex items-center justify-center">
                <svg className="w-16 h-16 md:w-20 md:h-20 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="flex-grow">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900">
                AI Communication Analysis
              </h3>
              <span className="hidden md:inline-flex px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-bold">
                Most Popular
              </span>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Drop in your texts, DMs, emails, or voice messages and get instant AI-powered breakdowns of what&apos;s really being said. 
              Our smart engine spots red flags 🚩, green flags ✅, and those tricky gray areas before you do.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-rose-50 rounded-full">
                <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">Instant Upload</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">Voice Transcription</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full">
                <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">Real-time Coaching</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service 2 - Visual card with illustration */}
      <div className="group relative bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105">
        <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
          <svg className="w-64 h-64" viewBox="0 0 200 200" fill="white">
            <circle cx="100" cy="50" r="30" />
            <circle cx="60" cy="120" r="25" />
            <circle cx="140" cy="120" r="25" />
            <line x1="100" y1="80" x2="60" y2="95" stroke="white" strokeWidth="4"/>
            <line x1="100" y1="80" x2="140" y2="95" stroke="white" strokeWidth="4"/>
          </svg>
        </div>
        
        <div className="relative">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
            <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          
          <h3 className="text-3xl font-black text-white mb-4">
            Relationship Health Dashboard
          </h3>
          <p className="text-purple-100 text-lg leading-relaxed mb-6">
            See your relationship patterns visualized in gorgeous graphs and charts. Track how things are trending over weeks and months. 
            Watch your green flags grow! 📈
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-white font-medium">Visual pattern breakdowns</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-white font-medium">Trajectory tracking over time</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-white font-medium">Your contribution analysis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service 3 - Card with emoji accents */}
      <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-indigo-100 hover:border-indigo-300 hover:scale-105">
        <div className="absolute -top-4 -right-4 text-6xl transform group-hover:scale-125 group-hover:rotate-12 transition-transform">
          💡
        </div>
        
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        
        <h3 className="text-3xl font-black text-gray-900 mb-4">
          Personalized Insights
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Get specific, actionable feedback on YOUR communication style. No generic advice—this is tailored to your patterns, 
          your triggers, and your unique situation. 🎯
        </p>
        <div className="bg-indigo-50 rounded-2xl p-5 space-y-2">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🗣️</span>
            <div>
              <p className="font-bold text-gray-900">Communication style analysis</p>
              <p className="text-sm text-gray-600">What&apos;s working, what&apos;s not</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎓</span>
            <div>
              <p className="font-bold text-gray-900">Conflict resolution strategies</p>
              <p className="text-sm text-gray-600">Tailored to your situation</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🤔</span>
            <div>
              <p className="font-bold text-gray-900">Repair vs. end guidance</p>
              <p className="text-sm text-gray-600">When to stay, when to go</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Service 4 - Full width bottom card with split design */}
    <div className="group relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
      
      <div className="relative grid md:grid-cols-2 gap-0">
        {/* Left side - Content */}
        <div className="p-10 md:p-12 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full mb-6 w-fit">
            <span className="text-white text-xs font-bold tracking-wider uppercase">Pro Feature</span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Multi-Relationship Analysis
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Ever wonder if you&apos;re the problem? 👀 Compare patterns across your romantic, work, and family relationships. 
            Spot your blind spots. See the bigger picture. Know when YOU&apos;RE the common denominator.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20">
              <div className="text-3xl mb-2">❤️</div>
              <p className="text-white font-bold mb-1">Romantic</p>
              <p className="text-gray-400 text-sm">Dating & partnerships</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20">
              <div className="text-3xl mb-2">💼</div>
              <p className="text-white font-bold mb-1">Professional</p>
              <p className="text-gray-400 text-sm">Work & colleagues</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20">
              <div className="text-3xl mb-2">👨‍👩‍👧</div>
              <p className="text-white font-bold mb-1">Family</p>
              <p className="text-gray-400 text-sm">Parents & siblings</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20">
              <div className="text-3xl mb-2">👥</div>
              <p className="text-white font-bold mb-1">Friendships</p>
              <p className="text-gray-400 text-sm">Social connections</p>
            </div>
          </div>
        </div>

        {/* Right side - Visual element */}
        <div className="relative bg-gradient-to-br from-rose-500 via-purple-600 to-indigo-600 p-10 md:p-12 flex items-center justify-center min-h-[400px]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-white rounded-full"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 border-4 border-white rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/3 w-28 h-28 border-4 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-4 border-white rounded-full"></div>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <line x1="160" y1="100" x2="200" y2="200" stroke="white" strokeWidth="3" opacity="0.3"/>
              <line x1="300" y1="133" x2="200" y2="200" stroke="white" strokeWidth="3" opacity="0.3"/>
              <line x1="133" y1="300" x2="200" y2="200" stroke="white" strokeWidth="3" opacity="0.3"/>
            </svg>
          </div>
          
          <div className="relative text-center transform group-hover:scale-105 transition-transform">
            <div className="text-8xl mb-4">🔍</div>
            <p className="text-white text-2xl font-black">
              Cross-reference<br />your patterns
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="mt-20 text-center">
      <div className="inline-block bg-white rounded-3xl p-10 shadow-2xl border-4 border-purple-100">
        <h3 className="text-3xl font-black text-gray-900 mb-4">
          Ready to decode your relationships? 🔓
        </h3>
        <p className="text-gray-600 text-lg mb-8 max-w-md">
          Start with 10 free conversation analyses. No credit card needed.
        </p>
        <button className="group relative px-10 py-5 bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 text-white text-lg font-black rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
          <span className="relative z-10 flex items-center gap-3">
            Get Started Free
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>
    </div>
  </div>
</section>
  );
}
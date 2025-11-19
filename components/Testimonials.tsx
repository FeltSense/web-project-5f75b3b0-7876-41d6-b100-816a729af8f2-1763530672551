import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Playful background elements */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-red-200/30 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/30 rounded-full blur-3xl animate-pulse delay-700"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-block mb-4">
        <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg">
          REAL STORIES, REAL GROWTH 🚀
        </span>
      </div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
        They Saw Their{&apos; &apos;}
        <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Red Flags
        </span>
        <br />
        <span className="text-green-500">& Found Green Lights</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Real users. Real breakthroughs. Real relationships saved (and some that needed to end).
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {/* Testimonial 1 - The Saved Relationship */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
        <div className="relative bg-white rounded-3xl p-8 shadow-xl transform group-hover:-translate-y-2 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" 
                width={64} 
                height={64} 
                alt="Jessica Martinez"
                className="rounded-full ring-4 ring-green-100"
              />
              <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Jessica Martinez</h3>
              <p className="text-sm text-gray-600">Marketing Manager, 29</p>
            </div>
          </div>
          
          <div className="mb-4 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            "Red Flags literally saved my 4-year relationship. I uploaded our texts from a massive fight and the AI showed me I was being <span className="font-bold text-red-500">passive-aggressive in 73% of my messages</span>. That wake-up call was brutal but necessary. We&apos;re now 6 months into couples therapy and actually <span className="font-bold text-green-600">communicating like adults</span>."
          </p>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
              Relationship Saved ✓
            </span>
          </div>
        </div>
      </div>

      {/* Testimonial 2 - The Career Win */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-300"></div>
        <div className="relative bg-white rounded-3xl p-8 shadow-xl transform group-hover:-translate-y-2 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                width={64} 
                height={64} 
                alt="Marcus Chen"
                className="rounded-full ring-4 ring-blue-100"
              />
              <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Marcus Chen</h3>
              <p className="text-sm text-gray-600">Senior Developer, 34</p>
            </div>
          </div>
          
          <div className="mb-4 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            "Used Red Flags to analyze my Slack convos with my manager before a performance review. Discovered I was <span className="font-bold text-red-500">deflecting feedback 82% of the time</span> and using defensive language. Changed my approach, and <span className="font-bold text-blue-600">got promoted 2 months later</span>. Game changer for workplace communication."
          </p>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
              Career Growth 📈
            </span>
          </div>
        </div>
      </div>

      {/* Testimonial 3 - The Necessary Breakup */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl transform rotate-1 group-hover:rotate-3 transition-transform duration-300"></div>
        <div className="relative bg-white rounded-3xl p-8 shadow-xl transform group-hover:-translate-y-2 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" 
                width={64} 
                height={64} 
                alt="Taylor Rodriguez"
                className="rounded-full ring-4 ring-purple-100"
              />
              <div className="absolute -bottom-1 -right-1 bg-purple-500 rounded-full p-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Taylor Rodriguez</h3>
              <p className="text-sm text-gray-600">Graphic Designer, 27</p>
            </div>
          </div>
          
          <div className="mb-4 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            "I was in denial about my toxic relationship until Red Flags showed me <span className="font-bold text-red-500">47 instances of gaslighting patterns</span> in just 2 weeks of texts. The multi-relationship analysis proved this was THEIR pattern, not mine. <span className="font-bold text-purple-600">Left after 3 years of manipulation</span>. Best decision I ever made."
          </p>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold">
              Freedom Achieved 🦋
            </span>
          </div>
        </div>
      </div>

      {/* Testimonial 4 - The Self-Discovery */}
      <div className="group relative md:col-span-2 lg:col-span-1">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
        <div className="relative bg-white rounded-3xl p-8 shadow-xl transform group-hover:-translate-y-2 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" 
                width={64} 
                height={64} 
                alt="Alex Thompson"
                className="rounded-full ring-4 ring-amber-100"
              />
              <div className="absolute -bottom-1 -right-1 bg-amber-500 rounded-full p-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Alex Thompson</h3>
              <p className="text-sm text-gray-600">Teacher, 31</p>
            </div>
          </div>
          
          <div className="mb-4 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            "The multi-relationship analysis blew my mind. It showed me <span className="font-bold text-red-500">I was the common denominator in 5 failed relationships</span> - always shutting down emotionally during conflict. Started therapy, used the communication training modules, and I&apos;m now <span className="font-bold text-amber-600">actually vulnerable with my new partner</span>. Worth every penny."
          </p>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-semibold">
              Self-Awareness Unlocked 🔑
            </span>
          </div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="md:col-span-2 lg:col-span-2">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl h-full flex flex-col justify-center">
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-8 text-center">
            The Numbers Don&apos;t Lie 📊
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">
                89%
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                See improved communication within 30 days
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-2">
                4.2M+
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Conversations analyzed and counting
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                67%
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Make major relationship decisions with confidence
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">
                4.8★
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Average rating from 12K+ reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center">
      <p className="text-lg text-gray-600 mb-6">
        Join <span className="font-bold text-purple-600">50,000+ people</span> who&apos;ve transformed their relationships
      </p>
      <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
        <span>Start Your Free Analysis</span>
        <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
      </button>
      <p className="text-sm text-gray-500 mt-4">
        No credit card required • See your first insights in 60 seconds
      </p>
    </div>
  </div>
</section>
  );
}
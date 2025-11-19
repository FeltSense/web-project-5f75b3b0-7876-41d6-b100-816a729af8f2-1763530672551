export default function Pricing() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
  <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
    {/* Header */}
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Retail Business</h2>
      <p className="text-slate-600">General Plan</p>
    </div>

    {/* Price */}
    <div className="text-center mb-8">
      <div className="text-5xl font-bold text-blue-600 mb-2">$29</div>
      <p className="text-slate-600">one-time payment</p>
    </div>

    {/* Features */}
    <div className="space-y-4 mb-8">
      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-slate-700">AI Communication Analysis - Upload text/voice conversations for instant insights</span>
      </div>

      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-slate-700">Relationship Health Dashboard - Visual tracking of patterns over time</span>
      </div>

      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-slate-700">Personalized Insights - Specific feedback on your communication style and triggers</span>
      </div>

      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-slate-700">Multi-Relationship Analysis - Compare patterns across romantic, work, and family relationships</span>
      </div>

      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-slate-700">Privacy-First - Your data stays secure and encrypted</span>
      </div>

      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-slate-700">Actionable Recommendations - Not just problems, but solutions and growth paths</span>
      </div>
    </div>

    {/* Button */}
    <button onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00?client_reference_id=5f75b3b0-7876-41d6-b100-816a729af8f2'} className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-200">
      Get Your Website - $29
    </button>
  </div>
</section>
  );
}
export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          For Remote Teams
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Turn Slack Threads into<br />
          <span className="text-[#58a6ff]">Calendar Meetings Automatically</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          SlackMeet watches your threads, detects when a meeting is needed, and suggests times everyone is free — no copy-pasting, no back-and-forth.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start for $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No setup fees.</p>
      </section>

      {/* How it works */}
      <section className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {[
          { step: "1", title: "Connect Slack", desc: "Add SlackMeet to your workspace in one click." },
          { step: "2", title: "AI Detects Meetings", desc: "Our AI reads thread context and flags scheduling needs." },
          { step: "3", title: "Auto-Schedule", desc: "Calendar slots are suggested based on everyone's availability." }
        ].map((item) => (
          <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] font-bold text-xl mb-2">{item.step}</div>
            <h3 className="text-white font-semibold mb-1">{item.title}</h3>
            <p className="text-[#8b949e] text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">/month per workspace</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited Slack thread analysis",
              "Google & Outlook calendar sync",
              "AI meeting detection",
              "Up to 25 team members",
              "Priority email support"
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff]">✓</span> {feat}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which calendars are supported?",
              a: "SlackMeet integrates with Google Calendar and Microsoft Outlook. More providers coming soon."
            },
            {
              q: "How does the AI detect meeting triggers?",
              a: "It analyzes thread messages for phrases and patterns that indicate scheduling intent, like 'let's hop on a call' or unresolved back-and-forth."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel from your billing dashboard at any time. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} SlackMeet. All rights reserved.
      </footer>
    </main>
  );
}

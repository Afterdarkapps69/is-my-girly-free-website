export default function FAQPage() {
  const faqs = [
    {
      question: "What is Is My Girly Free?",
      answer:
        "Is My Girly Free? is a nightlife app that helps people find familiar girlies, see where they are working, check their availability and send digital drinks through the app.",
    },
    {
      question: "Who can sign up as a girly?",
      answer:
        "Adult women working in nightlife, hospitality and service roles such as bartenders, waitresses, hostesses, dancers and performers can create a girly profile.",
    },
    {
      question: "How do guys use the app?",
      answer:
        "Guys can browse participating bars and profiles, see who is working, add girlies to favourites and send digital drinks through the app.",
    },
    {
      question: "What happens if a girly changes bars or workplaces?",
      answer:
        "If you have added her to your favourites, you can quickly check her profile and see where she is working next.",
    },
    {
      question: "What are digital drinks?",
      answer:
        "Digital drinks are payments sent through the app as a way to support a girly even when you are not at the same venue.",
    },
    {
      question: "Can girlies update when they are working?",
      answer:
        "Yes. Girlies can update their availability and workplace information so people can see when and where they are working.",
    },
    {
      question: "Can I use the app if I am not at the bar?",
      answer:
        "Yes. You can browse profiles, check availability and send digital drinks even when you are not physically at the venue.",
    },
    {
      question: "Is the app available on Android and iPhone?",
      answer:
        "Yes. Is My Girly Free? is designed for both Android and iPhone.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-zinc-900">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-pink-500">
            Help & Information
          </p>

          <h1 className="mt-3 text-5xl font-black sm:text-6xl">
            Frequently Asked Questions
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Everything you need to know about Is My Girly Free?
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7"
            >
              <h2 className="text-xl font-black">{faq.question}</h2>
              <p className="mt-3 leading-7 text-zinc-400">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-pink-500/30 bg-pink-500/5 p-8">
          <h2 className="text-2xl font-black">Still need help?</h2>
          <p className="mt-3 text-zinc-400">
            Visit our Support page for more help or to contact us.
          </p>

          <a
            href="/support"
            className="mt-6 inline-flex rounded-xl bg-pink-500 px-6 py-3 font-black text-white"
          >
            Go to Support
          </a>
        </div>
      </section>
    </main>
  );
}

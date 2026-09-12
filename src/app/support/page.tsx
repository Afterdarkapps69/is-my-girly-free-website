export default function SupportPage() {
  const supportItems = [
    {
      title: "Login & Account Help",
      text: "Having trouble signing in, using Google login, or accessing your account? We can help.",
    },
    {
      title: "Profile & Availability",
      text: "Need help updating your profile, workplace or availability status? Check here first.",
    },
    {
      title: "Digital Drinks & Payments",
      text: "Questions about sending or receiving digital drinks, PayPal or card checkout? We can help.",
    },
    {
      title: "Bars & Workplaces",
      text: "Need help finding a venue, changing workplace details or updating where you work?",
    },
    {
      title: "Safety & Reporting",
      text: "If you need to report a problem, inappropriate behaviour or a safety concern, contact support.",
    },
    {
      title: "Technical Problems",
      text: "If the app is not loading or something is not working properly, tell us what happened and what device you are using.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-zinc-900">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-pink-500">
            Help & Support
          </p>

          <h1 className="mt-3 text-5xl font-black sm:text-6xl">
            How Can We Help?
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Find help with your account, profile, payments and other app issues.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {supportItems.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7"
            >
              <h2 className="text-xl font-black">{item.title}</h2>
              <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-pink-500/30 bg-pink-500/5 p-8">
          <h2 className="text-3xl font-black">Contact Support</h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
            If you still need help, send us a message with your account email,
            a short description of the problem and any screenshots that may help.
          </p>

          <a
            href="mailto:support@ismygirlyfree.com"
            className="mt-7 inline-flex rounded-xl bg-pink-500 px-6 py-3 font-black text-white transition hover:bg-pink-400"
          >
            Email Support
          </a>

          <p className="mt-4 text-sm text-zinc-500">
            support@ismygirlyfree.com
          </p>
        </div>

        <div className="mt-8 text-sm text-zinc-500">
          You can also visit our{" "}
          <a href="/faq" className="font-bold text-pink-500">
            FAQ page
          </a>{" "}
          for answers to common questions.
        </div>
      </section>
    </main>
  );
}

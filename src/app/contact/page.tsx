export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-zinc-900">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-pink-500">
            Contact
          </p>

          <h1 className="mt-3 text-5xl font-black sm:text-6xl">
            Get in Touch
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Questions about Is My Girly Free?, support, partnerships or general enquiries?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-pink-500">
              Support
            </p>
            <h2 className="mt-3 text-2xl font-black">
              Need Help With the App?
            </h2>
            <p className="mt-4 leading-7 text-zinc-400">
              For login, profile, payment, availability or technical issues, visit the
              Support page first.
            </p>

            <a
              href="/support"
              className="mt-6 inline-flex rounded-xl bg-pink-500 px-6 py-3 font-black text-white"
            >
              Visit Support
            </a>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-pink-500">
              General Enquiries
            </p>
            <h2 className="mt-3 text-2xl font-black">
              Contact AfterDarkApps
            </h2>
            <p className="mt-4 leading-7 text-zinc-400">
              For general questions, business enquiries or partnerships, contact us by email.
            </p>

            <a
              href="mailto:support@ismygirlyfree.com"
              className="mt-6 inline-flex rounded-xl border border-pink-500/40 bg-pink-500/5 px-6 py-3 font-black text-pink-500"
            >
              support@ismygirlyfree.com
            </a>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-pink-500/30 bg-pink-500/5 p-8">
          <h2 className="text-3xl font-black">Before You Email</h2>
          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            If you&apos;re reporting a technical problem, include your device type,
            the email linked to your account, a short description of what happened,
            and screenshots if possible.
          </p>
        </div>
      </section>
    </main>
  );
}

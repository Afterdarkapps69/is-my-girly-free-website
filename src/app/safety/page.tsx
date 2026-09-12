export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-zinc-900">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-pink-500">
            Safety
          </p>

          <h1 className="mt-3 text-5xl font-black sm:text-6xl">
            Stay Safe. Stay Smart.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Is My Girly Free? helps people stay connected, but everyone is responsible
            for using the app and meeting others safely.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-8 px-6 py-20">
        {[
          [
            "Meet in Public Places",
            "When meeting someone, stay in public, populated venues and use good judgement about your surroundings.",
          ],
          [
            "Protect Your Personal Information",
            "Avoid sharing sensitive personal details such as passwords, banking information, home addresses or other private information.",
          ],
          [
            "Respect Boundaries",
            "Always respect another person's decisions, privacy and personal boundaries. Harassment, threats or abusive behaviour are not acceptable.",
          ],
          [
            "Be Careful With Payments",
            "Use the app's supported payment methods for digital drinks. Be cautious of requests to send money using unfamiliar or unofficial methods.",
          ],
          [
            "Keep Profiles Accurate",
            "Users should keep workplace and availability information accurate and avoid misleading other users.",
          ],
          [
            "Report Problems",
            "If you experience inappropriate behaviour, suspicious activity or a safety concern, contact support so the issue can be reviewed.",
          ],
          [
            "Trust Your Judgement",
            "If something feels wrong, remove yourself from the situation and seek help from venue staff, local authorities or someone you trust.",
          ],
        ].map(([title, text]) => (
          <div
            key={title}
            className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7"
          >
            <h2 className="text-2xl font-black">{title}</h2>
            <p className="mt-3 leading-7 text-zinc-400">{text}</p>
          </div>
        ))}

        <div className="rounded-3xl border border-pink-500/30 bg-pink-500/5 p-8">
          <h2 className="text-2xl font-black">Need to Report Something?</h2>
          <p className="mt-3 leading-7 text-zinc-400">
            If you need help with a safety concern, suspicious account or inappropriate
            behaviour, contact our support team.
          </p>

          <a
            href="/support"
            className="mt-6 inline-flex rounded-xl bg-pink-500 px-6 py-3 font-black text-white"
          >
            Contact Support
          </a>
        </div>
      </section>
    </main>
  );
}

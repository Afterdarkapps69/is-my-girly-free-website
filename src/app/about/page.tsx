export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-zinc-900">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-pink-500">
            About Us
          </p>

          <h1 className="mt-3 text-5xl font-black sm:text-6xl">
            About Is My Girly Free?
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            A nightlife app designed to make it easier for people to stay connected,
            find familiar faces and know who&apos;s working before they head out.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-12 px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-pink-500">
              For Girlies
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Stay Visible. Stay Connected.
            </h2>
            <p className="mt-4 leading-7 text-zinc-400">
              Is My Girly Free? helps bartenders, waitresses, hostesses, dancers,
              performers and other nightlife professionals let their regulars know
              when and where they&apos;re working.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-pink-500">
              For Guys
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Know Before You Go.
            </h2>
            <p className="mt-4 leading-7 text-zinc-400">
              Browse profiles, check availability, see where your favourites are
              working and keep track of them if they move bars or workplaces.
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-pink-500">
            Why We Built It
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Make Nightlife Easier to Navigate
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            People move between bars and venues, shifts change, and regular customers
            do not always know where someone is working. Is My Girly Free? brings that
            information together in one place so users can stay connected without
            wasting time searching from venue to venue.
          </p>
        </div>

        <div className="rounded-3xl border border-pink-500/30 bg-pink-500/5 p-8">
          <h2 className="text-3xl font-black">
            Real People. Real Nights. Real Connections.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            The goal is simple: help girlies stay visible, help guys find the people
            they know, and make nightlife easier to plan.
          </p>
        </div>

        <div className="border-t border-zinc-900 pt-10 text-sm text-zinc-500">
          Is My Girly Free? is operated by AfterDarkApps.
        </div>
      </section>
    </main>
  );
}

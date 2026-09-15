import Image from "next/image";

const features = [
  ["📍", "See Who’s Working Nearby", "Find girlies working at participating bars and venues."],
  ["👤", "View Profiles", "See profiles, availability and where they’re working tonight."],
  ["🍸", "Send Digital Drinks", "Send a digital drink directly through the app."],
  ["💬", "Stay Connected", "Keep in touch and follow your favourite girlies."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-pink-500/20 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Image
            src="/logo-main.png"
            alt="Is My Girly Free?"
            width={170}
            height={90}
            className="h-auto w-36 sm:w-44"
            priority
          />

          <nav className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
            <a href="#features" className="hover:text-pink-500">Features</a>
            <a href="#how-it-works" className="hover:text-pink-500">How It Works</a>
            <a href="#girlies" className="hover:text-pink-500">For Girlies</a>
            <a href="#guys" className="hover:text-pink-500">For Guys</a>
            <a href="#download" className="hover:text-pink-500">Download</a>
          </nav>

          <a
            href="#download"
            className="rounded-full bg-pink-500 px-5 py-3 text-sm font-bold hover:bg-pink-400"
          >
            Download
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-pink-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(236,72,153,0.20),transparent_35%)]" />

        <div className="relative mx-auto grid min-h-[82vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-pink-500">
              Real people. Real nights.
            </p>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Know Who&apos;s
              <span className="block text-pink-500">Working Tonight</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-300">
              Find your favourite girlies, see where they&apos;re working,
              check their availability and send a digital drink — all from one app.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#download"
                className="rounded-xl bg-pink-500 px-7 py-4 text-center font-bold hover:bg-pink-400"
              >
                Download the App
              </a>
              <a
                href="#how-it-works"
                className="rounded-xl border border-zinc-700 px-7 py-4 text-center font-bold hover:border-pink-500"
              >
                Learn More
              </a>
            </div>

            <p className="mt-8 text-lg font-semibold italic text-pink-400">
              Good drinks. Better connections.
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute h-[80%] w-[70%] rounded-full bg-pink-500/20 blur-3xl" />

            <div className="relative grid grid-cols-2 items-end gap-4">
              <div className="translate-y-8 rounded-[2.5rem] border border-pink-500/40 bg-zinc-950 p-2 shadow-[0_0_50px_rgba(236,72,153,.18)]">
                <Image
                  src="/onboarding/girly-3.png"
                  alt="Is My Girly Free app screen"
                  width={853}
                  height={1844}
                  className="h-auto w-52 rounded-[2rem]"
                />
              </div>

              <div className="rounded-[2.5rem] border border-pink-500/40 bg-zinc-950 p-2 shadow-[0_0_50px_rgba(236,72,153,.18)]">
                <Image
                  src="/onboarding/guy-3.png"
                  alt="Is My Girly Free app screen"
                  width={853}
                  height={1844}
                  className="h-auto w-52 rounded-[2rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Professions */}
      <section className="border-b border-zinc-900 bg-black">
        <div className="mx-auto max-w-[1500px] px-8 py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-pink-500">
                Amazing Women. Every Night.
              </p>

              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl lg:text-[3.2rem]">
                For <span className="text-pink-500">Bartenders, Waitresses, Hostesses</span>
                <br />
                and Nightlife Professionals.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                From bartenders and waitresses to hostesses, dancers and performers —
                stay visible, stay connected and let your regulars know where you&apos;re working.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["bartender.png", "Bartenders", "Keep your regulars connected."],
                ["waitress.png", "Waitresses", "Stay visible when you&apos;re working."],
                ["hostess.png", "Hostesses", "Let people know where to find you."],
                ["dancer.png", "Dancers & Performers", "Build your network and stay connected."],
              ].map(([src, title, text]) => (
                <div
                  key={title}
                  className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition hover:border-pink-500/60"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-black">
                    <Image
                      src={`/${src}`}
                      alt={title}
                      width={853}
                      height={1844}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-black">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Girlies */}
      <section id="girlies" className="scroll-mt-56 mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-pink-500">
              For Girlies
            </p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Stay Visible. Stay Connected.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-400">
              If you work in bars, hospitality or nightlife, Is My Girly Free?
              helps your regular customers find you, see when you&apos;re working
              and send you digital drinks even when they can&apos;t make it to the bar.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {["girly-1.webp", "profile-paypal.png", "girly-4.webp"].map((src) => (
              <div
                key={src}
                className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-2"
              >
                <Image
                  src={`/onboarding/${src}`}
                  alt="Is My Girly Free app"
                  width={924}
                  height={2000}
                  className="h-auto w-full rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Features */}
      <section id="features" className="scroll-mt-56 border-y border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-pink-500">
                Tools for a Better Night
              </p>
              <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                App Features
              </h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-zinc-400">
                Everything you need to discover, connect and keep up with your favourite girlies in one place.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ["📍", "See Who’s Working Nearby", "Find girlies working at participating bars and venues."],
                ["👤", "View Profiles", "See profiles, availability and where they’re working tonight."],
                ["🍸", "Send Digital Drinks", "Send a digital drink directly through the app."],
                ["💬", "Stay Connected", "Keep in touch and follow your favourite girlies."],
                ["💗", "Support Your Favourites", "Show support and stay connected with the girlies you know."],
              ].map(([icon, title, text]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-zinc-800 bg-black p-6 transition hover:-translate-y-1 hover:border-pink-500/60"
                >
                  <div className="text-3xl">{icon}</div>
                  <h3 className="mt-5 text-lg font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-56 border-b border-zinc-900 bg-black">
        <div className="mx-auto max-w-[1500px] px-8 py-24">
          <div className="grid gap-12 lg:grid-cols-[300px_1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-pink-500">
                It&apos;s Simple
              </p>
              <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                How It Works
                <span className="block text-pink-500">For Guys</span>
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-400">
                From finding someone to sending a digital drink — it only takes a few steps.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                ["1", "🔎", "Browse Nearby Profiles", "See who's working nearby and discover participating bars and venues."],
                ["2", "🍸", "Send a Digital Drink", "Choose a girly and send a digital drink directly through the app."],
                ["3", "💗", "Add Her to Favourites", "Save a girly to your favourites so you can quickly see if she changes bars or workplaces and find out where she's working next."],
              ].map(([number, icon, title, text]) => (
                <div
                  key={number}
                  className="relative rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-pink-500/60"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-sm font-black text-white">
                      {number}
                    </div>
                    <div className="text-4xl">{icon}</div>
                  </div>

                  <h3 className="mt-8 text-2xl font-black">{title}</h3>
                  <p className="mt-4 leading-7 text-zinc-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* For Guys visual */}
      <section id="guys" className="scroll-mt-56 border-b border-zinc-900 bg-black">
        <div className="mx-auto max-w-[1500px] px-6 py-16">
          <div className="relative min-h-[760px] overflow-hidden rounded-3xl border border-pink-500/20 bg-black">
            <Image
              src="/for-guys-banner.png"
              alt="Is My Girly Free app screens"
              fill
              className="object-cover object-right scale-[0.84] origin-right"
              sizes="100vw"
            />

            <div className="absolute inset-y-0 left-0 w-[52%] bg-gradient-to-r from-black via-black to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[23%] bg-gradient-to-t from-black via-black/95 to-transparent" />

            <div className="relative z-10 flex min-h-[760px] flex-col justify-between p-8 sm:p-12 lg:p-16">
              <div className="max-w-[470px]">
                <p className="text-sm font-black uppercase tracking-[0.28em] text-pink-500">
                  For Guys
                </p>

                <h2 className="mt-5 text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                  Find Her. Follow Her.
                  <span className="mt-2 block text-pink-500">
                    Know Where She&apos;s Working.
                  </span>
                </h2>

                <p className="mt-7 text-lg leading-8 text-zinc-300">
                  Browse nearby bars, check bar details and who&apos;s available tonight,
                  and save your favourites so you can quickly see if they move bars or workplaces.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#download"
                    className="inline-flex items-center justify-center rounded-xl bg-pink-500 px-8 py-4 text-base font-black text-white transition hover:bg-pink-400"
                  >
                    Download the App
                  </a>

                  <a
                    href="#benefits"
                    className="inline-flex items-center justify-center rounded-xl border border-pink-500 px-8 py-4 text-base font-black text-white transition hover:bg-pink-500/10"
                  >
                    Learn More →
                  </a>
                </div>
              </div>

              <div className="grid gap-4 pt-10 md:grid-cols-3">
                <a
                  href="#download"
                  className="rounded-2xl border border-zinc-800 bg-black/80 p-5 backdrop-blur transition hover:border-pink-500"
                >
                  <p className="font-black text-white">Map Nearby Bars</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Discover bars and see who&apos;s working tonight.
                  </p>
                </a>

                <a
                  href="#download"
                  className="rounded-2xl border border-zinc-800 bg-black/80 p-5 backdrop-blur transition hover:border-pink-500"
                >
                  <p className="font-black text-white">See Bar Details &amp; Availability</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Check bar information, hours and who&apos;s available.
                  </p>
                </a>

                <a
                  href="#benefits"
                  className="rounded-2xl border border-zinc-800 bg-black/80 p-5 backdrop-blur transition hover:border-pink-500"
                >
                  <p className="font-black text-white">Track Favourites</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Save favourite profiles and quickly find them again.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guys / Girlies benefits */}
      <section id="benefits" className="scroll-mt-56 border-b border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-[1500px] px-8 py-24">
          <div className="mb-12">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-pink-500">
              Real Connections. Real Benefits.
            </p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Why People Love
              <span className="block text-pink-500">Is My Girly Free?</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-800 bg-black p-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-500">
                For Guys
              </p>
              <h3 className="mt-3 text-3xl font-black">
                Know Who&apos;s Around Before You Go Out
              </h3>

              <ul className="mt-8 space-y-5 text-zinc-300">
                {[
                  "See who’s working before you head out",
                  "Add girlies to favourites and see if they move bars or workplaces",
                  "Send digital drinks directly through the app",
                  "Discover participating bars and venues",
                  "Stay connected with your favourite girlies",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-500 font-black text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-pink-500/30 bg-pink-500/5 p-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-500">
                For Girlies
              </p>
              <h3 className="mt-3 text-3xl font-black">
                Stay Visible and Stay Connected
              </h3>

              <ul className="mt-8 space-y-5 text-zinc-300">
                {[
                  "Let regulars know when you’re working",
                  "Stay visible if you change bars or workplaces",
                  "Receive digital drinks directly through the app",
                  "Build your network and keep your regulars close",
                  "Make it easier for people to find you again",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-500 font-black text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Reviews */}
      <section id="reviews" className="border-b border-zinc-900 bg-black">
        <div className="mx-auto max-w-[1500px] px-8 py-24">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-pink-500">
                Real People. Real Nights.
              </p>
              <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                What Users Are Saying
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              [
                "Mike",
                "★★★★★",
                "It makes it much easier to see who’s working before heading out. I also like being able to keep favourites in one place.",
              ],
              [
                "Jasmine",
                "★★★★★",
                "I like that regulars can still find me if I’m working somewhere different. It makes staying connected much easier.",
              ],
              [
                "Chris",
                "★★★★★",
                "The map and favourites are the best parts for me. I can quickly check where people are working without messaging around first.",
              ],
            ].map(([name, stars, quote]) => (
              <div
                key={name}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
              >
                <div className="text-lg tracking-[0.2em] text-pink-500">{stars}</div>
                <p className="mt-5 text-lg leading-8 text-zinc-300">
                  “{quote}”
                </p>
                <p className="mt-6 font-black text-white">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="scroll-mt-56 relative overflow-hidden border-b border-zinc-900 bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,.22),transparent_52%)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-28 text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-pink-500">
            Ready for Tonight?
          </p>

          <h2 className="mt-3 text-5xl font-black sm:text-6xl">
            Ready to <span className="text-pink-500">Connect?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Download Is My Girly Free? and see who&apos;s working before you head out.
            Find your favourites, check where they&apos;re working and send a digital drink.
          </p>

          <a
            href="#"
            className="mt-10 inline-flex rounded-xl bg-pink-500 px-8 py-4 text-lg font-black text-white transition hover:bg-pink-400"
          >
            Get Started Tonight
          </a>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://play.google.com/store/apps/details?id=com.ismygirlyfree.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-700 bg-black px-7 py-4 font-bold text-white transition hover:border-pink-500"
            >
              Google Play
            </a>

            <a
              href="#"
              className="rounded-xl border border-zinc-700 bg-black px-7 py-4 font-bold text-white transition hover:border-pink-500"
            >
              App Store
            </a>
          </div>

          <p className="mt-8 text-sm text-zinc-500">
            Available on Android and iPhone.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <Image
            src="/logo-main.png"
            alt="Is My Girly Free?"
            width={140}
            height={70}
            className="h-auto w-32"
          />

          <div className="flex flex-wrap gap-6 text-sm text-zinc-500">
            <a href="/about">About</a>
            <a href="/privacy">Privacy</a>
            <a href="/safety">Safety</a>
            <a href="/terms">Terms</a>
            <a href="/contact">Contact</a>
          </div>

          <p className="text-sm text-zinc-600">
            © 2026 AfterDarkApps
          </p>
        </div>
      </footer>
    </main>
  );
}

export default function Home() {
  const now = new Date();
  const hour = now.getUTCHours();
  const timeOfDay =
    hour < 6
      ? "night owl"
      : hour < 12
        ? "morning sunshine"
        : hour < 18
          ? "afternoon explorer"
          : "evening dreamer";

  const highlights = [
    {
      title: "Fresh Greeting",
      description:
        "Every visit begins with a bright hello layered over a calm, responsive gradient.",
    },
    {
      title: "Ambient Mood",
      description:
        "Subtle light animations and shadows keep the focus on the message without distraction.",
    },
    {
      title: "Ready to Deploy",
      description:
        "Built with the Next.js App Router, typed with TypeScript, and tuned for Vercel.",
    },
  ];

  const timeline = [
    { label: "Now", info: "You landed here. Hi!" },
    { label: "Next", info: "Take a breath and explore what's possible today." },
    { label: "Soon", info: "Spin up ideas, jot notes, or share this hello." },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-emerald-100 px-6 py-24 text-slate-900">
      <section className="mx-auto flex w-full max-w-4xl flex-col gap-16 rounded-3xl border border-white/60 bg-white/70 p-12 shadow-[0_40px_90px_-50px_rgba(14,87,169,0.65)] backdrop-blur">
        <header className="flex flex-col gap-6">
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-900/[0.04] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Hi, {timeOfDay}
          </p>
          <h1 className="text-balance text-5xl font-semibold leading-tight sm:text-6xl">
            A gentle hello from a tiny corner of the web.
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            This micro-experience celebrates the smallest possible greeting.
            It&apos;s built with modern Next.js defaults, ready to drop onto
            Vercel, and eager to spark your next idea.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-slate-900 text-slate-100">
          <div className="grid gap-2 border-b border-white/10 px-6 py-4 text-sm uppercase tracking-[0.3em] text-white/60 sm:grid-cols-3 sm:text-center">
            <span>Heartbeat</span>
            <span>Moments</span>
            <span>Whispers</span>
          </div>
          <ul className="grid gap-0 sm:grid-cols-3">
            {timeline.map((event) => (
              <li
                key={event.label}
                className="border-t border-white/10 px-6 py-6 sm:border-l first:border-l-0"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  {event.label}
                </span>
                <p className="mt-2 text-sm text-white/80">{event.info}</p>
              </li>
            ))}
          </ul>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-slate-200/80 bg-white/60 px-8 py-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Want to carry this hello with you?
            </h3>
            <p className="text-sm text-slate-600">
              Clone, remix, or deploy—no strings attached.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://vercel.com/new"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Deploy to Vercel
            </a>
            <a
              href="https://nextjs.org/docs"
              className="inline-flex items-center justify-center rounded-full border border-slate-900 px-6 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
            >
              Explore Docs
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}

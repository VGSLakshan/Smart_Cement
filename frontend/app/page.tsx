export default function Home() {
  const cards = [
    {
      title: "Cement compressive strength testing",
      desc: "Measure compressive strength of cement samples and record test results for quality control.",
    },
    {
      title: "Component 1",
      desc: "Information and metrics related to component 1.",
    },
    {
      title: "Component 2",
      desc: "Information and metrics related to component 2.",
    },
    {
      title: "Component 3",
      desc: "Information and metrics related to component 3.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-red-50 flex items-start justify-center p-8">
      <div className="w-full max-w-6xl">
        <header className="mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-insee flex items-center justify-center text-white font-bold text-xl">
              IN
            </div>
            <div>
              <h1 className="text-4xl font-extrabold text-insee">INSEE</h1>
              <p className="text-gray-600 mt-1">
                Smart Cement dashboard — components & testing
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="card-insee p-6"
              aria-labelledby={card.title.replace(/\s+/g, "-").toLowerCase()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2
                    id={card.title.replace(/\s+/g, "-").toLowerCase()}
                    className="text-lg font-semibold mb-2 text-gray-900"
                  >
                    {card.title}
                  </h2>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <div className="card-accent" aria-hidden="true" />
                  <button
                    className="text-sm px-3 py-1 rounded-md border border-transparent text-insee hover:bg-insee-soft transition-colors"
                    aria-label={`Open ${card.title}`}
                  >
                    Open
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

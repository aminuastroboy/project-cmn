
export default function CMNCampaignWebsite() {
  const sections = [
    {
      title: "People-Driven Campaign",
      text: "Comrade Mustapha Network (CMN) is a structured grassroots campaign platform focused on organization, accountability, and community engagement across Adamawa State.",
    },
    {
      title: "Grassroots Structure",
      text: "Built from polling units upward, CMN connects state, LGA, ward, and polling unit teams through a disciplined and coordinated campaign system.",
    },
    {
      title: "Digital Campaign Operations",
      text: "Our campaign app supports mobilization tracking, voter engagement updates, field reporting, and real-time coordination for campaign teams.",
    },
  ];

  const features = [
    "Structured State → LGA → Ward → PU coordination",
    "Volunteer and mobilizer onboarding",
    "PVC and voter engagement tracking",
    "Campaign reporting and accountability",
    "Election-day coordination framework",
    "Youth and women inclusion strategy",
  ];

  const updates = [
    {
      title: "Community Outreach Drive",
      date: "Recent Update",
      text: "Ward and polling unit teams continue grassroots engagement and field coordination across target communities.",
    },
    {
      title: "Volunteer Mobilization",
      date: "Campaign Notice",
      text: "CMN is strengthening its volunteer network for structured community engagement, digital reporting, and voter outreach.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200 bg-gradient-to-r from-red-50 via-white to-green-50 sticky top-0 z-20">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/cmn-logo.png" className="h-14 w-14 rounded-2xl border shadow-sm" />
            <div>
              <div className="text-2xl font-bold">Comrade Mustapha Network</div>
              <div className="text-sm text-gray-600">APC Campaign Platform</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#structure">Structure</a>
            <a href="#updates">Updates</a>
            <a href="#volunteer">Volunteer</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold">
              Comrade Mustapha Network
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Progress, Justice, People First
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#volunteer" className="bg-red-600 text-white px-5 py-3 rounded-xl">
                Join as Volunteer
              </a>
              <a href="#updates" className="border px-5 py-3 rounded-xl">
                Campaign Updates
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img src="/candidate-photo.jpg" className="w-full h-[420px] object-cover" />
          </div>
        </section>

        <section id="about" className="bg-gray-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">About CMN</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {sections.map((s)=> (
                <div key={s.title} className="bg-white p-6 rounded-2xl shadow">
                  <h3 className="font-semibold text-xl">{s.title}</h3>
                  <p className="mt-3 text-gray-600">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10">
            <h2 className="text-3xl font-bold">Core Features</h2>
            <div className="grid gap-4">
              {features.map((f)=>(
                <div key={f} className="border p-4 rounded-xl">{f}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="updates" className="bg-gray-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">Campaign Updates</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {updates.map((u)=>(
                <div key={u.title} className="bg-white p-6 rounded-2xl shadow">
                  <div className="text-red-600 text-sm">{u.date}</div>
                  <h3 className="text-xl font-semibold mt-2">{u.title}</h3>
                  <p className="mt-3 text-gray-600">{u.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="volunteer" className="py-20">
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold">Volunteer With CMN</h2>
              <p className="mt-4 text-gray-600">
                Join the grassroots movement supporting Comrade Mustapha.
              </p>
            </div>
            <div className="border p-6 rounded-2xl bg-gray-50">
              <input className="border p-3 rounded w-full mb-3" placeholder="Full Name"/>
              <input className="border p-3 rounded w-full mb-3" placeholder="Phone Number"/>
              <input className="border p-3 rounded w-full mb-3" placeholder="Ward / LGA"/>
              <button className="bg-green-600 text-white px-5 py-3 rounded-xl w-full">
                Submit Interest
              </button>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-900 text-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="mt-4 text-gray-300">
              Add campaign office details, phone numbers, and social links here.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

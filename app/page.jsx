import { useMemo, useState } from "react";

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
    {
      title: "Town Hall Engagement",
      date: "Leadership Update",
      text: "Community dialogue sessions are being organized to deepen engagement and communicate the campaign vision clearly.",
    },
    {
      title: "Youth Activation Program",
      date: "Field Update",
      text: "Youth-focused mobilization is expanding through local coordinators, peer engagement, and campaign awareness drives.",
    },
  ];

  const dashboardStats = [
    { label: "Active Wards", value: "21" },
    { label: "Mobilizers", value: "480+" },
    { label: "PU Coverage", value: "78%" },
    { label: "Volunteer Leads", value: "150+" },
  ];

  const events = [
    { title: "Ward Leadership Meeting", date: "This Week", location: "Yola North" },
    { title: "Volunteer Briefing", date: "Upcoming", location: "Campaign Office" },
    { title: "Community Outreach", date: "Scheduled", location: "Target Wards" },
  ];

  const gallery = [
    "/candidate-photo.jpg",
    "/candidate-photo.jpg",
    "/candidate-photo.jpg",
    "/candidate-photo.jpg",
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    wardLga: "",
    role: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const officePhone = "+2347000000000";
  const officeEmail = "campaign@example.com";
  const officeAddress = "Campaign Office Address, Adamawa State";
  const socialText = "Facebook, X, Instagram and WhatsApp links";

  const volunteerSummary = useMemo(() => {
    return `Volunteer Interest%0AName: ${encodeURIComponent(formData.fullName)}%0APhone: ${encodeURIComponent(
      formData.phone
    )}%0AWard/LGA: ${encodeURIComponent(formData.wardLga)}%0ARole: ${encodeURIComponent(
      formData.role
    )}%0AMessage: ${encodeURIComponent(formData.message)}`;
  }, [formData]);

  function validateForm() {
    const nextErrors = {};
    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required";
    if (!formData.phone.trim()) nextErrors.phone = "Phone number is required";
    if (!formData.wardLga.trim()) nextErrors.wardLga = "Ward / LGA is required";
    if (!formData.role.trim()) nextErrors.role = "Please select a volunteer role";
    return nextErrors;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validateForm();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    try {
      const response = await fetch("https://formspree.io/f/xvzwovqz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          wardLga: formData.wardLga,
          role: formData.role,
          message: formData.message,
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      const existing = JSON.parse(localStorage.getItem("cmnVolunteerLeads") || "[]");
      const payload = { ...formData, submittedAt: new Date().toISOString() };
      localStorage.setItem("cmnVolunteerLeads", JSON.stringify([payload, ...existing]));
      setSubmitted(true);
    } catch (err) {
      alert("Submission failed. Please try again or contact the campaign office.");
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200 bg-gradient-to-r from-red-50 via-white to-green-50 sticky top-0 z-20 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/cmn-logo.png"
              alt="Comrade Mustapha Network logo"
              className="h-14 w-14 rounded-2xl bg-white border border-gray-200 shadow-sm object-cover"
            />
            <div>
              <div className="text-2xl font-bold tracking-tight">Comrade Mustapha Network</div>
              <div className="text-sm text-gray-600">APC Campaign Platform</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#about" className="hover:text-black">About</a>
            <a href="#features" className="hover:text-black">Features</a>
            <a href="#structure" className="hover:text-black">Structure</a>
            <a href="#updates" className="hover:text-black">Updates</a>
            <a href="#dashboard" className="hover:text-black">Dashboard</a>
            <a href="#events" className="hover:text-black">Events</a>
            <a href="#gallery" className="hover:text-black">Gallery</a>
            <a href="#volunteer" className="hover:text-black">Volunteer</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm text-red-700 mb-5">
              Official Campaign Website
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Building a strong digital home for
              <span className="block text-red-600">Comrade Mustapha Network</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl leading-8">
              A modern campaign website designed to present the movement, its grassroots structure, volunteer network, digital operations, and community-centered vision in one clear place.
            </p>
            <div className="mt-4 text-xl font-semibold text-green-700">Progress, Justice, People First</div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#volunteer" className="rounded-2xl bg-red-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-red-700 transition">
                Join as Volunteer
              </a>
              <a href="#updates" className="rounded-2xl border border-gray-300 px-5 py-3 font-medium hover:bg-gray-50 transition">
                Campaign Updates
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
              {dashboardStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-gray-200 p-4 text-center bg-white shadow-sm">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <img src="/candidate-photo.jpg" alt="Comrade Mustapha" className="w-full h-[420px] object-cover" />
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-sm text-gray-500">Candidate Spotlight</div>
              <div className="mt-2 text-2xl font-semibold">Comrade Mustapha</div>
              <p className="mt-3 text-gray-600 leading-7">
                A people-focused leader with a grassroots vision for progress, justice, and inclusive development. This space introduces Comrade Mustapha’s message, public image, and campaign identity.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-3xl bg-green-50 p-5 border border-green-100">
                <div className="text-sm text-green-700">Coverage Model</div>
                <div className="mt-2 font-semibold text-xl">PU-Based Structure</div>
              </div>
              <div className="rounded-3xl bg-red-50 p-5 border border-red-100">
                <div className="text-sm text-red-700">Operations Model</div>
                <div className="mt-2 font-semibold text-xl">Digital Reporting</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-50 border-y border-gray-200">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">About CMN</h2>
              <p className="mt-4 text-gray-600 leading-8">
                Comrade Mustapha Network is a campaign organization designed to support structured mobilization, community outreach, digital coordination, and campaign accountability. It provides a disciplined framework for leadership, volunteers, and field teams across Adamawa State.
              </p>
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {sections.map((section) => (
                <div key={section.title} className="rounded-3xl bg-white p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                  <p className="mt-3 text-gray-600 leading-7">{section.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Core Features</h2>
              <p className="mt-4 text-gray-600 leading-8">
                This website works as a public-facing campaign hub for message consistency, volunteer growth, community communication, and campaign visibility.
              </p>
            </div>
            <div className="grid gap-4">
              {features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-gray-200 p-4 bg-white shadow-sm">
                  <div className="font-medium">{feature}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="structure" className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-3xl font-bold tracking-tight">Campaign Structure</h2>
            <div className="mt-8 grid md:grid-cols-5 gap-4">
              {["State Team", "LGA Coordinators", "Ward Leaders", "PU Coordinators", "Mobilizers"].map((item) => (
                <div key={item} className="rounded-3xl border border-gray-200 p-5 text-center shadow-sm">
                  <div className="font-semibold">{item}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-600 leading-8 max-w-3xl">
              The campaign is organized to ensure clear reporting, role assignment, and community-level engagement from the highest decision-making unit down to the polling unit.
            </p>
          </div>
        </section>

        <section id="updates" className="bg-gray-50 border-y border-gray-200">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Campaign Updates</h2>
              <p className="mt-3 text-gray-600 leading-8 max-w-2xl">
                Use this section for campaign news, stakeholder meetings, outreach activities, and approved announcements.
              </p>
            </div>
            <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {updates.map((item) => (
                <div key={item.title} className="rounded-3xl bg-white p-6 border border-gray-200 shadow-sm">
                  <div className="text-sm text-red-600 font-medium">{item.date}</div>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-gray-600 leading-7">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="dashboard" className="bg-white border-y border-gray-200">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Mobilization Dashboard Preview</h2>
                <p className="mt-3 text-gray-600 leading-8 max-w-2xl">
                  A simple operations view showing campaign reach, volunteer strength, and polling unit momentum across the network.
                </p>
              </div>
              <a href="#volunteer" className="rounded-2xl bg-red-600 px-5 py-3 text-white font-medium hover:bg-red-700 transition">Activate More Volunteers</a>
            </div>
            <div className="mt-10 grid md:grid-cols-4 gap-5">
              {dashboardStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
                  <div className="text-sm text-gray-500">Campaign Metric</div>
                  <div className="mt-3 text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="mt-2 text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="bg-gray-50 border-y border-gray-200">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-3xl font-bold tracking-tight">Events Calendar</h2>
            <p className="mt-3 text-gray-600 leading-8 max-w-2xl">
              A simple schedule section for campaign meetings, community visits, volunteer briefings, and ward activities.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {events.map((event) => (
                <div key={event.title} className="rounded-3xl bg-white p-6 border border-gray-200 shadow-sm">
                  <div className="text-sm text-green-700 font-medium">{event.date}</div>
                  <div className="mt-2 text-xl font-semibold">{event.title}</div>
                  <div className="mt-3 text-gray-600">{event.location}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-3xl font-bold tracking-tight">Media Gallery</h2>
            <p className="mt-3 text-gray-600 leading-8 max-w-2xl">
              Use this section to show campaign activities, outreach photos, press moments, and approved event visuals.
            </p>
            <div className="mt-8 grid md:grid-cols-4 sm:grid-cols-2 gap-4">
              {gallery.map((src, index) => (
                <div key={`${src}-${index}`} className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
                  <img src={src} alt={`Campaign gallery ${index + 1}`} className="w-full h-56 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="volunteer" className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Volunteer With CMN</h2>
              <p className="mt-4 text-gray-600 leading-8 max-w-xl">
                This section serves as a volunteer intake point for mobilizers, youth leaders, women leaders, media supporters, and polling unit coordinators.
              </p>
              <div className="mt-6 rounded-3xl border border-gray-200 p-6 bg-white shadow-sm">
                <div className="font-semibold text-lg">Suggested Volunteer Categories</div>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li>Polling Unit Mobilizers</li>
                  <li>Ward Coordinators</li>
                  <li>Youth Outreach Volunteers</li>
                  <li>Women Mobilization Leads</li>
                  <li>Media & Digital Support Team</li>
                </ul>
              </div>
              <div className="mt-6 rounded-3xl border border-green-200 bg-green-50 p-6">
                <div className="font-semibold">How submission works now</div>
                <p className="mt-3 text-sm text-gray-700 leading-7">
                  This version submits volunteer interest to Formspree and also keeps a local browser copy for quick demo tracking.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-gray-200 p-6 bg-gray-50 shadow-sm">
              <div className="text-xl font-semibold">Volunteer Sign-Up Form</div>
              {!submitted ? (
                <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
                  <div>
                    <input name="fullName" value={formData.fullName} onChange={handleChange} className="rounded-2xl border border-gray-300 px-4 py-3 bg-white w-full" placeholder="Full name" />
                    {errors.fullName ? <div className="mt-1 text-sm text-red-600">{errors.fullName}</div> : null}
                  </div>
                  <div>
                    <input name="phone" value={formData.phone} onChange={handleChange} className="rounded-2xl border border-gray-300 px-4 py-3 bg-white w-full" placeholder="Phone number" />
                    {errors.phone ? <div className="mt-1 text-sm text-red-600">{errors.phone}</div> : null}
                  </div>
                  <div>
                    <input name="wardLga" value={formData.wardLga} onChange={handleChange} className="rounded-2xl border border-gray-300 px-4 py-3 bg-white w-full" placeholder="Ward / LGA" />
                    {errors.wardLga ? <div className="mt-1 text-sm text-red-600">{errors.wardLga}</div> : null}
                  </div>
                  <div>
                    <select name="role" value={formData.role} onChange={handleChange} className="rounded-2xl border border-gray-300 px-4 py-3 bg-white w-full">
                      <option value="">Select volunteer role</option>
                      <option>Mobilizer</option>
                      <option>Ward Team</option>
                      <option>Youth Team</option>
                      <option>Women Team</option>
                      <option>Media Support</option>
                    </select>
                    {errors.role ? <div className="mt-1 text-sm text-red-600">{errors.role}</div> : null}
                  </div>
                  <textarea name="message" value={formData.message} onChange={handleChange} className="rounded-2xl border border-gray-300 px-4 py-3 bg-white min-h-[120px]" placeholder="Short note or message" />
                  <button className="rounded-2xl bg-green-600 px-5 py-3 text-white font-medium hover:bg-green-700 transition">
                    Submit Interest
                  </button>
                </form>
              ) : (
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800">
                    Your interest has been submitted successfully.
                  </div>
                  <div className="grid gap-3">
                    <a href={`https://wa.me/${officePhone.replace(/\D/g, "")}?text=${volunteerSummary}`} className="rounded-2xl bg-green-600 px-5 py-3 text-white font-medium text-center hover:bg-green-700 transition">
                      Send via WhatsApp
                    </a>
                    <a href={`mailto:${officeEmail}?subject=Volunteer Interest - CMN&body=${volunteerSummary}`} className="rounded-2xl border border-gray-300 px-5 py-3 font-medium text-center hover:bg-white transition">
                      Send via Email
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ fullName: "", phone: "", wardLga: "", role: "", message: "" });
                      }}
                      className="rounded-2xl bg-red-600 px-5 py-3 text-white font-medium hover:bg-red-700 transition"
                    >
                      Submit Another Response
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-900 text-white">
          <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Contact & Office Information</h2>
              <p className="mt-4 text-gray-300 leading-8 max-w-xl">
                Replace these placeholders with the official campaign office details, helplines, and email contacts for public enquiries and volunteer communication.
              </p>
            </div>
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <div className="space-y-4 text-sm">
                <div><div className="text-gray-400">Campaign Office</div><div className="mt-1">{officeAddress}</div></div>
                <div><div className="text-gray-400">Phone</div><div className="mt-1">{officePhone}</div></div>
                <div><div className="text-gray-400">Email</div><div className="mt-1">{officeEmail}</div></div>
                <div><div className="text-gray-400">Social Media</div><div className="mt-1">{socialText}</div></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

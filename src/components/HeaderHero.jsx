import { Phone, Star, MapPin, Calendar, Facebook, Instagram } from "lucide-react";

export default function HeaderHero() {
  const whatsappLink = "https://api.whatsapp.com/send?phone=15551234567&text=Salam!%20I%27m%20interested%20in%20your%20Umrah%20packages.";

  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(16,185,129,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-amber-500 text-white">
            <Star className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-gray-900">Barakah Umrah</p>
            <p className="text-xs text-gray-500">Trusted Beginner-Friendly Umrah</p>
          </div>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-emerald-700">Pricing</a>
          <a href="#insights" className="text-sm font-medium text-gray-700 hover:text-emerald-700">Insights</a>
          <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-emerald-700">Contact</a>
          <div className="mx-2 h-6 w-px bg-gray-200" />
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-md p-2 text-gray-600 hover:text-emerald-700">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-md p-2 text-gray-600 hover:text-emerald-700">
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
          >
            <Phone className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </nav>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 pt-10 md:grid-cols-2 md:gap-12 md:pb-28 md:pt-16">
        <div>
          <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-200">
            Beginner-focused guidance
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            A trustworthy Umrah experience — simple, guided, and serene
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600">
            From paperwork to ziyarat, our team and scholars support you at every step so your first Umrah is organized and spiritually uplifting.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-gray-700 ring-1 ring-gray-200">
              <Calendar className="h-4 w-4 text-emerald-600" /> Flexible Departures
            </div>
            <div className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-gray-700 ring-1 ring-gray-200">
              <MapPin className="h-4 w-4 text-amber-600" /> Makkah & Madinah Hotels
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-600"
            >
              View Packages
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200 hover:bg-emerald-50"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1597248881519-29e08b8ebc94?q=80&w=1740&auto=format&fit=crop"
              alt="Kaaba in Makkah"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-amber-900/10 via-transparent to-white/40" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-600 sm:text-base">
            <div className="rounded-lg bg-emerald-50 p-3 ring-1 ring-emerald-100">
              <p className="font-semibold text-emerald-900">Licensed & Insured</p>
              <p className="text-emerald-700">Registered with authorized partners</p>
            </div>
            <div className="rounded-lg bg-amber-50 p-3 ring-1 ring-amber-100">
              <p className="font-semibold text-amber-900">Guided by Scholars</p>
              <p className="text-amber-700">Knowledge-centered itinerary</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp button on mobile */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-20 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-emerald-700/20 hover:bg-emerald-700 md:hidden"
      >
        <Phone className="h-4 w-4" /> Chat
      </a>
    </header>
  );
}

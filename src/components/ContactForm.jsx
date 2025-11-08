import { Mail, User, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const whatsappLink = "https://api.whatsapp.com/send?phone=15551234567&text=Salam!%20I%27d%20like%20to%20learn%20about%20your%20Umrah%20packages.";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      setStatus("submitting");
      // Prototype: simulate send
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      form.reset();
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Inquiries & Reservations</h2>
          <p className="mt-3 text-gray-600">Have a question or ready to reserve? Send a note and our team will respond promptly.</p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-emerald-50/50 p-6 ring-1 ring-emerald-100">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="col-span-1">
              <label className="mb-1 block text-sm font-medium text-gray-700">Full Name</label>
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input name="name" required className="w-full rounded-md border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 outline-none ring-0 focus:border-emerald-400" placeholder="e.g. Aisha Khan" />
              </div>
            </div>
            <div className="col-span-1">
              <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input type="email" name="email" required className="w-full rounded-md border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 outline-none focus:border-emerald-400" placeholder="you@example.com" />
              </div>
            </div>
            <div className="col-span-1">
              <label className="mb-1 block text-sm font-medium text-gray-700">Phone</label>
              <div className="relative">
                <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input name="phone" className="w-full rounded-md border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 outline-none focus:border-emerald-400" placeholder="Optional" />
              </div>
            </div>
            <div className="col-span-1">
              <label className="mb-1 block text-sm font-medium text-gray-700">Preferred Departure</label>
              <input name="date" type="date" className="w-full rounded-md border border-gray-200 bg-white py-2 px-3 text-sm text-gray-900 outline-none focus:border-emerald-400" />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="mb-1 block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" rows="4" className="w-full rounded-md border border-gray-200 bg-white p-3 text-sm text-gray-900 outline-none focus:border-emerald-400" placeholder="Tell us how we can help"></textarea>
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 disabled:opacity-70"
              >
                <Send className="h-4 w-4" />
                {status === "submitting" ? "Sending..." : status === "success" ? "Sent! We'll be in touch" : "Send Request"}
              </button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
              >
                <Phone className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
            <p className="col-span-1 md:col-span-2 text-center text-xs text-gray-500">We typically respond within 1-2 business hours.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-gray-900">Barakah Umrah</p>
            <p className="mt-2 text-sm text-gray-600">Professional, faith-centered Umrah services for individuals, families, and groups.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-600"/> +1 (555) 123-4567</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-600"/> info@barakahumrah.com</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Follow</p>
            <div className="mt-3 flex gap-3">
              <a href="#" className="rounded-md border border-gray-200 p-2 text-gray-600 hover:text-emerald-700"><Facebook className="h-4 w-4"/></a>
              <a href="#" className="rounded-md border border-gray-200 p-2 text-gray-600 hover:text-emerald-700"><Instagram className="h-4 w-4"/></a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Barakah Umrah. All rights reserved.</p>
          <p>Licensed travel partner • PCI compliant payments</p>
        </div>
      </div>
    </footer>
  );
}

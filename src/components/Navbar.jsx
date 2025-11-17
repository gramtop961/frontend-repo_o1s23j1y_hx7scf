import { Menu, Phone, Calendar } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 to-teal-400 grid place-items-center text-white font-bold">D</div>
            <span className="font-semibold text-slate-800 text-lg">BrightSmile Dental</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-600">
            <a href="#services" className="hover:text-slate-900 transition">Services</a>
            <a href="#about" className="hover:text-slate-900 transition">About</a>
            <a href="#testimonials" className="hover:text-slate-900 transition">Reviews</a>
            <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+1234567890" className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition">
              <Phone className="w-4 h-4" /> (123) 456-7890
            </a>
            <a href="#booking" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-sky-500 to-teal-400 text-white shadow hover:opacity-95 transition">
              <Calendar className="w-4 h-4" /> Book Appointment
            </a>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu className="w-6 h-6 text-slate-700" />
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 py-3 space-y-2">
            <a href="#services" className="block px-2 py-2 rounded hover:bg-slate-100">Services</a>
            <a href="#about" className="block px-2 py-2 rounded hover:bg-slate-100">About</a>
            <a href="#testimonials" className="block px-2 py-2 rounded hover:bg-slate-100">Reviews</a>
            <a href="#contact" className="block px-2 py-2 rounded hover:bg-slate-100">Contact</a>
            <a href="tel:+1234567890" className="block px-2 py-2 rounded hover:bg-slate-100">Call (123) 456-7890</a>
            <a href="#booking" className="block px-2 py-2 rounded bg-gradient-to-r from-sky-500 to-teal-400 text-white text-center">Book Appointment</a>
          </div>
        )}
      </div>
    </header>
  )
}

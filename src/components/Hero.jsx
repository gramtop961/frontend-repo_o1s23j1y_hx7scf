import { Star, ShieldCheck, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-sky-50 via-white to-teal-50" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Gentle, modern dental care for confident smiles
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              From routine checkups to cosmetic dentistry, our friendly team uses the latest technology to keep your smile healthy and bright.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#booking" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-sky-500 to-teal-400 text-white shadow hover:opacity-95 transition">
                Book an Appointment
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 transition">
                Explore Services
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-slate-700">
              <div className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-500" /><span>500+ 5-star reviews</span></div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-teal-500" /><span>Comfort-first care</span></div>
              <div className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-sky-500" /><span>State-of-the-art tech</span></div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-sky-200/40 to-teal-200/40 rounded-3xl blur-2xl" aria-hidden="true" />
            <img src="https://images.unsplash.com/photo-1606811842243-af7e16970c1f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZW50aXN0JTIwd2l0aCUyMHBhdGllbnR8ZW58MHwwfHx8MTc2MzM0MTc5Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Dentist with patient" className="relative rounded-2xl shadow-xl w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

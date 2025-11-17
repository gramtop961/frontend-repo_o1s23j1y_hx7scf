import { Sparkles, Tooth, Smile, Shield, HeartPulse, Baby } from 'lucide-react'

const services = [
  {
    icon: Tooth,
    title: 'General Dentistry',
    desc: 'Checkups, cleanings, fillings, and preventive care for the whole family.'
  },
  {
    icon: Smile,
    title: 'Cosmetic Dentistry',
    desc: 'Teeth whitening, veneers, and smile makeovers tailored to you.'
  },
  {
    icon: Shield,
    title: 'Restorative Care',
    desc: 'Crowns, bridges, implants, and gentle root canals with precision.'
  },
  {
    icon: HeartPulse,
    title: 'Emergency Dentistry',
    desc: 'Same-day appointments for toothaches, chips, and urgent care.'
  },
  {
    icon: Baby,
    title: 'Pediatric Dentistry',
    desc: 'Kid-friendly care to build healthy habits and happy visits.'
  },
  {
    icon: Sparkles,
    title: 'Invisalign & Orthodontics',
    desc: 'Clear aligners and braces for comfortable, confident alignment.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Comprehensive care, all in one place</h2>
          <p className="mt-3 text-slate-600">We combine expertise with compassion to deliver a calm, comfortable experience every time.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-xl border border-slate-200 hover:shadow-lg transition bg-slate-50">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500 to-teal-400 text-white grid place-items-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-semibold text-lg text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

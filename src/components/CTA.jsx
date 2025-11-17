export default function CTA() {
  return (
    <section id="booking" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Ready for a brighter smile?</h2>
        <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Book a visit in minutes. We offer early morning, evening, and weekend appointments to fit your schedule.</p>
        <form className="mt-8 grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          <input type="text" placeholder="Full name" className="px-4 py-3 rounded-md text-slate-900" required />
          <input type="tel" placeholder="Phone number" className="px-4 py-3 rounded-md text-slate-900" required />
          <button type="submit" className="px-6 py-3 rounded-md bg-gradient-to-r from-sky-500 to-teal-400 shadow hover:opacity-95 transition">Request Appointment</button>
        </form>
        <p className="mt-3 text-slate-400 text-sm">We'll call you to confirm your appointment time.</p>
      </div>
    </section>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Loved by our patients</h2>
          <p className="mt-3 text-slate-600">Real stories from people who trust us with their smiles.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt="Patient" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold text-slate-900">Patient {i}</p>
                  <p className="text-xs text-amber-500">★★★★★</p>
                </div>
              </div>
              <p className="mt-4 text-slate-600 text-sm">“The most gentle cleaning I've ever had. The team made me feel comfortable from start to finish.”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <CTA />
        <footer id="contact" className="border-t border-slate-200 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
            <div>
              <p className="font-semibold text-lg">BrightSmile Dental</p>
              <p className="text-slate-600 mt-2 text-sm">123 Main Street, Suite 200, Your City</p>
              <p className="text-slate-600 text-sm">Open Mon–Sat • Free parking</p>
            </div>
            <div>
              <p className="font-semibold">Contact</p>
              <p className="text-slate-600 mt-2 text-sm">Phone: (123) 456-7890</p>
              <p className="text-slate-600 text-sm">Email: hello@brightsmile.com</p>
            </div>
            <div>
              <p className="font-semibold">Hours</p>
              <p className="text-slate-600 mt-2 text-sm">Mon–Fri: 8:00am – 6:00pm</p>
              <p className="text-slate-600 text-sm">Sat: 9:00am – 2:00pm</p>
            </div>
          </div>
          <p className="text-center text-slate-500 text-sm mt-6">© {new Date().getFullYear()} BrightSmile Dental. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default App

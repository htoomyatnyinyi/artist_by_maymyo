import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop"
            alt="Makeup Artist Hero"
            fill
            className="object-cover object-top opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>

        <div className="relative z-10 text-center text-white space-y-6 px-4">
          <p className="text-sm md:text-base font-medium tracking-[0.3em] uppercase opacity-90">
            Professional Makeup Artist
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-wide">
            ELEVATING <br className="hidden md:block" />
            <span className="italic font-normal">Natural Beauty</span>
          </h1>
          <div className="pt-8">
            <Link
              href="/booking"
              className="inline-block px-8 py-3 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy / Intro Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Makeup is not a mask, <br />
              <span className="italic text-gray-500">it is art.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              My philosophy is simple: enhance, don't conceal. I believe in
              creating looks that feel authentic to you, whether it's for your
              wedding day, a special event, or an editorial shoot. Every face
              tells a story, and I am here to highlight yours with precision,
              luxury products, and a touch of modern elegance.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="text-sm border-b border-black pb-1 hover:text-gray-600 hover:border-gray-400 transition-colors uppercase tracking-widest"
              >
                Read More About Me
              </Link>
            </div>
          </div>
          <div className="relative h-[600px] w-full bg-gray-100 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200"
              alt="Makeup Session"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 md:px-12 bg-[#f8f5f2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
              What I Do
            </p>
            <h2 className="text-4xl md:text-5xl font-serif">
              Curated Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bridal",
                desc: "Timeless, radiant makeup for your special day. Creating a look that lasts through tears and laughter.",
                image:
                  "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?q=80&w=800",
              },
              {
                title: "Editorial",
                desc: "Creative, high-impact looks for photography and fashion. Pushing the boundaries of beauty.",
                image:
                  "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?q=80&w=800",
              },
              {
                title: "Occasion",
                desc: "Polished and perfect for galas, parties, or any moment you want to feel your absolute best.",
                image:
                  "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?q=80&w=800",
              },
            ].map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-[400px] w-full mb-6 overflow-hidden bg-gray-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-serif mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <span className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 group-hover:border-black transition-colors">
                  View Details
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-6 md:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a1a1a] leading-tight">
            &ldquo;Maymyo didn't just apply makeup; she gave me confidence I
            didn't know I had. Absolutely stunning work.&rdquo;
          </div>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-sm font-bold uppercase tracking-widest">
              Sarah Jenkins
            </p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">
              Bridal Client
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1a1a1a] text-white text-center px-6">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif">Ready to Shine?</h2>
          <p className="text-gray-400 font-light text-lg">
            Book your session today and let's create something beautiful
            together.
          </p>
          <Link
            href="/booking"
            className="inline-block px-10 py-4 bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}

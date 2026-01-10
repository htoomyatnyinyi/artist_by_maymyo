import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero / Intro */}
      <section className="px-6 md:px-12 py-16 text-center">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
          The Artist
        </p>
        <h1 className="text-4xl md:text-6xl font-serif mb-8">
          Behind the Brush
        </h1>
        <div className="w-24 h-0.5 bg-black mx-auto"></div>
      </section>

      {/* Bio Section */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative h-[600px] md:h-[700px]">
            <Image
              src="https://images.unsplash.com/photo-1611826585949-b0ccabd2c1a4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              //   src="https://images.unsplash.com/photo-1487412947132-2d9bed996eb7?q=80&w=800"
              alt="Maymyo Portrait"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif leading-tight">
              Hello, I'm Maymyo. <br />
              <span className="text-gray-500 italic text-2xl">
                Dedicated to defining your beauty.
              </span>
            </h2>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
              <p>
                My journey began with a simple fascination for colors and
                textures, which quickly blossomed into a professional pursuit of
                artistry. With over 5 years of experience in the beauty
                industry, I have honed my skills across bridal, editorial, and
                commercial makeup.
              </p>
              <p>
                I believe that makeup is an extension of one's personality. It
                shouldn't mask who you are; it should amplify the confidence
                that's already within you. My signature style blends modern
                techniques with timeless elegance, ensuring you look fresh,
                radiant, and undeniably you.
              </p>
              <p>
                When I'm not on set or with a bride, you can find me researching
                the latest skincare innovations or exploring art galleries for
                inspiration.
              </p>
            </div>
            <div className="pt-4">
              <Image
                src="https://images.unsplash.com/photo-1558525287-25e17f73950d?q=80&w=300&auto=format&fit=crop"
                alt="Signature"
                width={150}
                height={60}
                className="opacity-60 invert"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Features */}
      <section className="bg-[#f9f9f9] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4 px-4">
            <div className="h-12 w-12 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-6">
              <span className="font-serif text-xl italic">01</span>
            </div>
            <h3 className="text-xl font-serif">Detail Oriented</h3>
            <p className="text-gray-500 font-light">
              Perfection is in the details. I meticulously prep the skin to
              ensure a flawless, long-lasting canvas.
            </p>
          </div>
          <div className="space-y-4 px-4">
            <div className="h-12 w-12 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-6">
              <span className="font-serif text-xl italic">02</span>
            </div>
            <h3 className="text-xl font-serif">Premium Products</h3>
            <p className="text-gray-500 font-light">
              My kit is stocked with luxury, high-performance brands like
              Charlotte Tilbury, NARS, and Dior.
            </p>
          </div>
          <div className="space-y-4 px-4">
            <div className="h-12 w-12 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-6">
              <span className="font-serif text-xl italic">03</span>
            </div>
            <h3 className="text-xl font-serif">Client Centric</h3>
            <p className="text-gray-500 font-light">
              Your comfort and satisfaction are paramount. I listen, I suggest,
              and together we create magic.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif">
            Experience the Artistry
          </h2>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 border border-black text-black text-sm font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

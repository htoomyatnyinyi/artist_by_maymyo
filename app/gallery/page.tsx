import Image from "next/image";

export default function GalleryPage() {
  const images = [
    "https://images.unsplash.com/photo-1487412947132-2d9bed996eb7?q=80&w=800",
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800",
    "https://images.unsplash.com/photo-1595168019747-0628e932ec79?q=80&w=800",
    "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?q=80&w=800",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800",
    "https://images.unsplash.com/photo-1503236896006-d93d5dc818b8?q=80&w=800",
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-16 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-serif mb-6">Portfolio</h1>
        <p className="max-w-xl mx-auto text-gray-500 font-light">
          A vivid collection of my latest work, featuring bridal elegance,
          editorial creativity, and everyday beauty.
        </p>
      </section>

      <section className="px-6 md:px-12 pb-24">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative break-inside-avoid overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Portfolio Item ${i + 1}`}
                width={800}
                height={1000}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

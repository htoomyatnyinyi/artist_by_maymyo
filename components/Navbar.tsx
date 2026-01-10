import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12">
      <div className="text-2xl font-serif font-bold tracking-widest text-[#1a1a1a]">
        <Link href="/">MAYMYO</Link>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide text-[#333]">
        {["Services", "Gallery", "Reviews", "About"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="hover:text-black transition-colors border-b-2 border-transparent hover:border-black py-1"
          >
            {item.toUpperCase()}
          </Link>
        ))}
      </div>
      <div>
        <Link
          href="/contact"
          className="px-6 py-2 bg-[#1a1a1a] text-white text-xs font-bold tracking-widest hover:bg-black transition-colors uppercase"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
}

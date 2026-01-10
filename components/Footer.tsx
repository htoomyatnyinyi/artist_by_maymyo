import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f9f9f9] border-t border-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-2xl font-serif font-bold tracking-wider text-[#1a1a1a]">
            MAYMYO
          </h3>
          <p className="text-sm text-gray-500 max-w-xs text-center md:text-left leading-relaxed">
            Professional makeup artistry dedicated to enhancing your natural
            beauty for every special occasion.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-800 mb-2">
            Connect
          </h4>
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            Email
          </a>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-800 mb-2">
            Menu
          </h4>
          <Link
            href="/services"
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            Services
          </Link>
          <Link
            href="/gallery"
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Makeup Artist By Maymyo. All rights
        reserved.
      </div>
    </footer>
  );
}

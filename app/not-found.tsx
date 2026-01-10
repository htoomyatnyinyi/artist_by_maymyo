import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-9xl font-serif text-gray-100">404</h1>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-6">
        <h2 className="text-3xl font-serif text-black">Page Not Found</h2>
        <p className="text-gray-500 font-light max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-black text-white text-xs font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center space-y-6">
      <div className="space-y-2">
        <p className="text-xs font-bold tracking-widest text-red-500 uppercase">
          Error
        </p>
        <h2 className="text-4xl font-serif">Something went wrong</h2>
      </div>
      <p className="text-gray-500 font-light max-w-md">
        We apologize for the inconvenience. Please try again or contact support
        if the problem persists.
      </p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="px-8 py-3 bg-black text-white text-xs font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}

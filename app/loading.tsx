export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        {/* Elegant spinner */}
        <div className="h-12 w-12 border-b-2 border-l-2 border-black rounded-full animate-spin"></div>

        {/* Loading Text */}
        <div className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 animate-pulse">
          Loading
        </div>
      </div>
    </div>
  );
}

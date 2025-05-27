export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <div className="animate-pulse flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-amber-800 rounded-full border-t-transparent animate-spin mb-4"></div>
        <p className="text-amber-800 font-medium">Loading...</p>
      </div>
    </div>
  );
} 
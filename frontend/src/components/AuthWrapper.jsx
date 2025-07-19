export default function AuthWrapper({ title, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-2xl animate-fadeInUp">
        <h2 className="text-3xl font-bold text-white text-center mb-6 tracking-wide">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}

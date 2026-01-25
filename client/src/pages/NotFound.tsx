import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-cyan-400 font-mono text-sm mb-2">
          404 ERROR
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Page not found
        </h1>

        <p className="text-slate-400 mb-8 leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-slate-200 transition"
          >
            Go Home
          </Link>

          <Link
            to="/events"
            className="px-6 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white transition"
          >
            View Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">AI Playground</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/playground" className="hover:text-blue-400">Playground</Link>
      </div>
    </nav>
  );
}

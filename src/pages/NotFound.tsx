import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-red-600">404 - Page Not Found</h1>
      <Link to="/" className="text-blue-500 underline">Go Home</Link>
    </div>
  );
}

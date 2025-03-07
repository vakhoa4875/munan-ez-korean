import 'primeicons/primeicons.css';
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout"; // Main layout
import Loading from "../components/Loading"; // Optional loading fallback

// Lazy load pages for better performance
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const NotFound = lazy(() => import("../pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap pages with a layout
    children: [
      { index: true, element: <Suspense fallback={<Loading />}><Home /></Suspense> },
      { path: "about", element: <Suspense fallback={<Loading />}><About /></Suspense> },
    ],
  },
  { path: "*", element: <NotFound /> }, // 404 page
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}

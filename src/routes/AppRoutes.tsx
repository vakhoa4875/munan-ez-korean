import 'primeicons/primeicons.css';
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout"; // Main layout
import Loading from "../components/Loading"; // Optional loading fallback

// Lazy load pages for better performance
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Login = lazy(() => import("../components/LoginForm"));
const RegisterForm = lazy(() => import("../components/RegisterForm"));
const ResetPassword = lazy(() => import("../components/ResetPassword"));
const ChangePassword = lazy(() => import("../components/ChangePassword"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap pages with a layout
    children: [
      { index: true, element: <Suspense fallback={<Loading />}><Home /></Suspense> },
      { path: "gioi-thieu", element: <Suspense fallback={<Loading />}><About /></Suspense> },
    ],
  },
  { path: "/dang-nhap", element: <Suspense fallback={<Loading />}><Login /></Suspense> },
  { path: "/dang-ki", element: <Suspense fallback={<Loading />}><RegisterForm /></Suspense> },
  { path: "/dat-lai-mat-khau", element: <Suspense fallback={<Loading />}><ResetPassword /></Suspense> },
  { path: "/doi-mat-khau", element: <Suspense fallback={<Loading />}><ChangePassword /></Suspense> },
  { path: "*", element: <NotFound /> }, // 404 page
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}

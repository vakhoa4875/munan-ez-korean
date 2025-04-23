import Layout from "@/components/Layout"; // Main layout
import Loading from "@/components/Loading"; // Optional loading fallback
import 'primeicons/primeicons.css';
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from '@/components/AdminLayout';

// Lazy load pages for better performance
const Home = lazy(() => import("@/pages/Home"));
const AdminDashboard = lazy(() => import("@/pages/AdminDashboard"));
const BlogEditor = lazy(() => import("@/pages/BlogEditor"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const CourseSoCap = lazy(() => import("@/pages/CourseSoCap"));
const CourseTrungCap = lazy(() => import("@/pages/CourseTrungCap"));
const CourseCaoCap = lazy(() => import("@/pages/CourseCaoCap"));

const KoreanVocabulary = lazy(() => import("@/pages/KoreanVocabulary"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Login = lazy(() => import("@/modules/auth/components/LoginForm"));
const RegisterForm = lazy(() => import("@/modules/auth/components/RegisterForm"));
const ResetPassword = lazy(() => import("@/modules/auth/components/ResetPassword"));
const ChangePassword = lazy(() => import("@/modules/auth/components/ChangePassword"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap pages with a layout
    children: [
      { index: true, element: <Suspense fallback={<Loading />}><Home /></Suspense> },
      { path: "gioi-thieu", element: <Suspense fallback={<Loading />}><About /></Suspense> },
      { path: "lien-he", element: <Suspense fallback={<Loading />}><Contact /></Suspense> },
      { path: "khoa-hoc/tieng-han-so-cap", element: <Suspense fallback={<Loading />}><CourseSoCap /></Suspense> },
      { path: "khoa-hoc/tieng-han-trung-cap", element: <Suspense fallback={<Loading />}><CourseTrungCap /></Suspense> },
      { path: "khoa-hoc/tieng-han-cao-cap", element: <Suspense fallback={<Loading />}><CourseCaoCap /></Suspense> },


      { path: "tu-vung-tieng-han", element: <Suspense fallback={<Loading />}><KoreanVocabulary /></Suspense> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />, // Wrap pages with a layout
    children: [
      { index: true, element: <Suspense fallback={<Loading />}><AdminDashboard /></Suspense> },
      { path: "bai-viet/tao-moi", element: <Suspense fallback={<Loading />}><BlogEditor /></Suspense> },

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

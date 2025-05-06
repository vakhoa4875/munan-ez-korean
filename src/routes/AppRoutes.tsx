import AdminLayout from '@/components/AdminLayout';
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import Login from '@/components/Login';
import ProtectedRoute from '@/components/ProtectedRoute';
import NotFound from '@/pages/NotFound';
import ServerError from '@/pages/ServerError';
import Unauthenticated from '@/pages/Unauthenticated';
import Unauthorized from '@/pages/Unauthorized';
import 'primeicons/primeicons.css';
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));
const AdminDashboard = lazy(() => import("@/pages/AdminDashboard"));
const BlogEditor = lazy(() => import("@/pages/BlogEditor"));
const Blog = lazy(() => import("@/pages/Blog"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const CourseSoCap = lazy(() => import("@/pages/CourseSoCap"));
const CourseTrungCap = lazy(() => import("@/pages/CourseTrungCap"));
const CourseCaoCap = lazy(() => import("@/pages/CourseCaoCap"));
const CourseChooseVideo = lazy(() => import("@/pages/CourseChooseVideo"));
const CourseWatchVideo = lazy(() => import("@/pages/CourseWatchVideo"));
const KoreanVocabulary = lazy(() => import("@/pages/KoreanVocabulary"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Suspense fallback={<Loading />}><Home /></Suspense> },
      { path: "gioi-thieu", element: <Suspense fallback={<Loading />}><About /></Suspense> },
      { path: "lien-he", element: <Suspense fallback={<Loading />}><Contact /></Suspense> },
      { path: "khoa-hoc/tieng-han-so-cap", element: <Suspense fallback={<Loading />}><CourseSoCap /></Suspense> },
      { path: "khoa-hoc/tieng-han-trung-cap", element: <Suspense fallback={<Loading />}><CourseTrungCap /></Suspense> },
      { path: "khoa-hoc/tieng-han-cao-cap", element: <Suspense fallback={<Loading />}><CourseCaoCap /></Suspense> },
      { path: "bai-viet", element: <Suspense fallback={<Loading />}><Blog /></Suspense> },
      { path: "khoa-hoc/tieng-han-so-cap/chon-video", element: <Suspense fallback={<Loading />}><CourseChooseVideo /></Suspense> },
      { path: "khoa-hoc/tieng-han-so-cap/xem-video", element: <Suspense fallback={<Loading />}><CourseWatchVideo /></Suspense> },
      { path: "tu-vung-tieng-han", element: <Suspense fallback={<Loading />}><KoreanVocabulary /></Suspense> },
    ],
  },
  {
    path: "/admin",
    element: <ProtectedRoute redirectPath='/dang-nhap' children={<AdminLayout />} />,
    children: [
      { index: true, element: <Suspense fallback={<Loading />}><AdminDashboard /></Suspense> },
      { path: "bai-viet/tao-moi", element: <Suspense fallback={<Loading />}><BlogEditor /></Suspense> },
    ],
  },
  {
    path: "/p",
    element: <ProtectedRoute children={<Layout />} requiredRole='learner' />,
    children: [],
  },
  { path: "/dang-nhap", element: <Login /> },
  { path: "/500", element: <ServerError /> },
  { path: "/403", element: <Unauthorized /> },
  { path: "/401", element: <Unauthenticated /> },
  { path: "*", element: <NotFound /> },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
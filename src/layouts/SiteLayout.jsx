// src/layouts/SiteLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function SiteLayout() {
  return (
    <>
      <Header />
      <main id="page-content"><Outlet /></main>
      <Footer />
    </>
  );
}
    
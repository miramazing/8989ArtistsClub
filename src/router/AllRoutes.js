import React from "react";
// Homepage Demo
import HomeTrending from "../views/home/HomeTrending";
// Service

// About
import AboutUs from "../views/inner-pages/about/AboutUs";

// Blog

// Portfolio
import WorksCarousel from "../views/inner-pages/portfolio/WorksCarousel";
import WorksGrid from "../views/inner-pages/portfolio/WorksGrid";

// Others
import { Route, Routes } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import BlogGrid from "../views/inner-pages/blog/BlogGrid";
import ComingSoon from "../views/inner-pages/ComingSoon";
import Contact from "../views/inner-pages/Contact";
import WorksShowcase from "../views/inner-pages/portfolio/WorksShowcase";
import Team from "../views/inner-pages/Team";
import NotFound from "../views/NotFound";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<HomeTrending />} />

        {/* Service */}
        {/* <Route path="/service" element={<Service />} />
        <Route path="/service-details" element={<ServiceDetails />} /> */}

        {/* About */}
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/about-me" element={<AboutMe />} /> */}

        {/* Portfolio */}
        <Route path="/works-grid" element={<WorksGrid />} />
        <Route path="/works-carousel" element={<WorksCarousel />} />
        <Route path="/works-showcase/:id" element={<WorksShowcase />} />

        {/** Shop */}
        <Route path="/blog-grid" element={<BlogGrid />} />

        {/* others */}
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        {/* <Route path="/faq" element={<Faq />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;

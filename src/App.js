import AOS from "aos";
import "aos/dist/aos.css";
import "photoswipe/dist/photoswipe.css";
import React, { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import { Helmet } from "react-helmet";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ScrollToTop from "./components/ScrollToTop";
import AllRoutes from "./router/AllRoutes";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>8989 예술가 클럽</title>
        <meta name="description" content="8989 artists' club" />
        <meta name="keywords" content="art, artists, local, busan" />
      </Helmet>
      {/* End React Helmet for SEO */}

      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="220, 53, 69"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      {/* End Animated Cursor */}

      <ScrollToTop />
      {/* End Scroll To Top */}

      <AllRoutes />
      {/* End All Routes */}
    </>
  );
};

export default App;

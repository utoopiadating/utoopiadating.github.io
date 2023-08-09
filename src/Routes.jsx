import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const PrivacyPolicy = React.lazy(() => import("pages/PrivacyPolicy"));
const ContactPage = React.lazy(() => import("pages/ContactPage"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

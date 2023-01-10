import React from "react";
import IPadPro11One from "pages/IPadPro11One";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/ipadpro11one" element={<IPadPro11One />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;

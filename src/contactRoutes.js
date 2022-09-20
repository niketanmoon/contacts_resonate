import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./containers/contact";
import ContactDetails from "./containers/contactDetails";

const ContactRoutes = () => {
  return (
    <Routes>
      <Route index element={<Contact />} />
      <Route path=":id" element={<ContactDetails />} />
    </Routes>
  );
};

export default ContactRoutes;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CategoryDetails from "./Components/Services/CategoryDetails";
import SubcategoryDetail from "./Components/Services/SubcategoryDetail";
import PublicationCard from "./Components/Publications/PublicationCard";
import PublicationDetails from "./Components/Publications/PublicationsDetail";
import About from "./Pages/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Service landing page */}
        <Route
          path="/service"
          element={<h2 className="text-center py-10">Please select a service category</h2>}
        />

        {/* Dynamic category page */}
        <Route path="/service/:category" element={<CategoryDetails />} />

        {/* Dynamic subcategory page */}
        <Route path="/service/:category/:subcategory" element={<SubcategoryDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/publications" element={<PublicationCard />} />
        <Route path="/publication/:id" element={<PublicationDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

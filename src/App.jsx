import { Route, Routes, Navigate } from "react-router"
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx"
import ContactPage from "./pages/ContactPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import FejlPage from "./pages/FejlPage.jsx";


function App() {
   return (
    <>
    <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="*" element={<FejlPage replace />} />
        </Routes>
      </main>
    
      <Footer />
    
    </>
  )

}

export default App;

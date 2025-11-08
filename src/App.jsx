import HeaderHero from "./components/HeaderHero";
import Pricing from "./components/Pricing";
import Insights from "./components/Insights";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeaderHero />
      <Pricing />
      <Insights />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

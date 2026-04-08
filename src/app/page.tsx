import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import WhatsApp from "@/components/WhatsApp";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import AppointmentCTA from "@/components/sections/AppointmentCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Stats />
      <Testimonials />
      <FAQ />
      <AppointmentCTA />
      <Footer />
      <WhatsApp />
    </main>
  );
}
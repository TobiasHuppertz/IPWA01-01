import Header from "./components/Header"
import Hero from "./components/Hero"
import ContentLayout from "./ContentLayout"
import Section1 from "./components/section1"
import Section2 from "./components/section2"
import Section3 from "./components/section3"
import Section4 from "./components/section4"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
        <Header />
        <Hero />
        <ContentLayout>
          <section id="Link1"><Section1 /></section> 
          <section id="Link2"><Section2 /></section> 
          <section id="Link3"><Section3 /></section> 
          <section id="Link4"><Section4 /></section>
        </ContentLayout>
        <Footer />
    </>
  )
}


import Header from "./components/Header"
import Hero from "./components/Hero"
import ContentLayout from "./ContentLayout"
import Philosopy from "./components/philosophy"
import Service from "./components/Service"
import Projects from "./components/Projects"
import Section4 from "./components/section4"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
        <Header />
        <Hero />
        <ContentLayout>
          <section id="Philosophie"><Philosopy /></section> 
          <section id="Service"><Service /></section> 
          <section id="Projekte"><Projects /></section> 
          <section id="Link4"><Section4 /></section>
        </ContentLayout>
        <Newsletter />
        <Footer />
    </>
  )
}


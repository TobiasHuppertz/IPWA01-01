import Header from "./components/Header"
import Hero from "./components/Hero"
import ContentLayout from "./ContentLayout"
import Philosophy from "./components/philosophy"
import Service from "./components/Service"
import Projects from "./components/Projects"
import Blog from "./components/Blog"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
        <Header />
        <Hero />
        <ContentLayout>
          <section id="Philosophie"><Philosophy /></section> 
          <section id="Service"><Service /></section> 
          <section id="Projekte"><Projects /></section> 
          <section id="Blog"><Blog /></section>
        </ContentLayout>
        <Newsletter />
        <Footer />
    </>
  )
}


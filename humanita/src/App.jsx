import Header from "./components/Header"
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
        <ContentLayout>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </ContentLayout>
        <Footer />
    </>
  )
}


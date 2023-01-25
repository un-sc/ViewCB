import Header from '../components/header'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import About from '../components/child/about'
import Footer from '../components/footer'
import JavaScriptList from '../components/import'

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Layout>
        <About />
      </Layout>
      <Footer />
      <JavaScriptList />
    </div>
  )
}

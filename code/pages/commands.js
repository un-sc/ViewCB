import Header from '../components/header'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Commands from '../components/child/commands'
import Footer from '../components/footer'
import JavaScriptList from '../components/import'

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Layout>
        <Commands />
      </Layout>
      <Footer />
      <JavaScriptList />
    </div>
  )
}

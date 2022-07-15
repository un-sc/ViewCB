import Header from '../components/header'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Commands from '../components/child/commands'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Layout>
        <Commands />
      </Layout>
      <Footer />
    </div>
  )
}

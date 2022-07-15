import Header from '../components/header'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import IndexBody from '../components/index/body'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Layout>
        <IndexBody />
      </Layout>
      <Footer />
    </div>
  )
}

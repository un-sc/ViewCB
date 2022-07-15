import Header from '../components/header'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Contribute from '../components/child/contribute'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Layout>
        <Contribute />
      </Layout>
      <Footer />
    </div>
  )
}

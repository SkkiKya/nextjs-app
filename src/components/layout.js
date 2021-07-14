
import Header from "./header"
import Footer from "./footer"

const Layout = (prop) =>
{
  return (
    <>
      <Header />
      <main>{prop.children}</main>
      <Footer />
    </>
  )
}

export default Layout

import { Product, HeroBanner, FooterBanner } from "../components"
import { client } from "../lib/client"

const Home = ({products, bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.table(bannerData[0])}
      {console.table(products[0])}
      <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Speaker of many Variations</p>
      </div>
      <div className="product-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
      <FooterBanner />
    </>
  )
}

export async function getServerSideProps(context) {

  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {products, bannerData}, // will be passed to the page component as props
  }
}

export default Home

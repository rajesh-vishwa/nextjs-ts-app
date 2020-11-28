import Link from "next/link";
import { IProduct } from "../../src/models/product";
import productData from "../../data.json";

type Props = {
  products: IProduct[];
};

function ProductList({ products }: Props) {
  console.log(products);
  console.log("productData: ", productData);
  return (
    <>
      <h1>Products List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.id} {product.name}
            <Link href="/product/[id]" as={"/product/" + product.id}>
              <a>Details</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  //const res = await fetch('https://.../posts')
  //const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products: productData.products,
    },
  };
}

export default ProductList;

import Link from "next/link";
import { IProduct } from "../../src/models/product";
import productData from "../../data.json";
import { Grid } from "../../src/components/ui";
import ProductCard from "../../src/components/product/ProductCard/ProductCard";

type Props = {
  products: IProduct[];
};

function ProductList({ products }: Props) {
  return (
    <>
      <h1>Products List</h1>
      <Grid>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            imgWidth={320}
            imgHeight={320}
          />
          //   <li key={product.id}>
          //     {product.id} {product.name}
          //     <Link href="/product/[id]" as={"/product/" + product.id}>
          //       <a>Details</a>
          //     </Link>
          //   </li>
        ))}
      </Grid>
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

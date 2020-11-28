import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { IProduct } from "../../src/models/product";
import productData from "../../data.json";

interface IProductProps {
  product: IProduct;
}

const ProductDetail = () => {
  const router = useRouter();

  const product = productData.products.find(
    (p) => String(p.id) === router.query.id
  );

  if (!product) return <>loading...</>;
  return (
    <div className="product">
      <h2 className="product__title">{product && product.name}</h2>
      <p className="product__description">{product && product.description}</p>
      {/* 
      <img src={props.product.image} alt="" className="product__image" />
      <div className="product__price-button-container">
        <div className="product__price">${props.product.price.toFixed(2)}</div>
        <button
          className="snipcart-add-item product__button"
          data-item-id={props.product.id}
          data-item-name={props.product.name}
          data-item-price={props.product.price}
          data-item-url={props.router.pathname}
          data-item-image={props.product.image}
        >
          Add to cart
        </button>
      </div> */}
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   console.log("productId ", params?.id);
//   return {
//     props: {
//       product: {
//         id: 1,
//         name: "test product " + params?.id,
//       },
//     },
//   };
// };
export default ProductDetail;

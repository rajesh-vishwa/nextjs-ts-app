import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./ProductCard.module.css";
import { IProduct } from "../../../models/product";

interface Props {
  product: IProduct;
  imgWidth: number | string;
  imgHeight: number | string;
}

const ProductCard: FC<Props> = ({ product, imgWidth, imgHeight }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className={s.imageContainer}>
        <Image
          quality="85"
          src={product.image}
          alt={product.name}
          className={s.image}
          width={imgWidth}
          height={imgHeight}
        />
      </div>
    </Link>
  );
};

export default ProductCard;

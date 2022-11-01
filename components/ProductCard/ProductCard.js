import Baseen from "../../public/Assets/Images/img.png";
import Image from "next/image";
import Button from "../button/Button";

function ProductCard({ status, name, price }) {
  return (
    <li className="card rounded-xl w-cardWidthMobile md:w-cardWidth shadow-card_shadow relative border mt-5">
      <span
        className={`${
          status === "Новинки"
            ? "bg-green-new"
            : status === "-17% скидка"
            ? "bg-red-sale"
            : status === "Pекомендуем"
            ? "bg-blue-recommend"
            : status === "Популярное"
            ? "bg-blue-recommend"
            : "bg-red-xit"
        } text-sm block z-20  w-111 text-center py-5.5 rounded-r-lg text-white absolute top-4 left-0`}
      >
        {status}
      </span>
      <Image
        className="product__image mb-4"
        src={Baseen}
        alt="baseen product image"
        width={280}
        height={220}
      />
      <div className="product__info p-2 md:p-4">
        <h3 className="product__heading text-lg font-inter font-bold m-0 mb-2 max-w-248 leading-22 ">
          {name}
        </h3>
        <span className="spanroduct__size text-base m-0 mb-2 block leading-22 text-black-black_thin">
          220х150х60см, 1662л
        </span>
        <span className="text-sm block">
          <del>1 250 000 сум</del>
        </span>
        <span className="block mb-2.5 text-black-black_light">{price}</span>
        <Button>Заказать</Button>
      </div>
    </li>
  );
}

export default ProductCard;

import Image from "next/image";
import Button from "../ComponetntModuls/button/Button";
import Baseen from "../../public/Assets/Images/img.png";

function ProductCard({ status, name, price, sale }) {
  return (
    <div className="card rounded-xl w-cardWidthMobile md:w-cardWidth shadow-card_shadow relative border mt-5">
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
        <h3 className="text-lg font-bold leading-5 mb-2">{name}</h3>
        <span className="spanroduct__size text-base m-0 mb-2 block leading-22 text-black-black_thin">
          220х150х60см, 1662л
        </span>
        <span className="text-sm block">
          {status === "Pекомендуем" ? "Pекомендуем" : sale}
        </span>
        <span className="block mb-2.5 text-black-black_light">{price}</span>
        <Button>Заказать</Button>
      </div>
    </div>
  );
}

export default ProductCard;

/* eslint-disable */
import Link from 'next/link';
const Product = ({ product }) => {
  const { name, img, keyFeatures, status, category, price, _id } = product;
  return (
    <div className="card card-compact w-80 bg-slate-50 text-black shadow-2xl">
      <Link href={`/builders/${_id}`}>
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
      </Link>
      <Link href={`/builders/${_id}`}>
        <div className="card-body">
          <h2 className="card-title"> {name} </h2>
          <div>
            <div className="flex justify-between text-xl font-semibold">
              <h2> {price}$ </h2>
              <h2>{status} </h2>
              <h2>{category} </h2>
            </div>
            <div className="flex justify-between">
              <h2> {keyFeatures?.model} </h2>
              <h2> {keyFeatures?.brand} </h2>
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;

/* eslint-disable */
'use client';
import { addValue } from '@/redux/addData/addAction';
import { useGetAllProductsQuery } from '@/redux/api';
import Link from 'next/link';
import { TbArrowBackUp } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
const buildersData = ({}) => {
  const buttonValue = useSelector(state => state.buttonData?.buttonValue);
  const dispatch = useDispatch();
  const url = `/builders?category=${buttonValue}`;
  const { data } = useGetAllProductsQuery(url);
  const handelAdd = data => {
    dispatch(addValue(data));
  };
  return (
    <div className="min-h-screen bg-white text-black pt-10">
      <Link href={'/addBuilders/builders'}>
        <button className="flex bg-slate-300 px-5 py-2 rounded-md text-red-400 font-semibold">
          <TbArrowBackUp size={20} />
          back
        </button>
      </Link>
      <div className=" mt-5 ">
        {data?.builders?.map(product => (
          <div
            key={product?._id}
            className=" sm:max-w-2xl lg:max-w-4xl mx-auto hero bg-slate-100  mt-2"
          >
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={product?.img}
                className="max-w-xs rounded-lg shadow-2xl "
              />
              <div>
                <h1 className=" sm:text-xl lg:text-2xl font-bold ">
                  {' '}
                  {product?.name}{' '}
                </h1>
                <h2 className="text-xl font-semibold">
                  category:{product?.category}{' '}
                </h2>
                <p className="">brand: {product?.keyFeatures?.brand} </p>
                <p>model: {product?.keyFeatures?.model} </p>
                <p>specification:{product?.keyFeatures?.specification} </p>
                <p>status:{product?.status} </p>
                <h1 className=" sm:text-xl lg:text-2xl font-bold">
                  {' '}
                  ${product?.price}{' '}
                </h1>
                <Link href={'/addBuilders/builders'}>
                  {' '}
                  <button
                    onClick={() => handelAdd(product)}
                    className="btn btn-primary"
                  >
                    add{' '}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default buildersData;
/* buildersData.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
}; */

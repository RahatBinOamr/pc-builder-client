/* eslint-disable */
'use client';
import Review from '@/components/Ui/products/Review';
import RootLayout from '@/components/layouts/RootLayout';

const productDetails = ({ product }) => {
  const data = product?.result;
  console.log(data);
  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:items-start py-8 px-10 bg-slate-50">
        <div className="w-full md:w-1/2">
          <img
            src={data?.img}
            alt={data?.name}
            className="rounded-lg mb-6 md:mb-0 md:mr-6"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">{data?.name}</h1>
          <p className="text-gray-600 mb-4">{data?.description}</p>
          <div className="mb-4">
            <strong>Brand:</strong> {data?.keyFeatures.brand}
            <br />
            <strong>Model:</strong> {data?.keyFeatures.model}
            <br />
            <strong>Category:</strong> {data?.category}
            <br />
            <strong>Status:</strong> {data?.status}
            <br />
            <strong>Price:</strong> ${data?.price}
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Specifications</h2>
            <ul>
              {Object?.entries(data?.keyFeatures)?.map(
                ([key, value]) =>
                  value && (
                    <li key={key}>
                      <strong>{key}:</strong> {value}
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Review id={data?._id} data={data?.reviews} />
      </div>
    </>
  );
};

export default productDetails;
productDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getServerSideProps = async context => {
  const { params } = context;

  const res = await fetch(
    `https://pc-builder-pi.vercel.app/builders/${params.id}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};

import Banner from '@/components/Ui/Banner';
import Pagination from '@/components/Ui/products/Pagination';
import Product from '@/components/Ui/products/Product';
import Footer from '@/components/shahred/Footer';
import Navbar from '@/components/shahred/Navbar';
import { useGetAllProductsQuery } from '@/redux/api';
import { useState } from 'react';
import img1 from '.././../public/assets/b1.avif';
import img2 from '.././../public/assets/b2.avif';
import img3 from '.././../public/assets/b3.avif';
import img4 from '.././../public/assets/b4.avif';
import img5 from '.././../public/assets/b5.avif';
export default function HomePage() {
  const images = [img1, img2, img3, img4, img5];
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [category, setCategory] = useState('');
  const url = `/builders?category=${category}&search=${search}&page=${currentPage}&skip=${postsPerPage}`;
  const { data: allProduct } = useGetAllProductsQuery(url);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allProduct?.builders?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const totalPages = allProduct?.builders?.length;
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <>
      <div className="bg-slate-50">
        <div className="mb-3">
          <Navbar
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <Banner images={images} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  mt-5 px-10 ">
          {currentPosts?.map(product => (
            <Product product={product} key={product?._id} />
          ))}
        </div>
        <div className=" mt-10">
          <Pagination
            totalPages={totalPages}
            paginate={paginate}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
          />
        </div>
        <div className="mt-3">
          <Footer />
        </div>
      </div>
    </>
  );
}

/* export const getServerSideProps = async () => {
  const res = await fetch(`https://pc-builder-pi.vercel.app/builders`);
  const data = await res.json();

  return {
    props: {
      allProduct: data,
    },
  };
}; */

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Search from '../Ui/products/Search';
import Dropdown from './Dropdown';
const Navbar = ({ category, setCategory, search, setSearch }) => {
  const { data: session } = useSession();

  return (
    <div className="navbar px-3 bg-slate-200 text-black">
      <div className="navbar-start">
        <div className="lg:hidden">
          <Dropdown category={category} setCategory={setCategory} />
        </div>
        <div className="lg:hidden">
          <Search search={search} setSearch={setSearch} />
        </div>

        <Link href={'/'} className="btn btn-ghost normal-case text-xl">
          PC-House
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <Search search={search} setSearch={setSearch} />
      </div>
      <div className="navbar-center hidden lg:flex">
        <Dropdown category={category} setCategory={setCategory} />
      </div>

      <div className="navbar-end">
        <Link
          href={'/CreateProduct'}
          className=" hover:bg-green-300 shadow-lg p-2 rounded-md me-2"
        >
          <button>create builder</button>
        </Link>
        <Link href={'/addBuilders/builders'} className="btn me-2">
          <button>builder</button>
        </Link>
        {session?.user ? (
          <div onClick={() => signOut()} className="btn bg-red-600 me-2">
            <button> logout</button>
          </div>
        ) : (
          <Link href={'/login'} className="btn me-2">
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

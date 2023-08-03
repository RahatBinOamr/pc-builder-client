import { valueSet } from '@/redux/button/buttonAction';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  BsDeviceSsd,
  BsFillCpuFill,
  BsMotherboard,
  BsSdCard,
} from 'react-icons/bs';
import { FiMonitor } from 'react-icons/fi';
import { SiPowervirtualagents } from 'react-icons/si';
import { TbArrowBackUp } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';

const Builders = () => {
  const [buttonValue, setButtonValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const addData = useSelector(state => state?.addData?.addData);
  console.log(addData);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleButtonClick = event => {
    const value = event.target.value;
    setButtonValue(value);
    router.replace('/addBuilders/buildersData');
    dispatch(valueSet(value));

    {
      addData?.map(data =>
        data?.category === value ? setIsDisabled(!isDisabled) : isDisabled
      );

      console.log(isDisabled, value);
    }
  };

  return (
    <div className="min-h-screen px-10 bg-white ">
      <div className="flex items-center pt-10 ">
        <Link href={'/'}>
          <button className="flex bg-slate-300 px-5 py-2 rounded-md text-red-400 font-semibold">
            <TbArrowBackUp size={20} />
            back
          </button>
        </Link>
      </div>
      <div className="  max-w-4xl mx-20">
        <div className="flex justify-between mt-5 bg-gray-100 shadow-lg p-3">
          <div className="flex items-center ">
            <BsFillCpuFill size={60} className="me-3 text-black" />
            <p className="text-xl text-black font-semibold me-2"> CPU </p>
            <p className="bg-slate-200 text-black w-20 text-center rounded-sm mt-[-6]">
              required
            </p>
          </div>
          <button
            value="CPU"
            onClick={handleButtonClick}
            className={` text-white px-6 py-2  rounded-lg ${
              isDisabled
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'
            }`}
            disabled={isDisabled}
          >
            choose
          </button>
        </div>
        <div className="flex justify-between mt-5 bg-gray-100 shadow-lg p-3">
          <div className="flex items-center ">
            <BsMotherboard size={60} className="me-3 text-black" />
            <p className="text-xl text-black font-semibold me-2">
              {' '}
              Motherboard{' '}
            </p>
            <p className="bg-slate-200 text-black w-20 text-center rounded-sm mt-[-6]">
              required
            </p>
          </div>
          <button
            value="Motherboard"
            onClick={handleButtonClick}
            className={` text-white px-6 py-2  rounded-lg ${
              isDisabled
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'
            }`}
            disabled={isDisabled}
          >
            choose
          </button>
        </div>
        <div className="flex justify-between mt-5 bg-gray-100 shadow-lg p-3">
          <div className="flex items-center ">
            <BsSdCard size={60} className="me-3 text-black" />
            <p className="text-xl text-black font-semibold me-2"> RAM </p>
            <p className="bg-slate-200 text-black w-20 text-center rounded-sm mt-[-6]">
              required
            </p>
          </div>
          <button
            value="RAM"
            onClick={handleButtonClick}
            className={` text-white px-6 py-2  rounded-lg ${
              isDisabled
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'
            }`}
            disabled={isDisabled}
          >
            choose
          </button>
        </div>
        <div className="flex justify-between mt-5 bg-gray-100 shadow-lg p-3">
          <div className="flex items-center ">
            <SiPowervirtualagents size={60} className="me-3 text-black" />
            <p className="text-xl text-black font-semibold me-2">
              {' '}
              Power Supply Unit
            </p>
            <p className="bg-slate-200 text-black w-20 text-center rounded-sm mt-[-6]">
              required
            </p>
          </div>
          <button
            value="Power Supply Unit"
            onClick={handleButtonClick}
            className={` text-white px-6 py-2  rounded-lg ${
              isDisabled
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'
            }`}
            disabled={isDisabled}
          >
            choose
          </button>
        </div>
        <div className="flex justify-between mt-5 bg-gray-100 shadow-lg p-3">
          <div className="flex items-center ">
            <BsDeviceSsd size={60} className="me-3 text-black" />
            <p className="text-xl text-black font-semibold me-2"> Storage</p>
            <p className="bg-slate-200 text-black w-20 text-center rounded-sm mt-[-6]">
              required
            </p>
          </div>
          <button
            value="Storage Device"
            onClick={handleButtonClick}
            className={` text-white px-6 py-2  rounded-lg ${
              isDisabled
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'
            }`}
            disabled={isDisabled}
          >
            choose
          </button>
        </div>
        <div className="flex justify-between mt-5 bg-gray-100 shadow-lg p-3">
          <div className="flex items-center ">
            <FiMonitor size={60} className="me-3 text-black" />
            <p className="text-xl text-black font-semibold me-2"> Monitor</p>
            <p className="bg-slate-200 text-black w-20 text-center rounded-sm mt-[-6]">
              required
            </p>
          </div>
          <button
            value="Monitor"
            onClick={handleButtonClick}
            className={` text-white px-6 py-2  rounded-lg ${
              isDisabled
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'
            }`}
            disabled={isDisabled}
          >
            choose
          </button>
        </div>
      </div>
    </div>
  );
};

export default Builders;

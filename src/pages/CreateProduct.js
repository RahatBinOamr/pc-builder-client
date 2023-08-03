import RootLayout from '@/components/layouts/RootLayout';
import { useState } from 'react';

const CreateProduct = () => {
  const initialFormData = {
    name: '',
    img: '',
    category: '',
    status: 'In Stock',
    price: '',
    description: '',
    keyFeatures: {
      brand: '',
      model: '',
      specification: '',
      port: '',
      type: '',
      resolution: '',
      voltage: '',
    },
  };
  const [formData, setFormData] = useState(initialFormData);

  // Handle form input changes
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle keyFeatures input changes
  const handleKeyFeaturesChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      keyFeatures: {
        ...formData.keyFeatures,
        [name]: value,
      },
    });
  };

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    fetch('https://pc-builder-pi.vercel.app/builders/create', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(formData => {
        if (formData.status === 'success') {
          alert('product Successfully Created');
        }
      });
    console.log(formData);
    setFormData(initialFormData);
  };

  return (
    <div className="hero min-h-screen bg-slate-200 shadow-lg text-black  ">
      <form
        className="p-4  border border-gray-300 bg-slate-50 rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-end mx-auto gap-9 ">
          <div>
            <label className="block mb-1 font-semibold">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-400 text-white rounded-md"
              />
            </label>
            <label className="block mb-1 font-semibold">
              IMG URL:
              <input
                type="text"
                name="img"
                value={formData.img}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-400 text-white rounded-md"
              />
            </label>
            <br />
            <label className="block mb-1 font-semibold">
              Category:
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full p-2 border text-white border-gray-400 rounded-md"
              />
            </label>
            <br />
            <label className="block mb-1 font-semibold">
              Status:
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="w-full p-2 border text-white border-gray-400 rounded-md"
              >
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </label>
            <br />
            <label className="block mb-1 font-semibold">
              Price:
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full p-2 border text-white border-gray-400 rounded-md"
              />
            </label>
            <br />
            <label className="block mb-1 font-semibold">
              Description:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full p-2 border text-white border-gray-400 rounded-md"
              />
            </label>
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Key Features:
              <br />
              Brand:{' '}
              <input
                type="text"
                name="brand"
                value={formData.keyFeatures.brand}
                onChange={handleKeyFeaturesChange}
                className="w-full p-2 border text-white border-gray-400 rounded-md"
              />
              <br />
              Model:{' '}
              <input
                type="text"
                name="model"
                value={formData.keyFeatures.model}
                onChange={handleKeyFeaturesChange}
                className="w-full p-2 border text-white border-gray-400 rounded-md"
              />
              <br />
              Specification:{' '}
              <input
                type="text"
                name="specification"
                value={formData.keyFeatures.specification}
                onChange={handleKeyFeaturesChange}
                className="w-full p-2 border text-white border-gray-400 rounded-md"
              />
              <br />
              Port:{' '}
              <input
                type="text"
                name="port"
                value={formData.keyFeatures.port}
                onChange={handleKeyFeaturesChange}
                className="w-full p-2 border text-white border-gray-400 rounded-md"
              />
              <br />
              Type:{' '}
              <input
                type="text"
                name="type"
                value={formData.keyFeatures.type}
                onChange={handleKeyFeaturesChange}
                className="w-full p-2 border text-white border-gray-400 rounded-md"
              />
              <br />
              Resolution:{' '}
              <input
                type="text"
                name="resolution"
                value={formData.keyFeatures.resolution}
                onChange={handleKeyFeaturesChange}
                className="w-full p-2 border text-white border-gray-400 rounded-md"
              />
              <br />
              Voltage:{' '}
              <input
                type="text"
                name="voltage"
                value={formData.keyFeatures.voltage}
                onChange={handleKeyFeaturesChange}
                className="w-full p-2 border text-white border-gray-400 rounded-md"
              />
            </label>
          </div>
        </div>

        <div className="items-center text-center w-full">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
CreateProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

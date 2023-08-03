/* eslint-disable */
'use client';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Review = ({ data, id }) => {
  const [review, setReview] = useState('');
  const router = useRouter();
  const handleSubmit = event => {
    event.preventDefault();

    fetch(`https://pc-builder-pi.vercel.app/builders/review/${id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ id, reviews: review }),
    })
      .then(res => res.json())
      .then(data => console.log(data));
    router.reload();
    setReview('');
  };

  return (
    <div className=" mx-auto mt-8 px-9">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            id="bio"
            value={review}
            onChange={event => setReview(event.target.value)}
            placeholder="please comment...."
            className="w-full border rounded-md focus:ring focus:ri focus:ri text-black bg-slate-50"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      <div>
        <ul className="list-none">
          {data?.map(review => (
            <div key={review._id} className="flex space-x-4 text-black mt-4">
              <img
                alt=""
                src="https://source.unsplash.com/100x100/?portrait"
                className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
              />
              <div className="flex flex-col space-y-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-sm font-semibold"
                >
                  {review}
                </a>
                <span className="text-xs dark:text-gray-400">4 hours ago</span>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Review;

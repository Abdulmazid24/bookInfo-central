import React from 'react';
import { FaHashtag } from 'react-icons/fa';
import { PiArmchairBold } from 'react-icons/pi';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find(book => book.bookId === id);
  const {
    bookName,
    author,
    image,
    category,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = book;

  console.log(data);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="space-y-2">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="font-semibold">By: {author}</p>
          <button className="font-semibold border-2 p-2 w-full">
            {category}
          </button>
          <p className="py-6 text-gray-500 font-medium">Review : {review}</p>
          <div className="flex justify-between font-bold p-2 border-2 ">
            Tag:
            {tags.map((tag, index) => (
              <p className="flex items-center gap-1 text-green-700" key={index}>
                <FaHashtag />
                {tag}
              </p>
            ))}
          </div>
          <table>
            <tbody>
              <tr>
                <td className="text-gray-600 pr-20 font-medium">
                  Number of pages
                </td>
                <td className="font-bold">{totalPages}</td>
              </tr>
              <tr>
                <td className="text-gray-600 font-medium">Publisher</td>
                <td className="font-bold">{publisher}</td>
              </tr>
              <tr>
                <td className="text-gray-600 font-medium">
                  Year of Publishing
                </td>
                <td className="font-bold">{yearOfPublishing}</td>
              </tr>
              <tr>
                <td className="text-gray-600 font-medium">Rating</td>
                <td className="font-bold ">{rating}</td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center gap-3 font-bold">
            <button className="px-3 py-1 rounded-lg border-2">Read</button>
            <button className="px-3 py-1 rounded-lg border-2">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

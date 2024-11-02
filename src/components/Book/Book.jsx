import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  const { bookId, bookName, author, image, tags, category, rating } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card border-2 w-96 bg-lime-100 p-6 space-y-4">
        <figure className="p-10 border-b bg-lime-50 rounded-lg">
          <img
            className="w-32 h-44 shadow-2xl border-2"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="">
          <div className="text-lg font-bold flex justify-around text-violet-800 ">
            <h5>{tags[0]}</h5>
            <h5>{tags[1]}</h5>
          </div>
          <h3 className="text-xl font-semibold text-violet-950">{bookName}</h3>
          <h5 className="font-semibold">By: {author}</h5>
          <div className="flex justify-between font-medium">
            <p>{category}</p>
            <div className="flex items-center gap-1">
              <p>{rating}</p>
              <CiStar className="text-orange-400" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

import React from 'react';
import BannerImg from '../../assets/books.jpg';
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={BannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf View The List
          </h1>

          <button className="btn bg-[#23BE0A] font-bold text-lg">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

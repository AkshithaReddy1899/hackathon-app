import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import levelBasic from '../assets/icons/levelBasic.svg';

// To do

// Time

const Details = () => {
  const location = useLocation();
  const { hackathon } = location.state;
  console.log(hackathon);
  return (
    <>
      <div className="bg-[#003145] text-white px-8 md:px-36 md:py-16">
        <div className="bg-yellow-300 text-black rounded p-3 font-medium text-lg w-fit">
          <p className="px-6">
            Starts on
            {' '}
            {hackathon.item.start_date}
            {' '}
            09:00 PM (India Standard Time)
          </p>
        </div>
        <h1 className="text-3xl font-bold py-8">{hackathon.item.name}</h1>
        <p className="text-lg">{hackathon.item.description}</p>
        <p className="bg-white w-28 my-4 p-2 rounded-md text-[#003145] text-center font-semibold flex justify-center items-center">
          <img src={levelBasic} alt="Ëasy" />
          <span className="mx-1">{hackathon.item.level}</span>
        </p>
      </div>
      <div className="shadow-md md:px-36 h-20 flex justify-between items-center">
        <div className="flex justify-start items-center">
          <p className="px-4 h-8 mt-12 border-b-4 border-emerald-600 font-bold text-xl pb-8">Overview</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-24 border-2 border-green-600 bg-green-600 font-bold text-center p-1 rounded-lg mx-4 flex justify-center items-center">
            <Link to="/update-hackathon" className="text-white cursor-pointer" state={{ item: hackathon.item }}>Edit</Link>
          </div>
          <div className="w-24 border-2 border-red-600 font-bold text-center p-1 text-red-600 rounded-lg">
            <Link to="/details" state={{ id: hackathon.item.name }}>Delete</Link>
          </div>
        </div>
      </div>
      <div className="px-8 md:px-36 md:py-16 text-gray-900 leading-5">
        <p>
          ButterFiles are the adult flying stage of certain insects belonging to an order or group called Lepidoptera.
        </p>
      </div>
    </>
  );
};

export default Details;

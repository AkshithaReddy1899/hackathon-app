import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const List = () => {
  const hackathons = useSelector((state) => state.dataReducer.myChallenges);
  return (
    <div className="bg-[#003145] px-8 md:px-36 md:py-16 flex flex-col justify-center items-center md:flex-row">
      {hackathons.map((item) => (
        <div className="block w-72 h-96 m-5 rounded-lg" key={item.name}>
          <div className="">
            <img src={item.image} alt={item.name} className="w-full h-32" />
            <div className="bg-slate-50 text-center pb-6 rounded-bl-lg rounded-br-lg">
              <p className="pt-8">Status</p>
              <h1 className="text-lg my-4 font-semibold">{item.name}</h1>

              <p className="flex flex-col justify-center">
                <span>Starts in</span>
                <span className="text-xl font-bold mb-10">00 : 00 : 00</span>
              </p>
              <Link to="/details" state={{ hackathon: { item } }} className="bg-green-600 rounded-lg text-white my-2 p-2 font-bold w-80">Participate Now</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;

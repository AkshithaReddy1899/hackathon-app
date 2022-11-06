import React from 'react';
import { Link } from 'react-router-dom';
import rocket from '../assets/icons/rocket.svg';
import AI from '../assets/icons/AI-model.svg';
import data from '../assets/icons/data-scientists.svg';
import AIChallenges from '../assets/icons/AI-challenges.svg';

const Main = () => {
  console.log('Main');
  return (
    <div>
      <div className="bg-[#003145] text-slate-200 px-8 md:px-36 md:py-8">
        <div className="md:w-11/12 mx-10 flex flex-col md:flex-row justify-between items-center">
          <div className="my-12 w-full md:1/2 md:my-20 pr-24">
            <p className="text-4xl text-white md:text-5xl my-6 border-solid border-0 border-l-[8px] px-12 border-yellow-500 font-semibold leading-10">Accelerate Innovation with Global AI Challenges</p>
            <p className="py-8 px-16 leading-7 text-lg font-medium">AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</p>
            <Link to="/form" className="bg-white p-2 border rounded-md text-slate-600 mx-16">Create Challenge</Link>
          </div>
          <div className="w-full md:w-1/2">
            <img src={rocket} alt="rocket" />
          </div>
        </div>
      </div>
      <div className="bg-[#002A3B] text-white px-8 py-12 md:px-36 flex justify-around items-center">
        <div className="flex flex-row justify-center items-center border-0 md:border-r-2 md:pr-32">
          <div className="mx-4">
            <img src={AI} alt="" />
          </div>
          <p className="flex flex-col leading-5">
            <span className="text-2xl font-bold">100K+</span>
            <span className="text-base">AI model submissions</span>
          </p>
        </div>
        <div className="flex flex-row justify-center items-center border-0 md:border-r-2 md:pr-32">
          <div className="mx-4">
            <img src={data} alt="data-scientists" />
          </div>
          <p className="flex flex-col leading-5">
            <span className="text-2xl font-bold">50K+</span>
            <span className="text-base">Data scientists</span>
          </p>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="mx-4">
            <img src={AIChallenges} alt="AI_challenges" />
          </div>
          <p className="flex flex-col leading-5">
            <span className="text-2xl font-bold">100+</span>
            <span className="text-base">AI Challenges hosted</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

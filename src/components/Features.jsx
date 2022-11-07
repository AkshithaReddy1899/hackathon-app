import React from 'react';
import carbonNotebook from '../assets/icons/carbon_notebook.svg';
import vector from '../assets/icons/Vector.svg';
import robot from '../assets/icons/Robot.svg';

const Features = () => {
  const data = [
    {
      id: 0,
      name: 'Prove your skills',
      icon: carbonNotebook,
      description: 'Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.',
    },
    {
      id: 1,
      name: 'Learn from community',
      icon: vector,
      description: 'One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.',
    },
    {
      id: 2,
      name: 'Challenge yourself',
      icon: robot,
      description: 'There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.',
    },
    {
      id: 3,
      name: 'Earn recognition',
      icon: carbonNotebook,
      description: 'You will stand out from the crowd if you do well in AI challenges, it not pnly helps you shine in the community but also earns rewards.',
    },
  ];
  return (
    <div className="py-8 md:px-36 md:py-8 text-center">
      <h2 className="text-2xl font-bold text-slate-700">
        Why Participate in
        {' '}
        <span className="text-green-600">AI Challenges?</span>
      </h2>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center mx-2 my-6">
        {data.map((item) => (
          <div className="md:w-2/5 md:h-62 m-8 py-10 bg-stone-100 rounded-lg text-left px-8" key={item.id}>
            <img src={item.icon} alt={item.name} className="w-14 h-14" />
            <p className="my-4 text-lg font-bold">{item.name}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

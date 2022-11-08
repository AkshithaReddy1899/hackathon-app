/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown-simple';
import Multiselect from 'multiselect-react-dropdown';

const List = () => {
  const hackathons = useSelector((state) => state.dataReducer.myChallenges);

  const keyWords = [];
  const date = new Date().toISOString();
  const HackathonsArr = [];

  const [sortedHackathons, setSortedHackathons] = useState(hackathons);
  hackathons.forEach((item) => {
    if (item.start_date > date) {
      const newItem = { ...item };
      newItem.status = 'Upcoming';
      HackathonsArr.push(newItem);
    }
    if (item.start_date < date && item.end_date > date) {
      const newItem = { ...item };
      newItem.status = 'Active';
      HackathonsArr.push(newItem);
    }
    if (item.end_date < date) {
      const newItem = { ...item };
      newItem.status = 'Past';
      HackathonsArr.push(newItem);
    }
  });

  const filteredArr = [];

  const handleSelect = (selectedList) => {
    selectedList.forEach((item) => {
      keyWords.push(item.key);
    });

    const filteredItem = HackathonsArr.filter((item) => keyWords.includes(item.status) || keyWords.includes(item.level));
    filteredArr.push(filteredItem);
    if (filteredArr[0].length >= 1) {
      setSortedHackathons(filteredArr[0]);
    } else {
      setSortedHackathons(hackathons);
    }
  };

  const StartsIn = (startDate) => {
    const { date } = startDate;
    return (
      <>
        <span>Starts in</span>
        <Countdown targetDate={date} formatType="DD_HH_MM_SS" />
      </>
    );
  };

  const EndsIn = (endDate) => {
    const { date } = endDate;
    return (
      <>
        <span>Ends in</span>
        <Countdown targetDate={date} formatType="DD_HH_MM_SS" />
      </>
    );
  };

  const EndedOn = (endDate) => {
    const { date } = endDate;
    const dateFormat = new Date(date);
    return (
      <>
        <span>Ended on</span>
        <span className="font-bold">
          {dateFormat.getDate()}
          /
          {dateFormat.getMonth()}
          /
          {dateFormat.getFullYear()}
          {' '}
          {dateFormat.getHours()}
          :
          {dateFormat.getMinutes()}
        </span>
      </>
    );
  };

  const Timer = ({ startDate, endDate }) => {
    if (startDate > date) {
      return <StartsIn date={`${startDate}:00.859Z`} />;
    }
    if (startDate < date && endDate > date) {
      return <EndsIn date={`${endDate}:00.859Z`} />;
    }
    if (endDate < date) {
      return <EndedOn date={`${endDate}:00.859Z`} />;
    }
  };

  const Status = ({ startDate, endDate }) => {
    if (startDate > date) {
      return <p className="bg-yellow-100 w-full text-gray-700 rounded-md">Upcoming</p>;
    } if (startDate < date && endDate > date) {
      return <p className="bg-emerald-300 text-emerald-900 w-full rounded-md">Active</p>;
    } if (endDate < date) {
      return <p className="bg-red-100 text-gray-700 w-full rounded-md">Past</p>;
    }
  };

  return (
    <>
      <div className="bg-[#002A3B] text-white px-8 md:px-36 md:py-8 text-center">
        <h1 className="py-10 text-2xl font-bold">Explore Challenges</h1>
        <div className="flex flex-col justify-center items-center">
          <input type="text" className="" />
          <Multiselect
            className="bg-white w-full border text-black rounded-md m-2"
            displayValue="key"
            groupBy="cat"
            onSelect={handleSelect}
            onRemove={handleSelect}
            options={[
              {
                cat: 'Status',
                key: 'Active',
              },
              {
                cat: 'Status',
                key: 'Upcoming',
              },
              {
                cat: 'Status',
                key: 'Past',
              },
              {
                cat: 'Level',
                key: 'Easy',
              },
              {
                cat: 'Level',
                key: 'Medium',
              },
              {
                cat: 'Level',
                key: 'Hard',
              },
            ]}
            showCheckbox
          />

        </div>
      </div>
      <div className="bg-[#003145] px-8 md:px-36 md:py-16 flex flex-col flex-wrap justify-center items-center md:flex-row">
        {sortedHackathons.map((item) => (
          <div className="block w-72 h-[400px] bg-slate-600 m-5 rounded-lg" key={item.id}>
            <div className="">
              <img src={item.image} alt={item.name} className="w-full h-32" />
              <div className="bg-slate-50 h-[270px] text-center pb-6 rounded-bl-lg rounded-br-lg">
                <div className="pt-6 w-28 text-center mx-auto">
                  <Status startDate={item.start_date} endDate={item.end_date} />
                </div>
                <h1 className="text-md my-4 font-bold mx-4">{item.name}</h1>
                <div className="flex flex-col mb-6 mx-2 justify-center">
                  <Timer startDate={item.start_date} endDate={item.end_date} />
                </div>
                <Link to="/details" state={{ hackathon: { item } }} className="bg-green-600 rounded-lg text-white my-2 p-2 font-bold w-80">Participate Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;

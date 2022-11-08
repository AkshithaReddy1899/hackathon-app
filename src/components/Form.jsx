/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewHackathon, updateHackathon } from '../feature/DataSlice';

/*
const date = new Date().toISOString().slice(0, 10);
        console.log(date);
        console.log(values.start_date);
        console.log(values.start_date < date);
*/

const Form = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fieldEmpty = () => toast('Please fill in all the fields');
  const inputDateError = () => toast('Please check your dates again.');

  const [values, setValues] = useState(data);
  const [imageUrl, SetImageUrl] = useState('https://i.ibb.co/7r5yL5y/773900d05332.png');
  const state = useSelector((state) => state.dataReducer.myChallenges);

  const handleImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const rf = new FileReader();
    rf.readAsDataURL(file);
    rf.onloadend = (event) => {
      const body = new FormData();
      body.append('image', event.target.result.split(',').pop());
      body.append('name', file);
      fetch('https://api.imgbb.com/1/upload?key=0935e90046a4fd2dd29c82758cd22b7a', {
        method: 'POST',
        body,
      })
        .then((res) => res.json())
        .then((data) => {
          SetImageUrl(data.data.image.url);
        });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmpty = Object.values(values).some((x) => x === null || x === '');

    if (!isEmpty) {
      if (values.start_date <= values.end_date) {
        values.image = imageUrl;
        const itemExists = state.some(({ id }) => id === values.id);
        if (!itemExists) {
          dispatch(addNewHackathon(values));
        } else {
          dispatch(updateHackathon(values));
        }
        navigate('/');
      } else {
        inputDateError();
      }
    } else {
      fieldEmpty();
    }
  };

  const handleValues = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <div className="bg-slate-200 py-4">
        <h1>Challenge Details</h1>
      </div>
      <form className="w-full md:w-1/3 px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">
            <span className="text-gray-600 text-sm font-bold">Challenge Name</span>
            <input
              name="name"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={values.name}
              onChange={(e) => handleValues(e)}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="start_date">
            <span className="text-gray-600 text-sm font-bold">Start Date</span>
            <input
              name="start_date"
              type="date"
              className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={values.start_date}
              onChange={(e) => handleValues(e)}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="end_date">
            <span className="text-gray-600 text-sm font-bold">End Date</span>
            <input
              name="end_date"
              type="date"
              className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={values.end_date}
              onChange={(e) => handleValues(e)}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="description">
            <span className="text-gray-600 text-sm font-bold">Description</span>
            <input
              name="description"
              type="text-area"
              className="shadow cursor-pointer appearance-none border rounded w-full h-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={values.description}
              onChange={(e) => handleValues(e)}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="image">
            <span className="text-gray-600 text-sm font-bold">Image</span>
            <input
              type="file"
              name="image"
              id="input_img"
              className="cursor-pointer appearance-none w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              accept="image/*"
              onChange={(e) => handleImage(e)}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="level">
            <div className="inline-block relative w-64">
              <select
                className="block cursor-pointer appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                value={values.level}
                onChange={(e) => handleValues(e)}
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;

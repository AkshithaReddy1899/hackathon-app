import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewHackathon } from '../feature/DataSlice';

const dispatch = useDispatch();
const navigate = useNavigate();
const fieldEmpty = () => toast('Please fill in all the fields');
const inputDateError = () => toast('Please check your dates again.');

export const handleImage = (e) => {
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
      .then((data) => data.data.image.url);
  };
};

export const handleSubmit = (e, values) => {
  e.preventDefault();

  const isEmpty = Object.values(values).some((x) => x === null || x === '');

  if (!isEmpty) {
    if (values.start_date <= values.end_date) {
      dispatch(addNewHackathon(values));
      navigate('/');
    } else {
      inputDateError();
    }
  } else {
    fieldEmpty();
  }
};

export const handleValues = (e, setValues, values) => {
  const { name, value } = e.target;
  setValues({
    ...values,
    [name]: value,
  });
};

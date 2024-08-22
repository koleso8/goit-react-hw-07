import clsx from 'clsx';
import { FaHeart, FaRegHeart, FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';

import s from './Contact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { onEdit } from '../../redux/editSlice';
import { addFavorite, deleteFavorite } from '../../redux/favoriteSlice';
import { selectFavorite } from '../../redux/selecrors';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectFavorite).some(item => item.id === id);
  const card = { id, name, number };

  return (
    <>
      <button
        className={clsx(s.edit)}
        onClick={() => {
          dispatch(onEdit(card));
        }}
      >
        <FaPencilAlt />
      </button>

      {isFavorite ? (
        <button
          className={clsx(s.favorite)}
          onClick={() => {
            dispatch(deleteFavorite(card));
          }}
        >
          <FaHeart />
        </button>
      ) : (
        <button
          className={clsx(s.favorite)}
          onClick={() => {
            dispatch(addFavorite(card));
          }}
        >
          <FaRegHeart />
        </button>
      )}

      <p className={clsx(s.card__title)}>
        <FaUser className={clsx(s.iconUser)} />
        {name}
      </p>
      <p className={clsx(s.card__subtitle)}>
        <FaPhoneAlt className={clsx(s.iconNumber)} />
        {number}
      </p>
      <button
        className={clsx(s.signUp)}
        type="button"
        onClick={() => {
          dispatch(deleteFavorite(card));
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;

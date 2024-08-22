import clsx from 'clsx';
import { FaSearch } from 'react-icons/fa';
import { useId } from 'react';
import { selectNameFilter } from '../../redux/selecrors';
import { changeFilter } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import s from '../ContactForm/ContactForm.module.css';

export const SearchBox = () => {
  const searchInputId = useId();
  const search = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  return (
    <div className={clsx(s.box)}>
      <label htmlFor={searchInputId}>
        Find contact by name
        <FaSearch className={clsx(s.iconSearch)} />
      </label>
      <input
        placeholder="search by name"
        type="text"
        name="search"
        id={searchInputId}
        value={search}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
      <button
        className={clsx(s.oauthButton)}
        type="reset"
        onClick={() => dispatch(changeFilter(''))}
      >
        reset
      </button>
    </div>
  );
};

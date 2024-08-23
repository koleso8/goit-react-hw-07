import { useDispatch, useSelector } from 'react-redux';
import s from './Toggle.module.css';
import { useEffect } from 'react';
import { changeIsFavorite } from '../redux/filtersSlice';
import { selectCountFavoriteMemo } from '../redux/selecrors';

const Toggle = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCountFavoriteMemo);

  useEffect(() => {
    // if (isFavorite) document.querySelector('#fav').checked = true;
  });

  return (
    <div className={s.box}>
      <p>Favorite</p>
      <label htmlFor="fav" className={s.switch}>
        <input
          id="fav"
          name="fav"
          className={s.toggle}
          type="checkbox"
          onChange={() => dispatch(changeIsFavorite())}
        />
        <span className={s.slider}></span>
        <span className={s.card_side}></span>
      </label>
      <p>{count}</p>
    </div>
  );
};

export default Toggle;

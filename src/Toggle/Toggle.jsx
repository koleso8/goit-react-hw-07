import { useDispatch, useSelector } from 'react-redux';
import { chengeIsFavorite } from '../../redux/favoriteSlice';
import { selectIsFavorite } from '../../redux/selecrors';
import s from './Toggle.module.css';
import { useEffect } from 'react';

const Toggle = () => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite);

  useEffect(() => {
    if (isFavorite) document.querySelector('#fav').checked = true;
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
          onChange={() => dispatch(chengeIsFavorite())}
        />
        <span className={s.slider}></span>
        <span className={s.card_side}></span>
      </label>
    </div>
  );
};

export default Toggle;

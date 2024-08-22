import clsx from 'clsx';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/selecrors';

export const ContactList = ({ contacts }) => {
  const filter = useSelector(selectNameFilter);

  return (
    <ul className={clsx(s.list)}>
      {contacts
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <li key={id} className={clsx(s.card)}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
    </ul>
  );
};

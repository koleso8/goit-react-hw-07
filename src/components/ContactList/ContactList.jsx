import clsx from 'clsx';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <ul className={clsx(s.list)}>
      {contacts.map(({ id, name, number, favorite }) => (
        <li key={id} className={clsx(s.card)}>
          <Contact id={id} name={name} number={number} favorite={favorite} />
        </li>
      ))}
    </ul>
  );
};

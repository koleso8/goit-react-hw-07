import './App.css';
import { ContactList, ChengeForm, SearchBox, ContactForm } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectEdit,
  selectFavorite,
  selectIsFavorite,
} from './redux/selecrors';
import Toggle from './components/Toggle/Toggle';
import { useEffect } from 'react';
import { fetchContactsThunk } from './redux/contactsOps';

const App = () => {
  const dispatch = useDispatch();

  const isEdit = useSelector(selectEdit);
  const isFavorite = useSelector(selectIsFavorite);
  const contacts = useSelector(selectContacts);
  const favorite = useSelector(selectFavorite);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <h1 className="title">Phonebook</h1>
      <section className="tools">
        {isEdit ? <ChengeForm /> : <ContactForm />}
        <div className="util">
          <SearchBox />
          <Toggle />
        </div>
      </section>
      <ContactList contacts={isFavorite ? favorite : contacts} />
    </div>
  );
};

export default App;

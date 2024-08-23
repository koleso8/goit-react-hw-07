import { ContactList, ChengeForm, SearchBox, ContactForm } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactsFilteredMemo,
  selectCurrent,
  selectIsError,
  selectIsLoading,
} from './redux/selecrors';
import { errorMessage } from './components/errorMessage';
import { useEffect } from 'react';
import { fetchContactsThunk } from './redux/contactsOps';
import Loader from './components/Loader/Loader';
import './App.css';
import Toggle from './Toggle/Toggle';

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContactsFilteredMemo);
  const current = useSelector(selectCurrent);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div className="wrapper">
      {isLoading && <Loader />}
      {isError && errorMessage(isError)}
      <h1 className="title">Phonebook</h1>
      <section className="tools">
        {current ? <ChengeForm /> : <ContactForm />}
        <div className="util">
          <SearchBox />
          <Toggle />
        </div>
      </section>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;

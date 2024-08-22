import './App.css';
import { ContactList, ChengeForm, SearchBox, ContactForm } from 'components';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectEdit,
  selectFavorite,
  selectIsFavorite,
} from './redux/selecrors';
import Toggle from './components/Toggle/Toggle';

const App = () => {
  const isEdit = useSelector(selectEdit);
  const isFavorite = useSelector(selectIsFavorite);
  const contacts = useSelector(selectContacts);
  const favorite = useSelector(selectFavorite);

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

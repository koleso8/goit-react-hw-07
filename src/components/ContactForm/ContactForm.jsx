import clsx from 'clsx';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useId } from 'react';
import { contactSchema } from '../../helpers/contactSchema';
import s from './ContactForm.module.css';
import { FaPhone, FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addContactsThunk } from '../../redux/contactsOps';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContactsThunk(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={clsx(s.form)}>
        <label htmlFor={nameFieldId}>
          Name <FaUser className={clsx(s.icon)} />
        </label>
        <Field
          type="text"
          name="name"
          id={nameFieldId}
          placeholder={'enter name'}
        />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberFieldId}>
          Number <FaPhone className={clsx(s.iconAlt)} />
        </label>

        <Field
          type="tel"
          name="number"
          id={numberFieldId}
          placeholder={'enter number'}
        />
        <ErrorMessage name="number" component="p" />

        <button className={clsx(s.oauthButton)} type="submit">
          add contact
        </button>
        <button className={clsx(s.oauthButton)} type="reset">
          reset
        </button>
      </Form>
    </Formik>
  );
};

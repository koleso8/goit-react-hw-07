import clsx from 'clsx';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import s from '../ContactForm/ContactForm.module.css';
import { FaPhone, FaUser } from 'react-icons/fa';
import { contactSchema } from '../../helpers/contactSchema';
import { cancelEdit } from '../../redux/editSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrent } from '../../redux/selecrors';
import { editContactsThunk } from '../../redux/contactsOps';

export const ChengeForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  const onSubmit = (value, action) => {
    dispatch(editContactsThunk(value));
    dispatch(cancelEdit());
    action.resetForm();
  };

  const initialValues = useSelector(selectCurrent);

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={onSubmit}
    >
      <Form className={clsx(s.form, s.change)} id="chengeForm">
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
          Edit
        </button>
        <button
          className={clsx(s.oauthButton)}
          type="button"
          onClick={() => dispatch(cancelEdit())}
        >
          Cancel
        </button>
      </Form>
    </Formik>
  );
};

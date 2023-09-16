// ContactPage.jsx
import React from 'react';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

export default function ContactPage() {
  return (
    <div>
      <h2>Контакты</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

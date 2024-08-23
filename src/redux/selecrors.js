import { createSelector } from '@reduxjs/toolkit';

export const selectIsError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.loading;
export const selectContacts = state => state.contacts.items;

export const selectFavoriteFilter = state => state.filters.isFavorite;
export const selectNameFilter = state => state.filters.name;

export const selectCurrent = state => state.editing.current;

export const selectContactsFilteredMemo = createSelector(
  [selectContacts, selectNameFilter, selectFavoriteFilter],
  (contacts, filter, isFavorite) => {
    let filtered;
    if (isFavorite) {
      filtered = contacts.filter(item => item.favorite === isFavorite);
    } else {
      filtered = contacts;
    }

    return filtered.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectCountFavoriteMemo = createSelector(
  [selectContacts],
  contact => {
    return contact.reduce((acc, curr) => (curr.favorite ? acc + 1 : acc), 0);
  }
);

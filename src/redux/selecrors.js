export const selectIsError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.loading;

export const selectContacts = state => state.contacts.items;

export const selectNameFilter = state => state.filters.name;

export const selectCurrent = state => state.editing.current;

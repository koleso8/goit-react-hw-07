export const selectContacts = state => state.contacts.items;
export const selectNameFilter = state => state.contacts.name;
export const selectCurrent = state => state.contacts.current;
export const selectEdit = state => state.contacts.isEdit;

export const selectFavorite = state => state.favorite.favorite;
export const selectIsFavorite = state => state.favorite.isFavorite;

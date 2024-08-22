export const selectContacts = state => state.contacts.items;

export const selectNameFilter = state => state.filters.name;

export const selectCurrent = state => state.editing.current;

export const selectFavorite = state => state.favorite.favorite;
export const selectIsFavorite = state => state.favorite.isFavorite;

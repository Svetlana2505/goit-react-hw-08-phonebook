export const selectToken = state => state.auth.token;
export const selectName = state => state.auth.user.name;
export const selectisFetchCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
export const selectIsLoading = state => state.auth.isLoading;
export const selectError = state => state.auth.error;

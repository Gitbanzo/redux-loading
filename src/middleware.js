import * as Actions from './actions';

export default store => next => (action) => {
  if(!store.getState().loading) {
    return next(action);
  }

  if(store.getState().loading.isLoading) {
    next(Actions.end());
  }
  return next(action);
};

import * as types from './types';

const initialState = {
   isLoading: false
};

const loading = (state = initialState, action) => {
   switch (action.type) {
      case types.LOADING_START:
         return {
            isLoading: true
         };
      case types.LOADING_END:
         return {
            isLoading: false
         };
      default:
         return state;
   }
};

export default loading;

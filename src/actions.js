import * as types from './types';

export const start = () => {
   return {
      type: types.LOADING_START
   };
};

export const end = () => {
   return {
      type: types.LOADING_END
   };
};

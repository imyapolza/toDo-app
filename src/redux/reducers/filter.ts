import { FilterAction, FilterActionTypes } from '../types/filter';

const filter = (state = '', action: FilterAction) => {
  switch (action.type) {
    case FilterActionTypes.SET_SORT:
      return action.payload;

    default:
      return state;
  }
};

export default filter;

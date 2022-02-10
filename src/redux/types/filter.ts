export enum FilterActionTypes {
  SET_SORT = 'SET_SORT',
}
interface RemoveFilterAction {
  type: FilterActionTypes.SET_SORT;
  payload: any[];
}

export type FilterAction = RemoveFilterAction;

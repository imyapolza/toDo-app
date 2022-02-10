import * as TasksActionCreators from './tasks';
import * as FilterActionCreators from './filter';

const exportedObject = {
  ...TasksActionCreators,
  ...FilterActionCreators,
};

export default exportedObject;

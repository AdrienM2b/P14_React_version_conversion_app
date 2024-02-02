import configureStore from 'react-redux';
import employeeReducer from './employeeSlice';

export default configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

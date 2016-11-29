// @flow

/**
 * The reducer classes are the methods within Redux which will performed the required actions. This will be done according to some type checking.
 * The types are received from the actions.
 * See the implementing classes for the actual methods, e.g. (type:CLOSE_NAVIGATIONBAR-> return false) in NavigationBar.
 *
 * If more reducers are added, also add them to this class in the combineReducers array.
 */

import { combineReducers } from 'redux'
import reducer from './reducerGeneral'

const App = combineReducers({
  reducer
});

export default App

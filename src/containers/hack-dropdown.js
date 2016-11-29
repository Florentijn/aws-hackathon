
import { connect } from 'react-redux';
import { selectTableVariable } from '../actions/vsp';
import Dropdown from '../components/charts/hack-table-dropdown';
import type { State } from "./../types/state";
import type { Dispatch } from '../types/actions';

const mapStateToProps = ({reducer}: State) => {
  console.log('gamgam');
  console.log(reducer);

  return {
      value: reducer.selectedVariable,
      variables: reducer.variables
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    selectTableVariable: (variable) => dispatch(selectTableVariable(variable))
});

const connector  = connect(mapStateToProps, mapDispatchToProps);
export default connector(Dropdown);

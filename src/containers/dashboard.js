// @flow
/**
 * Created by Florentijn Hogerwerf on 14/10/16.
 */

import { connect } from 'react-redux';

import Dashboard from '../components/containerComponents/dataLoader';
import { fetchData } from '../actions/vsp';
import type { State } from "./../types/state";
import type { Dispatch } from "./../types/actions";

const mapStateToProps = ({reducer}: State) => ({
    isFetching: reducer.isFetching,
    isData: reducer.data ? true : false
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchData: () => dispatch(fetchData())
});


const connector  = connect(mapStateToProps, mapDispatchToProps);

export default connector(Dashboard);

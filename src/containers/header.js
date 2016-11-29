
import { connect } from 'react-redux';
import { fetchData } from '../actions/vsp';
import Header from '../components/header/header';
import type { State } from "./../types/state";
import type { Dispatch } from '../types/actions';

const mapStateToProps = ({navbar}: State) => ({
    open: navbar
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchData: () => dispatch(fetchData())
});

const connector  = connect(mapStateToProps, mapDispatchToProps);
export default connector(Header);

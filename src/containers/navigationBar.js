// @flow
/**
 * Created by Joshua Scheidt on 19-10-2016.
 */

/**
 * The container components for the Redux part of the application receive their states from the 'index.js' from the types folder.
 * How it works:
 * In the const mapStateToProps, we take the property open from NavigationBar and connect it with the state navigationBar from the State.navigationBar from the index.js.
 * Redux can find the connection to the property because of the connector(NavigationBar).
 *
 * In mapDispatchToProps, we take the specific actions belonging to the class of NavigationBar, in this case closeNavigationBar, and connect it with the corresponding dispatch function.
 *
 * In the original component, also make a connection to the method imported here as an action. Add them in the props as "closeNavigationBar: () => void".
 *
 * When using the components, do not use the original component which are implemented in these containers, but use these container components instead!
 */

import { connect } from 'react-redux';
import { closeNavigationBar } from '../actions/navbar';
import NavigationBar from '../components/header/navigationBar';

import type { State } from "./../types/state";
import type { Dispatch } from '../types/actions';

/**
 * Maps the states from 'types' to the correct properties in NavigationBar.
 * @param navbar the state 'navigationBar' from 'types'
 *
 * @author Joshua Scheidt
 * @author Jim Bemelen
 */
const mapStateToProps = ({navbar}: State) => ({
    open: navbar
});

/**
 * Maps the dispatch methods to the correct actions in Actions.
 * @param dispatch the dispatched method.
 *
 * @author Joshua Scheidt
 * @author Jim Bemelen
 */
const mapDispatchToProps = (dispatch: Dispatch) => ({
    closeNavigationBar: () => dispatch(closeNavigationBar())
});

/**
 * Connector object which connects the NavigationBar to the methods defined above.
 * Connection is created in the export line.
 *
 * @author Joshua Scheidt
 * @author Jim Bemelen
 */
const connector  = connect(mapStateToProps, mapDispatchToProps);

export default connector(NavigationBar);
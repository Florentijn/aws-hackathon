// @flow
/**
 * Created by Florentijn Hogerwerf, Jim Bemelen on 24/10/16.
 */

import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const style = {
    container: {
        height: "100%",
        width: "100%",
    },
    loading: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        position: "absolute"
    }
};

type PropType = {
    /**
     * The children, or the dashboard components to render.
     */
    children?: Element<*>,

    /**
     * Boolean indicating whether to render a loading indocator or not.
     */
    isFetching: boolean,

    /**
     * Boolean indicating whether there exists data in the store to render. If so, render the dashboard components. Otherwise, render nothing.
     */
    isData: boolean,

    /**
     * Method that dispatches an action to fetch the dashboard data.
     */
    fetchData: () => void
}


/**
 * A component that renders its child components or a loading indicator.
 */
export default class DataLoader extends Component {

    props: PropType;

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        let {children, isFetching, isData} = this.props;

        if (isFetching) {
            return (
                <div style={style.loading}>
                    <CircularProgress />
                </div>
            );
        }
        if (!isData)
            return (<div/>);
        else
            return (
                <div style={style.container}>
                    {children}
                </div>
            )
    }
}








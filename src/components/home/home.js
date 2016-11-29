/**
 * Created by Florentijn Hogerwerf on 19/09/16.
 */


import React from 'react';

import Header from '../../containers/header';
import Dashboard from '../../containers/dashboard';
import SelectionBox from '../../components/charts/hack-selection-box';
import StatisticsTable from '../../components/charts/hack-table';
import StackedbarChart from '../../components/charts/hack-column-chart';



const styles = {
    gridRowContainer: {
        textAlign: "center",
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    cellContainerHeader: {
        height: "180px",
        border: "1px solid rgb(235, 235, 235)",
        margin: "-1px", //Used to offset the border
        //The "width: 0" makes sure that the charts of recharts can be used in combination with flexbox.
        // This looks like a hacky solution.
        // The following link gives the issue where we found this solution: https://github.com/recharts/recharts/issues/172
        width: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    cellContainer: {
        height: "360px",
        border: "1px solid rgb(235, 235, 235)",
        margin: "-1px", //Used to offset the border
        //The "width: 0" makes sure that the charts of recharts can be used in combination with flexbox.
        // This looks like a hacky solution.
        // The following link gives the issue where we found this solution: https://github.com/recharts/recharts/issues/172
        width: 0
    }
};

export default () => {
    return (
        <div>
            <Header />
            <Dashboard>
                <div style={{paddingTop: 65, ...styles.gridRowContainer}}>
                    <div style={{flex: 2, ...styles.cellContainerHeader}}>
                        <strong>Get insights on individual variables: </strong><br/><br/>

                        Select a variable, and explore the table showing key statistics.
                    </div>
                </div>
                <div style={styles.gridRowContainer}>
                    <div style={{flex: 2, paddingLeft: 40, paddingRight: 40, ...styles.cellContainer}}>
                        <StatisticsTable title="Explore Individual Variables"/>
                    </div>
                </div>
                <div style={{paddingTop: 65, ...styles.gridRowContainer}}>
                    <div style={{flex: 2, ...styles.cellContainerHeader}}>
                        <strong>Get data insights using the following simple procedure: </strong><br/><br/>
                        Step 1: Select one or more regions below. <br/>
                        Step 2: Select the variales that you would like to show on the screen. <br/>
                        Step 3: Hit run, to see your first round of results. <br/>

                    </div>
                </div>
                <div style={styles.gridRowContainer}>
                    <div style={{flex: 1, ...styles.cellContainer}}>

                    </div>
                    <div style={{flex: 2, ...styles.cellContainer}}>
                        <StackedbarChart title="Insights"/>
                    </div>
                    <div style={{flex: 1, ...styles.cellContainer}}>
                        <SelectionBox title="Select variables to display"/>
                    </div>
                </div>
                <div style={{paddingTop: 65, ...styles.gridRowContainer}}>
                    <div style={{flex: 2, ...styles.cellContainerHeader}}>
                        <strong>Find Correlations: </strong><br/><br/>
                        Select two variales that can be combined, and hit run. <br/>
                    </div>
                </div>
                <div style={styles.gridRowContainer}>
                    <div style={{flex: 2, ...styles.cellContainer}}>
                        <StackedbarChart title="Insights"/>
                    </div>
                    <div style={{flex: 2, ...styles.cellContainer}}>
                        <SelectionBox title="Select variables to display"/>
                    </div>
                </div>
            </Dashboard>
        </div>
    );
}

// @flow

/**
 * Created by Flo
 */

import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {colorArray} from "../../styling/index";
import TitleContainer from '../containerComponents/titleContainer';
import numberFormatter from '../../helper/numberFormatter';
import type {ValueType} from '../../helper/numberFormatter';


import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';


type PropType = {
    title: string
}


/**
 * The KC line chart.
 */
export default (props: PropType) => {

    let {title} = props;

    let x, y;
    if (title.indexOf('X') > -1)
    {
        x = true;
        y = false;
    }
    else {
        x = false;
        y = true;
    }

    return (
        <TitleContainer title={title}>
            <ResponsiveContainer>
            <List>
                <Subheader>Variables</Subheader>

                <ListItem
                  leftCheckbox={<Checkbox checked={x} />}
                  primaryText="Corn Yield"
                />
                <ListItem
                  leftCheckbox={<Checkbox />}
                  primaryText="Fertiliser"
                />
                <ListItem
                  leftCheckbox={<Checkbox />}
                  primaryText="Pesticide"
                />
                <ListItem
                  leftCheckbox={<Checkbox />}
                  primaryText="Area Size (Hectare)"
                />
                <ListItem
                  leftCheckbox={<Checkbox />}
                  primaryText="Education"
                />
                <ListItem
                  leftCheckbox={<Checkbox />}
                  primaryText="Nutrition"
                />
                <ListItem
                  leftCheckbox={<Checkbox checked={y}/>}
                  primaryText="Soil Composition"
                />
            </List>
            </ResponsiveContainer>
        </TitleContainer>
    );
}

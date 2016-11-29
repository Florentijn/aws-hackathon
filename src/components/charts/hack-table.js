// @flow

/**
 * Created by Flo
 */

import React, {Component} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {colorArray} from "../../styling/index";
import TitleContainer from '../containerComponents/titleContainer';
import numberFormatter from '../../helper/numberFormatter';
import type {ValueType} from '../../helper/numberFormatter';


import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import MssaTableNut from './hack-table-mssa-nutrition';
import MssaTableCorn from './hack-table-mssa-corn';

type PropType = {
    title: string
}


/**
 * The KC line chart.
 */

export default class TableAWS extends Component {


  state = {
      value: "Corn Yield",
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {

      let {title} = this.props;

      let component;

      if (this.state.value === "Nutrition")
        component = (<MssaTableNut/>)
      else
        component = (<MssaTableCorn/>)

      return (
        <TitleContainer title={title}>

            <div style={{display: 'flex', justifyContent: 'center'}}>
              <span style={{paddingTop: 14}}>
                <strong>Select Variable</strong>
              </span>
              <SelectField
                value={this.state.value}
                onChange={this.handleChange}
              >
                  <MenuItem value={"Corn Yield"} primaryText="Crop Yield" />
                  <MenuItem value={"Fertiliser"} primaryText="Fertiliser" />
                  <MenuItem value={"Pesticide"} primaryText="Pesticide" />
                  <MenuItem value={"Area Size (Hectare)"} primaryText="Area Size (Hectare)" />
                  <MenuItem value={"Education"} primaryText="Education" />
                  <MenuItem value={"Number of Farm Fields"} primaryText="Number of Farm Fields" />
                  <MenuItem value={"Nutrition"} primaryText="Nutrition" />
                  <MenuItem value={"Soil Composition"} primaryText="Soil Composition" />
              </SelectField>

            </div>

            {component}

        </TitleContainer>

      )
    }
}

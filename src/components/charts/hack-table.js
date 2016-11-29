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

import MssaTable from './hack-table-mssa-pure';

type PropType = {
    title: string
}


/**
 * The KC line chart.
 */

export default class TableAWS extends Component {


  state = {
      value: "Fertiliser",
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {

      let {title} = this.props;

      return (
        <TitleContainer title={title}>

          <MssaTable/>

          <div>
            <SelectField
              value={this.state.value}
              onChange={this.handleChange}
            >
            <MenuItem value={"Fertiliser"} primaryText="Fertiliser" />
            <MenuItem value={"Crop Yield"} primaryText="Crop Yield" />
            <MenuItem value={"Pesticide"} primaryText="Pesticide" />
            <MenuItem value={"Area Size (Hectare)"} primaryText="Area Size (Hectare)" />
            <MenuItem value={"Education"} primaryText="Education" />
            <MenuItem value={"Number of Farm Fields"} primaryText="Number of Farm Fields" />
            <MenuItem value={"Nutrition"} primaryText="Nutrition" />
            <MenuItem value={"Soil Composition"} primaryText="Soil Composition" />

            </SelectField>
          </div>
        </TitleContainer>

      )
    }
}

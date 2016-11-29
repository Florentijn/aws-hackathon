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

type PropType = {
    title: string
}
/**
 * The KC line chart.
 */



 let variables = [
     "Fertiliser",
     "Crop Yield",
     "Pesticide",
     "Area Size (Hectare)",
     "Education",
     "Number of Farm Fields",
     "Nutrition",
     "Soil Composition",
 ]


export default class DropDown extends Component {

  _handleChange = (event, index, value) => {
    this.props.selectTableVariable(value);
  }

  render() {

      console.log("props");
      console.log(this.props);
      let {title, value} = this.props;


      return (
          <div>
            <SelectField
              value={value}
              onChange={this._handleChange}
            >
              <MenuItem value={"Fertiliser"} primaryText="Fertiliser" />
              <MenuItem value={"Crop Yield"} primaryText="Crop Yield" />
              <MenuItem value={3} primaryText="Variable 3" />
              <MenuItem value={3} primaryText="Variable X" />
            </SelectField>
          </div>
      )
    }
}

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

type PropType = {
    title: string
}


const mmsa = [
  {
    "count": 23,
    "std": 225.683853168603,
    "min": 450,
    "country": "GHA",
    "sum": 20430,
    "max": 1580,
    "avg": 888.2608695652174,
    "landscape": "L06"
  },
  {
    "count": 4,
    "std": 567.890834580027,
    "min": 300,
    "country": "RWA",
    "sum": 3700,
    "max": 1500,
    "avg": 925,
    "landscape": "L01"
  },
  {
    "count": 3,
    "std": 300,
    "min": 500,
    "country": "RWA",
    "sum": 2400,
    "max": 1100,
    "avg": 800,
    "landscape": "L04"
  },
  {
    "count": 3,
    "std": 100,
    "min": 1300,
    "country": "RWA",
    "sum": 4200,
    "max": 1500,
    "avg": 1400,
    "landscape": "L06"
  },
  {
    "count": 35,
    "std": 484.91626583767,
    "min": 320,
    "country": "TZA",
    "sum": 39926,
    "max": 2380,
    "avg": 1140.7428571428572,
    "landscape": "L03"
  },
  {
    "count": 40,
    "std": 393.592584325337,
    "min": 0,
    "country": "TZA",
    "sum": 35593,
    "max": 1480,
    "avg": 889.825,
    "landscape": "L11"
  },
  {
    "count": 4,
    "std": 231.138486626524,
    "min": 360,
    "country": "TZA",
    "sum": 2110,
    "max": 850,
    "avg": 527.5,
    "landscape": "L20"
  }
]


export default class TableAWS extends Component {

  _createData= () => {

      let array = [];
      for (var i = 0; i < mmsa.length; i++) {
        array.push(
        <TableRow key={i}>
          <TableRowColumn>{mmsa[i]['country'] + " " + mmsa[i]['landscape']}</TableRowColumn>
          <TableRowColumn>{mmsa[i]['min']}</TableRowColumn>
          <TableRowColumn>{mmsa[i]['max']}</TableRowColumn>
          <TableRowColumn>{mmsa[i]['avg']}</TableRowColumn>
          <TableRowColumn>{mmsa[i]['std']}</TableRowColumn>
        </TableRow>)
      }

      return array;
  }


  render() {

      //let {data} = this.props.data;

      let tableitems = this._createData();

      return (
          <Table height={300}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow >
                <TableHeaderColumn>Landscape</TableHeaderColumn>
                <TableHeaderColumn>Min</TableHeaderColumn>
                <TableHeaderColumn>Max</TableHeaderColumn>
                <TableHeaderColumn>Mean</TableHeaderColumn>
                <TableHeaderColumn>Standard Deviation</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>

              {tableitems}

            </TableBody>
          </Table>
      )
    }
}

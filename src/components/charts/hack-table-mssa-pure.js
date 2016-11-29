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


/**
 * The KC line chart.
 */

export default class TableAWS extends Component {

  _createData= () => {

      let array = [];
      for (var i = 0; i < 7; i++) {
        array.push(<TableRow key={i}>
          <TableRowColumn>i</TableRowColumn>
          <TableRowColumn>1</TableRowColumn>
          <TableRowColumn>1</TableRowColumn>
          <TableRowColumn>1</TableRowColumn>
          <TableRowColumn>1</TableRowColumn>
        </TableRow>)
      }

      return array;
  }


  render() {

      //let {data} = this.props.data;

      let tableitems = this._createData();

      return (
          <Table>
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

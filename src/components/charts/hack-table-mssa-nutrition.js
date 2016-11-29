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
        "count": 45,
        "std": 0.28879555143592,
        "min": 0.393025583,
        "country": "GHA",
        "sum": 31.882829903,
        "max": 1.784951326,
        "avg": 0.708507331177778,
        "landscape": "L01"
    },
    {
        "count": 50,
        "std": 0.237659376875037,
        "min": 0.463073013,
        "country": "GHA",
        "sum": 39.60183486,
        "max": 1.566102439,
        "avg": 0.7920366972,
        "landscape": "L02"
    },
    {
        "count": 45,
        "std": 0.168170149908977,
        "min": 0.487415255,
        "country": "GHA",
        "sum": 28.944792003,
        "max": 1.213577765,
        "avg": 0.643217600066667,
        "landscape": "L03"
    },
    {
        "count": 52,
        "std": 0.374535420994465,
        "min": 0.660597566,
        "country": "GHA",
        "sum": 70.730715743,
        "max": 2.370988436,
        "avg": 1.36020607198077,
        "landscape": "L04"
    },
    {
        "count": 47,
        "std": 0.354343735504624,
        "min": 0.679536816,
        "country": "GHA",
        "sum": 57.440738623,
        "max": 2.471025308,
        "avg": 1.22214337495745,
        "landscape": "L05"
    },
    {
        "count": 29,
        "std": 0.634932020949929,
        "min": 0.579801381,
        "country": "GHA",
        "sum": 38.211106612,
        "max": 2.86258163,
        "avg": 1.31762436593103,
        "landscape": "L06"
    },
    {
        "count": 53,
        "std": 0.53925418561431,
        "min": 1.117776165,
        "country": "TZA",
        "sum": 98.303610105,
        "max": 2.931129216,
        "avg": 1.85478509632076,
        "landscape": "L03"
    },
    {
        "count": 29,
        "std": 0.284768394688931,
        "min": 0.303149761,
        "country": "TZA",
        "sum": 16.517788398,
        "max": 1.499533864,
        "avg": 0.569578910275862,
        "landscape": "L10"
    },
    {
        "count": 45,
        "std": 0.416781565283476,
        "min": 0.649822038,
        "country": "TZA",
        "sum": 65.595976371,
        "max": 2.52721185,
        "avg": 1.4576883638,
        "landscape": "L11"
    },
    {
        "count": 10,
        "std": 0.456349379755382,
        "min": 0.38536271,
        "country": "TZA",
        "sum": 10.894452989,
        "max": 1.637534595,
        "avg": 1.0894452989,
        "landscape": "L18"
    },
    {
        "count": 19,
        "std": 0.665164339453871,
        "min": 0.392863231,
        "country": "TZA",
        "sum": 30.404763974,
        "max": 2.461361987,
        "avg": 1.60025073547368,
        "landscape": "L19"
    },
    {
        "count": 51,
        "std": 0.324199290588058,
        "min": 0.377289759,
        "country": "TZA",
        "sum": 59.116035886,
        "max": 2.103752084,
        "avg": 1.15913795854902,
        "landscape": "L20"
    },
    {
        "count": 56,
        "std": 0.359992285801294,
        "min": 1.091799471,
        "country": "UGA",
        "sum": 105.037875277,
        "max": 2.436289404,
        "avg": 1.87567634423214,
        "landscape": "L03"
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

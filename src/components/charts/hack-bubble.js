

/**
 * Created by Flo
 */

import React from 'react';
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


import {ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data01 = [{x: 100, y: 200, z: 200}, {x: 120, y: 100, z: 260},
                  {x: 170, y: 300, z: 400}, {x: 140, y: 250, z: 280},
                  {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}];
const data02 = [{x: 200, y: 260, z: 240}, {x: 240, y: 290, z: 220},
                  {x: 190, y: 290, z: 250}, {x: 198, y: 250, z: 210},
                  {x: 180, y: 280, z: 260}, {x: 210, y: 220, z: 230}];

const ThreeDimScatterChart = (props) => {

    let {title} = props;

  	return (
      <TitleContainer title={title}>
      <ResponsiveContainer>
    	<ScatterChart margin={{top: 20, right: 20, bottom: 20, left: 20}}>
      	<XAxis dataKey={'x'} name='stature' unit='cm'/>
      	<YAxis dataKey={'y'} name='weight' unit='kg'/>
        <ZAxis dataKey={'z'} range={[60, 400]} name='score' unit='km'/>
        <CartesianGrid />
      	<Tooltip cursor={{strokeDasharray: '3 3'}}/>
        <Legend/>
      	<Scatter name='GHA L06' data={data01} fill='#8884d8' shape="circle"/>
        <Scatter name='RWA L01' data={data02} fill='#82ca9d' />
      </ScatterChart>
      </ResponsiveContainer>
      </TitleContainer>
    );

}

export default ThreeDimScatterChart;

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import { useStyles } from './CustomRangeChart.style';

function CustomRangeChart ({ data, title }) {
    const classes = useStyles();

    return (
      <Card className={classes.root}>

        <div className={classes.details}>

          <CardContent className={classes.content}>
            <div className={classes.chartList}>
              <BarChart
                width={600} 
                height={300}
                data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </div>
            
          </CardContent>
        </div>
      </Card>
    )
}

export default CustomRangeChart;
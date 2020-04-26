import React from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Brightness1RoundedIcon from '@material-ui/icons/Brightness1Rounded';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
  PieChart, Scatter, Pie, Sector, Cell, Tooltip
} from 'recharts';
import uuid from 'react-uuid'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#B43ACE'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function CustomPieChart ( {data, title}) {
  const classes = useStyles();
  const theme = useTheme();
  
  return (
    <Card className={classes.root}>

      <div className={classes.details}>

        <CardContent className={classes.content}>
          <List component="nav" aria-label="main mailbox folders">
            <Typography variant="subtitle1" color="textSecondary">
              {title}
            </Typography>
            {data.map((val, id) => (
              COLORS.map((color, index) => (
                index === id &&
                  <ListItem button>
                    <ListItemIcon>
                      <Brightness1RoundedIcon style={{fill: color}} />
                    </ListItemIcon>

                    <ListItemText primary={`${val.name} - ${val.value} people`} />
                  </ListItem>
              ))
              
            ))}
            
          </List>

          <PieChart 
            width={400} 
            height={250} 
            key={uuid()}
          >
            <Pie
              innerRadius={40}
              outerRadius={120} 
              fill="#8884d8"
            // paddingAngle={5}
              dataKey="value"
              data={data}
              // cx={200}
              // cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
            >
              

              {
                data.map((entry, index) => <Cell key={uuid()} fill={COLORS[index % COLORS.length]} />)
              }
            </Pie>


            <Tooltip />

          </PieChart>
        </CardContent>
      </div>
    </Card>
  )
}

export default CustomPieChart;
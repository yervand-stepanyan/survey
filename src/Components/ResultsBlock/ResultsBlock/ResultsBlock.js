import React from 'react';

import {
  PieChart, Pie, Sector, Cell, Tooltip
} from 'recharts';
import uuid from 'react-uuid'
import getSurveyResults  from '../getSurveyResults';

// import { SURVEYS } from '../SurveyResultsData'
import { useStyles } from './ResultsBlock.style';

// const answers = {
//   'answer 1': 10,
//   'answer 2': 20,
//   'answer 3': 5
// };
const newData = [
  {
    title: 'question 1',
    type: 'checkbox',
    answers: [
      {
        name: 'answer 4', 
        value: 7
      },
      {
        name: 'answer 1', 
        value: 8
      },
      {
        name: 'answer 2', 
        value: 10
      },
      {
        name: 'answer 3', 
        value: 7
      },
      {
        name: 'answer 5', 
        value: 4
      }
    ]
  },
  {
    title: 'question 2',
    type: 'radiobutton',
    answers: [
      {
        name: 'answer 1', 
        value: 4
      },
      {
        name: 'answer 2', 
        value: 4
      },
      {
        name: 'answer 3', 
        value: 3
      },
      {
        name: 'answer 4', 
        value: 3
      },
    ]
  }
];

// Object.keys(answers).forEach(key => {
//   newData.push({name: key, value: answers[key]})
// })
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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
function ResultsBlock() {
  const classes = useStyles();
  
  const result = getSurveyResults(1);
  console.log(result)

  // Object.keys(result).forEach(res => {console.log(result[res].answers)})


  return (
    <div>
      { Object.keys(result).forEach(res => (
        (result[res].type === 'checkbox') &&
          <PieChart width={1200} height={1000}>
            
            <Pie
              dataKey="value"
              data={result[res].answers}
              cx={800}
              cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
            >
              {
                Object.keys({...result[res].answers}).forEach(key => {
                  return <Cell key={uuid()} fill={COLORS[key % COLORS.length]} />
                })
                // {...result[res].answers}.map((entry, index) => <Cell key={uuid()} fill={COLORS[index % COLORS.length]} />)
              }
            </Pie>
            <Tooltip />

          </PieChart>
        
      ))}
      <PieChart width={1200} height={1000}>
        <Pie
          dataKey="value"
          data={newData}
          cx={800}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
        >
          {
            data.map((entry, index) => <Cell key={uuid()} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Tooltip />

      </PieChart>
    </div>
   
  )
}

export default ResultsBlock;
  // return (
    // <div>
    //   {/* {
    //     Object.keys(result).forEach(res => (
          
    //     ))
    //   } */}
    //   <RadialChart 
    //     data={myData}
    //     width={300}
    //     height={300} 
    //     animation
    //     labelsAboveChildren
    //     showLabels
    //   />
    // </div>
  // )
  

  // return (
  //   <Route>
  //     <div className={classes.container}>
  //       <div className={classes.resultsContainer}>
  //         <Grid container spacing={3}>

  //           { SURVEYS.map((survey, index) => (
  //             <Grid item lg={6} md={3} sm={4} xs={12}>
  //               <Card className={classes.root} key={survey.id} sm={12}>
  //                 <CardActionArea className={classes.cardHeader}>
  //                   <CardContent>
  //                     <Typography gutterBottom variant="h5" component="h2">
  //                       Survey
  //                       {` ${index + 1} `}
  //                     </Typography>
  //                     <Typography variant="body2" color="textSecondary" component="p" className={classes.cardTitle}>
  //                       {survey.title}
  //                     </Typography>
  //                   </CardContent>
  //                 </CardActionArea>
  //                 <CardActions className={classes.cardButton}>
  //                   <Button size="small" className={classes.dateButton}>
  //                     <DateRangeIcon />
  //                     {survey.date}
  //                   </Button>
  //                   <Button size="small" variant='outlined' className={classes.seeAnswersButton}>
  //                     <Link to={`results/${survey.surveyId}`}>See answers</Link>
  //                   </Button>
  //                 </CardActions>
  //               </Card>
  //             </Grid>
              
  //           ))}
  //         </Grid>
  //       </div>
  //     </div>        
  //   </Route>
  // )



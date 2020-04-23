import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
// material ui
import { Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PollIcon from '@material-ui/icons/Poll';
// Components
import Survey from '../Survey';

import { useStyles } from './Surveys.style';

function Surveys({ surveys }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {surveys.map(row => (
            <TableRow key={row.surveyId}>
              <TableCell component="th" scope="row">
                {row.surveyName}
              </TableCell>
              <div className={classes.takeAndResultsCellsContainer}>
                <TableCell align="right">
                  <Link to={`survey/${row.surveyId}`}>
                    <Button variant="contained" color="primary">
                      Take Survey
                    </Button>
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="primary">
                    <PollIcon />
                    Results
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </div>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

Surveys.propTypes = {
  surveys: PropTypes.array.isRequired
};

export default Surveys;

// {/* <Switch>
//         <Route path="/" exact>
//           <div className={classes.surveysWrapper}>
//             {tempSurveys.map(survey => {
//               return (
//                 <Card className={classes.surveyCard} key={survey.surveyId}>
//                   <CardMedia
//                     className={classes.media}
//                     image={logo}
//                     title="Contemplative Reptile"
//                   />
//                   <CardContent className={classes.surveyNameWrapper}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       {survey.surveyName}
//                     </Typography>
//                   </CardContent>

//                   <CardActions>
//                     {survey.open ? (
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         className={classes.button}
//                         endIcon={<AssignmentIcon />}
//                         onClick={() =>
//                           handleChangeSurveyStatus(survey.surveyId)
//                         }
//                       >
//                         Close
//                       </Button>
//                     ) : (
//                       <Link to={`/survey/${survey.surveyId}`}>
//                         <Button
//                           variant="contained"
//                           color="primary"
//                           className={classes.button}
//                           endIcon={<AssignmentIcon />}
//                           onClick={() =>
//                             handleChangeSurveyStatus(survey.surveyId)
//                           }
//                           disabled={isSomeSurveyOpen}
//                         >
//                           Take
//                         </Button>
//                       </Link>
//                     )}
//                   </CardActions>
//                 </Card>
//               );
//             })}
//           </div>
//         </Route>
//         {openSurvey ? (
//           <Route path={`/survey/${openSurvey.surveyId}`} exact>
//             <Survey survey={openSurvey} />
//           </Route>
//         ) : null}
//       </Switch> */}

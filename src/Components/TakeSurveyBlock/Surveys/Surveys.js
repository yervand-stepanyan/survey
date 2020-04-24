import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import PollIcon from '@material-ui/icons/Poll';

import SurveyContext from '../../../State/context';
import ROUTES from '../../../Routes/Routes';
import { useStyles } from './Surveys.style';

function Surveys() {
  const classes = useStyles();
  const { surveys } = useContext(SurveyContext);

  return (
    <div className={classes.surveysContainer}>
      {surveys.map(survey => (
        <div key={survey.id} className={classes.singleSurveyContainer}>
          <div>{survey.title}</div>
          <div className={classes.takeAndResultsCellsContainer}>
            <div className={classes.buttonContainer}>
              <Link
                to={`${ROUTES.survey}/${survey.id}`}
                className={classes.link}
              >
                <Button variant="contained" color="primary">
                  Take Survey
                </Button>
              </Link>
            </div>
            <div className={classes.buttonContainer}>
              <Link
                to={`${ROUTES.results}/${survey.id}`}
                className={classes.link}
              >
                <Button variant="contained" color="primary">
                  <PollIcon />
                  Results
                </Button>
              </Link>
            </div>
            <div className={classes.buttonContainer}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                <DeleteIcon />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Surveys;

// {/* <div className={classes.surveysContainer}>
// {surveys.map(row => (
//   <div key={row.surveyId} className={classes.singleSurveyContainer}>
//     <div>{row.surveyName}</div>
//     <div className={classes.takeAndResultsCellsContainer}>
//       <div className={classes.buttonContainer}>
//         <Link
//           to={`${ROUTES.survey}/${row.surveyId}`}
//           className={classes.link}
//         >
//           <Button variant="contained" color="primary">
//             Take Survey
//           </Button>
//         </Link>
//       </div>
//       <div className={classes.buttonContainer}>
//         <Link
//           to={`${ROUTES.results}/${row.surveyId}`}
//           className={classes.link}
//         >
//           <Button variant="contained" color="primary">
//             <PollIcon />
//             Results
//           </Button>
//         </Link>
//       </div>
//       <div className={classes.buttonContainer}>
//         <Button
//           variant="contained"
//           color="secondary"
//           className={classes.button}
//         >
//           <DeleteIcon />
//         </Button>
//       </div>
//     </div>
//   </div>
// ))}
// </div> */}

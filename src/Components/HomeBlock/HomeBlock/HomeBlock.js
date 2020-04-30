import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import {
  REMOVE_SURVEY_SNACKBAR_MESSAGE_ERROR,
  REMOVE_SURVEY_SNACKBAR_MESSAGE_SUCCESS
} from '../../../Globals/variables';
import { doDelete } from '../../../FetchAPI/fetchData';
import NoSurveyBlock from '../NoSurveyBlock';
import NotFoundBlock from '../../NotFoundBlock';
import { removeSurvey } from '../../../State/actions';
import SurveyComponent from '../SurveyComponent';
import { useStore } from '../../../State/use-store';
import { useStyles } from './HomeBlock.style';

function HomeBlock() {
  const classes = useStyles();
  const [buttonToLoad, setButtonToLoad] = useState('');
  const [loadingButton, setLoadingButton] = useState(false);
  const [loadingRemove, setLoadingRemove] = useState(false);
  const {
    stateSurvey,
    dispatchSurvey,
    handleOpenSnackbar,
    handleShowSnackbar,
    isConnectionError
  } = useStore();

  const handleButtonClick = id => {
    setLoadingButton(true);

    setButtonToLoad(id);
  };

  const handleRemoveSurvey = async id => {
    try {
      setButtonToLoad(id);

      setLoadingRemove(true);

      await doDelete('surveys', id);

      dispatchSurvey(removeSurvey(id));

      handleShowSnackbar(true, REMOVE_SURVEY_SNACKBAR_MESSAGE_SUCCESS);
    } catch (e) {
      setLoadingRemove(false);

      handleShowSnackbar(false, REMOVE_SURVEY_SNACKBAR_MESSAGE_ERROR);
    } finally {
      setLoadingRemove(false);

      handleOpenSnackbar();
    }
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.homeBlockContainer}>
          {isConnectionError ? (
            <NotFoundBlock isConnectionError={isConnectionError} />
          ) : (
            <div className={classes.surveyList}>
              <Typography variant="h4" className={classes.surveyHeading}>
                Survey List
              </Typography>

              {stateSurvey.length ? (
                stateSurvey.map(({ id, title }) => (
                  <SurveyComponent
                    buttonToLoad={buttonToLoad}
                    handleButtonClick={handleButtonClick}
                    handleRemoveSurvey={handleRemoveSurvey}
                    id={id}
                    key={id}
                    loadingButton={loadingButton}
                    loadingRemove={loadingRemove}
                    title={title}
                  />
                ))
              ) : (
                <NoSurveyBlock />
              )}
            </div>
          )}
        </div>
      </Container>
    </>
  );
}

export default HomeBlock;

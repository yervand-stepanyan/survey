import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import {
  REMOVE_SURVEY_SNACKBAR_MESSAGE_ERROR,
  REMOVE_SURVEY_SNACKBAR_MESSAGE_SUCCESS,
  SURVEY_LIST
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
  const [loadingRemove, setLoadingRemove] = useState(false);
  const [loadingResultsButton, setLoadingResultsButton] = useState(false);
  const [loadingTakeSurveyButton, setLoadingTakeSurveyButton] = useState(false);
  const {
    stateSurvey,
    dispatchSurvey,
    handleOpenSnackbar,
    handleShowSnackbar,
    isConnectionError
  } = useStore();

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

  const handleResultsButtonClick = id => {
    setLoadingResultsButton(true);

    setButtonToLoad(id);
  };

  const handleTakeSurveyButtonClick = id => {
    setLoadingTakeSurveyButton(true);

    setButtonToLoad(id);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        {isConnectionError ? (
          <NotFoundBlock isConnectionError={isConnectionError} />
        ) : (
          <div>
            <Typography variant="h4" className={classes.surveyHeading}>
              {SURVEY_LIST}
            </Typography>

            {stateSurvey.length ? (
              stateSurvey.map(({ id, title }) => (
                <SurveyComponent
                  buttonToLoad={buttonToLoad}
                  handleRemoveSurvey={handleRemoveSurvey}
                  handleResultsButtonClick={handleResultsButtonClick}
                  handleTakeSurveyButtonClick={handleTakeSurveyButtonClick}
                  id={id}
                  key={id}
                  loadingRemove={loadingRemove}
                  loadingResultsButton={loadingResultsButton}
                  loadingTakeSurveyButton={loadingTakeSurveyButton}
                  title={title}
                />
              ))
            ) : (
              <NoSurveyBlock />
            )}
          </div>
        )}
      </Container>
    </>
  );
}

export default HomeBlock;

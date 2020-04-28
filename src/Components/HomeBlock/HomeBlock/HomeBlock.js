import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';

import {
  CONNECTION_ERROR,
  CONNECTION_ERROR_TRY_AGAIN,
  NO_SURVEY_TEXT,
  NO_SURVEY_TITLE,
  REMOVE_SURVEY_SNACKBAR_MESSAGE_ERROR,
  REMOVE_SURVEY_SNACKBAR_MESSAGE_SUCCESS
} from '../../../Globals/variables';
import { doDelete } from '../../../FetchAPI/fetchData';
import PageLoader from '../../Loaders/PageLoader';
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
    isConnectionError,
    loadingData
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
    <div className={classes.surveysContainer}>
      {!loadingData && !stateSurvey.length ? (
        <div>
          {isConnectionError ? (
            <div className={classes.noSurveysContainer}>
              <Typography variant="h3" color="secondary">
                {CONNECTION_ERROR}
              </Typography>
              <Typography variant="h4" color="primary">
                {CONNECTION_ERROR_TRY_AGAIN}
              </Typography>
            </div>
          ) : (
            <div className={classes.noSurveysContainer}>
              <Typography variant="h3" color="secondary">
                {NO_SURVEY_TITLE}
              </Typography>
              <Typography variant="h4" color="primary">
                {NO_SURVEY_TEXT}
              </Typography>
            </div>
          )}
        </div>
      ) : (
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
      )}
      {loadingData && <PageLoader />}
    </div>
  );
}

export default HomeBlock;

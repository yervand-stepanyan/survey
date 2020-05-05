import React, { useState } from 'react';

import API from '../../fetchAPI/fetchData';
import HomeBlock from '../../components/HomeBlock/HomeBlock';
import Loader from '../../components/Loader';
import {
  LOADER_TYPE,
  REMOVE_SURVEY_SNACKBAR_MESSAGE_ERROR,
  REMOVE_SURVEY_SNACKBAR_MESSAGE_SUCCESS,
  SURVEYS_PER_PAGE
} from '../../globals/constants';
import { removeSurvey } from '../../state/actions';
import { useStore } from '../../state/use-store';
import { useStyles } from './Home.style';

function Home() {
  const classes = useStyles();
  const [buttonToLoad, setButtonToLoad] = useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [loadingRemove, setLoadingRemove] = useState(false);
  const [loadingResultsButton, setLoadingResultsButton] = useState(false);
  const [loadingTakeSurveyButton, setLoadingTakeSurveyButton] = useState(false);
  const indexOfLastSurvey = currentPage * SURVEYS_PER_PAGE;
  const indexOfFirstSurvey = indexOfLastSurvey - SURVEYS_PER_PAGE;
  const {
    stateSurvey,
    dispatchSurvey,
    handleOpenSnackbar,
    handleShowSnackbar,
    isConnectionError,
    loadingData
  } = useStore();
  const totalPages = Math.ceil(stateSurvey.length / SURVEYS_PER_PAGE);
  const currentSurveys = stateSurvey.slice(
    indexOfFirstSurvey,
    indexOfLastSurvey
  );

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleRemoveSurvey = async id => {
    try {
      setButtonToLoad(id);

      setLoadingRemove(true);

      await API.delete('surveys', id);

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
    <div className={classes.homeContainer}>
      {loadingData ? (
        <Loader type={LOADER_TYPE.page} />
      ) : (
        <HomeBlock
          buttonToLoad={buttonToLoad}
          currentSurveys={currentSurveys}
          handlePaginationChange={handlePaginationChange}
          handleRemoveSurvey={handleRemoveSurvey}
          handleResultsButtonClick={handleResultsButtonClick}
          handleTakeSurveyButtonClick={handleTakeSurveyButtonClick}
          isConnectionError={isConnectionError}
          loadingRemove={loadingRemove}
          loadingResultsButton={loadingResultsButton}
          loadingTakeSurveyButton={loadingTakeSurveyButton}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}

export default Home;

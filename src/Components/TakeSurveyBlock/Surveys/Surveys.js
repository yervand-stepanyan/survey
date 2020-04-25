import React, { useContext, useState } from 'react';

import { doDelete } from '../../../FetchAPI/fetchData';
import SurveyComponent from '../SurveyComponent';
import SurveyContext from '../../../State/context';
import { useStyles } from './Surveys.style';

const SNACKBAR_MESSAGE_ERROR = 'Something went wrong. Try again!';
const SNACKBAR_MESSAGE_SUCCESS = 'Survey removed!';

function Surveys() {
  const classes = useStyles();
  const [loadingRemove, setLoadingRemove] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [buttonToLoad, setButtonToLoad] = useState('');
  const {
    stateSurvey,
    dispatchSurvey,
    handleOpenSnackbar,
    handleShowSnackbar
  } = useContext(SurveyContext);

  const handleButtonClick = id => {
    setLoadingButton(true);

    setButtonToLoad(id);
  };

  const handleRemoveSurvey = async id => {
    try {
      setButtonToLoad(id);

      setLoadingRemove(true);

      await doDelete('surveys', id);

      const filteredSurveys = stateSurvey.filter(survey => survey.id !== id);

      dispatchSurvey({ type: 'REMOVE_SURVEY', payload: filteredSurveys });

      handleShowSnackbar(true, SNACKBAR_MESSAGE_SUCCESS);
    } catch (e) {
      setLoadingRemove(false);

      handleShowSnackbar(false, SNACKBAR_MESSAGE_ERROR);
    } finally {
      setLoadingRemove(false);

      handleOpenSnackbar();
    }
  };

  return (
    <div className={classes.surveysContainer}>
      {stateSurvey.map(({ id, title }) => (
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
      ))}
    </div>
  );
}

export default Surveys;

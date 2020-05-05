import React from 'react';

import CreateSurveyBlock from '../../components/CreateSurveyBlock/CreateSurveyBlock';
import Loader from '../../components/Loader';
import { LOADER_TYPE } from '../../globals/constants';
import { useStore } from '../../state/use-store';
import { useStyles } from './CreateSurvey.style';

function CreateSurvey() {
  const classes = useStyles();
  const { loadingData } = useStore();

  return (
    <div className={classes.createSurveyContainer}>
      {loadingData ? <Loader type={LOADER_TYPE.page} /> : <CreateSurveyBlock />}
    </div>
  );
}

export default CreateSurvey;

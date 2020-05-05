import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import NoSurveyBlock from '../NoSurveyBlock';
import NotFoundBlock from '../../NotFoundBlock';
import Pagination from '../../Pagination';
import SurveyComponent from '../SurveyComponent';
import { TEXT_LABEL } from '../../../globals/constants';
import { useStyles } from './HomeBlock.style';

function HomeBlock({
  buttonToLoad,
  currentSurveys,
  handlePaginationChange,
  handleRemoveSurvey,
  handleResultsButtonClick,
  handleTakeSurveyButtonClick,
  isConnectionError,
  loadingRemove,
  loadingResultsButton,
  loadingTakeSurveyButton,
  totalPages
}) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        {isConnectionError ? (
          <NotFoundBlock isConnectionError={isConnectionError} />
        ) : (
          <div>
            <Typography variant="h4" className={classes.surveyHeading}>
              {TEXT_LABEL.homePageTitle}
            </Typography>
            {currentSurveys.length ? (
              <div>
                {currentSurveys.map(({ id, title }) => (
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
                ))}
                <Pagination
                  totalPages={totalPages}
                  handlePaginationChange={handlePaginationChange}
                />
              </div>
            ) : (
              <NoSurveyBlock />
            )}
          </div>
        )}
      </Container>
    </>
  );
}

HomeBlock.propTypes = {
  buttonToLoad: PropTypes.string.isRequired,
  currentSurveys: PropTypes.array.isRequired,
  handlePaginationChange: PropTypes.func.isRequired,
  handleRemoveSurvey: PropTypes.func.isRequired,
  handleResultsButtonClick: PropTypes.func.isRequired,
  handleTakeSurveyButtonClick: PropTypes.func.isRequired,
  isConnectionError: PropTypes.bool.isRequired,
  loadingRemove: PropTypes.bool.isRequired,
  loadingResultsButton: PropTypes.bool.isRequired,
  loadingTakeSurveyButton: PropTypes.bool.isRequired,
  totalPages: PropTypes.number.isRequired
};

export default HomeBlock;

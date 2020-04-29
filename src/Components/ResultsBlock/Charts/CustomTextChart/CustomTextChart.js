import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import CustomAnswersModal from '../CustomAnswersModal';

import { useStyles } from './CustomTextChart.style';

function CustomTextChart({ title, data }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div>
          <List component="nav" aria-label="main mailbox folders">
            <Typography variant="subtitle1" color="textSecondary">
              {title}
            </Typography>
          </List>
        </div>
      </CardContent>
      <div>
        <CustomAnswersModal customText={data} title={title} />
      </div>
    </Card>
  );
}

CustomTextChart.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
  // count: PropTypes.number.isRequired
};

export default CustomTextChart;

import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import CustomAnswersModal from '../CustomAnswersModal';
import { useStyles } from './CustomTextChart.style';

function CustomTextChart({ data, title }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div>
          <List aria-label="main mailbox folders" component="nav">
            <Typography color="textSecondary" variant="subtitle1">
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
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default CustomTextChart;

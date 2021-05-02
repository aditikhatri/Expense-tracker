import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useStyles from './styles';
import useTransactions from '../../useTransactions';
//hooks 
const DetailsCard = ({ title, subheader }) => {
  // getting chart data from usetrans.js
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        {/* total  */}
        <Typography variant="h5">${total}</Typography>
       {/* piechart :use a hook namedusetrans */}
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
// details of 2 card income and expense ;topo :text ,doughnut :piechart
//   title is a prop to get diffrent headings that we are getting from const deltails

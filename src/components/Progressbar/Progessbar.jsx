import React from 'react';
import { LinearProgress } from '@mui/material';
  
const Progress_bar = ({progress,color}) => {
    return (
      <LinearProgress color={color} variant="determinate" value={progress} />
    )
}
  
export default Progress_bar;
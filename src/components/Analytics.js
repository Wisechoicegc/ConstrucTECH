import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import AnalyticsDesktop from './AnalyticsDesktop';
import AnalyticsMobile from './AnalyticsMobile';

const Analytics = () => {
  const isMobile = useMediaQuery('(max-width:768px)');

  return isMobile ? <AnalyticsMobile /> : <AnalyticsDesktop />;
};

export default Analytics;

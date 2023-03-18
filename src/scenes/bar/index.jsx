import { Box } from '@mui/material';
import Header from '../../components/Header';
import BarChart from '../../components/BarChart';
import { Helmet } from 'react-helmet';

const Bar = () => {
  return (
    <Box m="15px">
      <Helmet>
        <title>Bar Chart | ReactDashX</title>
      </Helmet>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />

      <Box height="74vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;

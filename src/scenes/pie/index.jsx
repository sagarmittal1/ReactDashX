import { Box } from '@mui/material';
import Header from '../../components/Header';
import PieChart from '../../components/PieChart';
import { Helmet } from 'react-helmet';

const Pie = () => {
  return (
    <Box m="15px">
      <Helmet>
        <title>Pie Chart | ReactDashX</title>
      </Helmet>
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />

      <Box height="74vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;

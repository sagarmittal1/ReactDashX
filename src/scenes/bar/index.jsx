import { Box } from '@mui/material';
import Header from '../../components/Header';
import BarChart from '../../components/BarChart';

const Bar = () => {
  return (
    <Box m="15px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />

      <Box height="74vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;

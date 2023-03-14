import { Box } from '@mui/material';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';

const Line = () => {
  return (
    <Box m="15px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />

      <Box height="74vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;

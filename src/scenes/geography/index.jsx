import { Box } from '@mui/material';
import Header from '../../components/Header';
import GeographyChart from '../../components/GeographyChart';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="15px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />

      <Box height="74vh" border={`1px solid ${colors.grey[100]}`}>
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;

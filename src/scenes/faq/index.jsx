import { Box, Typography, useTheme } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';
import Header from '../../components/Header';

const faqData = [
  {
    summary: 'This is first question',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime distinctio fugiat dignissimos molestiae pariatur, consectetur aperiam, officiis incidunt, odit asperiores unde praesentium. Iusto maxime soluta molestiae in alias corrupti modi.',
  },
  {
    summary: 'This is second question',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime distinctio fugiat dignissimos molestiae pariatur, consectetur aperiam, officiis incidunt, odit asperiores unde praesentium. Iusto maxime soluta molestiae in alias corrupti modi.',
  },
];

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="15px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      {faqData.map((faq) => (
        <Accordion
          defaultExpanded
          sx={{ backgroundColor: colors.primary[400], borderRadius: '4px' }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h4">
              {faq.summary}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.details}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;

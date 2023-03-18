import { Box, Typography, useTheme } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';

const faqData = [
  {
    summary: 'What tech-stacks used in making this web-app?',
    details:
      'I used ReactJS for making this website. Used MUi for UI components, icons & X-data-grid. I used various other libraries like Nivo, React Pro Sidebar, FullCalendar. For forms I used Formik with Yup. This also has light/dark theme. I learned various things while building this web-app.',
  },
  {
    summary: 'GitHub Repo of this project?',
    details:
      'GitHub repo - https://github.com/sagarmittal1/ReactDashX . Please give it a ⭐, if you like it.',
  },
  {
    summary: 'What Charts I used?',
    details:
      'I used Nivo library for charts. It is absolutely amazing. Their easy-to-use charts & highly customizable. They have every kind of charts. Must recommend.',
  },
  {
    summary: 'Which mockData I used for Charts & tables?',
    details:
      'The data I used can be found here - https://github.com/sagarmittal1/ReactDashX/blob/main/src/data/mockData.js',
  },
  {
    summary: 'Something IMPORTANT regarding this web-app!',
    details:
      'This is not responsive. I suggest to view it in Desktop with full screen. I will try to make this responvie but as of now it is as it is. ',
  },
  {
    summary: 'My Introduction !!!',
    details:
      'Hey I am Sagar Mittal. I have interest in frontend development. Currently I am learning NextJS. I like to build projects using ReactJS & Vanilla JavaScript.',
  },
  {
    summary: 'Where can I found. Any Socials??',
    details:
      'I can found on GitHub by - sagarmittal1. On twitter & instagram my username is - sagar_mittal5 . Feel free to reach out to me 😊',
  },
  {
    summary: 'Credits',
    details:
      'Thanks to Ed Roh for his amazing video on making this, his video - https://www.youtube.com/watch?v=wYpCWwD1oz0 . Must Watch!!',
  },
];

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="15px">
      <Helmet>
        <title>FAQ | ReactDashX</title>
      </Helmet>
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      {faqData.map((faq) => (
        <Accordion
          // defaultExpanded
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

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';

import Dashboard from './scenes/dashboard';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Team from './scenes/team';
import Contacts from './scenes/contacts';
// import Invoices from './scenes/invoices';
// import Bar from './scenes/bar';
// import Form from './scenes/form';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import FAQ from './scenes/faq';
// import Geography from './scenes/geography';
// import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <Router>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                {/* <Route path="/invoices" element={<Invoices />} /> */}
                {/* <Route path="/form" element={<Form />} /> */}
                {/* <Route path="/bar" element={<Bar />} /> */}
                {/* <Route path="/pie" element={<Pie />} /> */}
                {/* <Route path="/line" element={<Line />} /> */}
                {/* <Route path="/faq" element={<FAQ />} /> */}
                {/* <Route path="/geography" element={<Geography />} /> */}
                {/* <Route path="/calendar" element={<Calendar />} /> */}
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>
  );
}

export default App;

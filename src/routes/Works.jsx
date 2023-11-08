import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className='p-3'>  
          <div>{children}</div>
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Works() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="scrollable auto tabs example"
          className=' bg-gray-800 pl-4 max-lg:p-0'
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item One" {...a11yProps(3)} />
          <Tab label="Item T" {...a11yProps(4)} />
          <Tab label="Item Three" {...a11yProps(5)} />
          <Tab label="Item One" {...a11yProps(6)} />
          <Tab label="Item Two" {...a11yProps(7)} />
          <Tab label="Item Three" {...a11yProps(8)} />

        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div>
            <div className='flex max-md:flex-col gap-5'>
              <p className='h-96 bg-red-500 w-full'>
                <img src="" alt="photechindia" />
              </p>
              <p className='h-96 w-full'>
                <span>hello</span>
                <span>hello</span>
                <span>hello</span>
                <span>hello</span>
                <span>hello</span>
              </p>

            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item 4
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Item5
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          Item 6
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          Item 7
        </TabPanel>
        <TabPanel value={value} index={7} dir={theme.direction}>
          Item 8
        </TabPanel>
        <TabPanel value={value} index={8} dir={theme.direction}>
          Item 9
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
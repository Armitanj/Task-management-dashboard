import React, { useState } from 'react'
import './Setting.css'
import Menubar from '../../Components/DashboardComps/Menubar/Menubar'
import Navbar from '../../Components/DashboardComps/Navbar/Navbar'
import { StyledEngineProvider } from '@mui/material'
import MenubarMobile from '../../Components/DashboardComps/MenubarMobile/MenubarMobile'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import GeneralTab from '../../Components/SettingsComps/GeneralTab/GeneralTab'
import NotificationTab from '../../Components/SettingsComps/NotificationTab/NotificationTab'
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Setting(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <>
      <div className='flex flex-row bg-[#F7FAFC] h-[100vh]!'>

        {/* Menu bar */}
        <div className='hidden sm:block'>
          <Menubar />
        </div>

        <div className='w-full sm:min-w-[252px] '>

          <div className='flex flex-col bg-white '>

            {/* Nav bar */}
            <StyledEngineProvider injectFirst>
              <Navbar title="Settings" subTitle="" onToggleMenu={toggleMenu} />
            </StyledEngineProvider>
            <br />
            {/* Title */}
            <div className='flex-col gap-2 block sm:hidden font-[poppins-medium] mx-6! mt-2! mb-4!'>
              <h1 className=' text-[24px]'>Settings</h1>
            </div>
          </div>

          <div className='px-5! mt-5!'>
            <div className=' bg-white rounded-lg pt-5! sm:px-5!'>


              <Box sx={{ width: '100%', }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', paddingLeft: '1rem' }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="General" {...a11yProps(0)} />
                    <Tab label="Notification" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                  <GeneralTab />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <NotificationTab />
                </CustomTabPanel>

              </Box>
            </div>
          </div>

        </div>


      </div>


      <MenubarMobile
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

    </>
  )
}

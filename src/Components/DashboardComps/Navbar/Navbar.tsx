import React from 'react'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import { IoNotificationsOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';

interface NavbarProps {
    title: string;
    subTitle: string;
    onToggleMenu: () => void; // تابع callback برای تغییر وضعیت منو
}

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export default function Navbar({ title, subTitle, onToggleMenu }: NavbarProps) {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };



    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div className="!mt-4 flex justify-between items-center !w-[100%] !px-10 !pt-3">
            <div>
                <div className='flex-col gap-2 hidden sm:block font-[poppins-medium]'>
                    <h1 className=' text-[22px]'>{title}</h1>
                    <span className='text-[#54577A]'>{subTitle}</span>
                </div>
                <RxHamburgerMenu onClick={onToggleMenu} className='block sm:hidden text-3xl cursor-pointer' />
            </div>

            <div className='flex items-center gap-9'>
                <Badge color='warning' variant='dot'>
                    <IoNotificationsOutline onClick={() => { console.log('Notifications clicked'); }} className='text-2xl text-[#8E92BC] cursor-pointer' />
                </Badge>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </div>
        </div>
    )
}

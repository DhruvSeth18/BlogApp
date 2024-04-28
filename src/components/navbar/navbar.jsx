import React,{useContext} from 'react';
import {AppBar,Toolbar,styled,Box,Drawer} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginButton from './loginSection';
import { NavLink } from 'react-router-dom';
import { DataContext } from '../context/dataContext';

const drawerWidth = 240;
import './navbar.css';


const EditToolbar = styled(Toolbar)`
    width: 100%;
    display: flex;
    justify-content: center;
`;


const Navbar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const {account} = useContext(DataContext);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar  position="fixed" sx={{ width:'100%'}} >
                    <EditToolbar className='bg-black' position='fixed' sx={{height:{xs:'65px'}}}>
                        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ display: { sm: 'none' } ,position:'absolute',left:'5vh',scale:'1.4'}} >
                            <MenuIcon />
                        </IconButton>
                        <div className='w-[55%] hidden sm:flex justify-around'>
                            <NavLink style={{fontSize:"20px"}} to={'/intro'}>Intro</NavLink>
                            <NavLink style={{fontSize:"20px"}} to={'/about'}>About</NavLink>
                            <NavLink style={{fontSize:"20px"}} to={'/contact'}>Contact</NavLink>
                            <NavLink style={{fontSize:"20px"}} to={'/service'}>Service</NavLink>
                            {account && <NavLink style={{fontSize:"20px"}} to={'/blogs'}>Blogs</NavLink>}
                        </div>
                        <LoginButton/>
                    </EditToolbar>
                </AppBar>
                <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}} aria-label="mailbox folders">
                    <Drawer variant="temporary" open={mobileOpen} onTransitionEnd={handleDrawerTransitionEnd} onClose={handleDrawerClose}
                        ModalProps={{keepMounted: true}}
                        sx={{display: { xs: 'block', sm: 'none' },'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor: '#191919', },}}>
                    </Drawer>
                </Box>
            </Box>
        </>
    );
}
export default Navbar;
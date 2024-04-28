import React, { useEffect, useContext } from 'react';
import './navbar.css';
import { DataContext } from '../context/dataContext';
import { useNavigate } from 'react-router-dom';
import { Menu, styled, Button } from '@mui/material';

const StyledMenu = styled((props) => (
    <Menu
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(0.5),
        backgroundColor: '#272829    ',
        minWidth: 140,
        width: 140
    },
}));

const LoginButton = () => {
    const { account, setAccount } = useContext(DataContext);

    useEffect(() => {
        if (localStorage.getItem("userId")) {
            console.log(localStorage.getItem("userId"));
            setAccount(true);
        }
    }, [account]);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }


    return (
        <>
            {
                account ?
                    <>
                        <div className='absolute right-[40px] top-3 flex cursor-pointer' >
                            <label className="switch-button scale-50 relative bottom-[7px]" for="switch">
                                <div className="switch-outer">
                                    <input id="switch" type="checkbox" />
                                    <div className="button">
                                        <span className="button-toggle"></span>
                                        <span className="button-indicator"></span>
                                    </div>
                                </div>
                            </label>
                            <div className='onClick={handleClick}'>
                                <img onClick={handleClick} className='w-[45px] h-[45px] relative rounded-full ring-gray-300 dark:ring-gray-500' src={localStorage.getItem('userImage') || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQLZBLliHC0oAh1vMfI7Z5IzTV8_RlzVeh6QqSzs_SCqn5a0rkuXEoVsuDPNxMntF0vc&usqp=CAU'} />
                            </div>
                            <StyledMenu sx={{ display: 'flex', flexDirection: 'column' }} id="basic-menu" MenuListProps={{ 'aria-labelledby': 'basic-button' }} anchorEl={anchorEl} open={open} onClose={handleClose} >
                                <Button style={{ width: '100%', color: 'white' }} variant="text">Blog</Button>
                                <Button style={{ width: '100%', color: 'white' }} variant="text">About</Button>
                                <Button onClick={logout} style={{ width: '100%', color: 'white' }} variant="text">Log Out</Button>
                            </StyledMenu>
                        </div>
                    </>
                    :
                    <button onClick={() => { navigate('/login') }} style={{ position: 'absolute', right: '30px' }} className="btn">LOGIN</button>
            }

        </>
    )
}
export default LoginButton;
import React,{ useEffect ,useContext} from 'react';
import './navbar.css';
import { DataContext } from '../context/dataContext';
import {useNavigate} from 'react-router-dom';
import {Menu,styled,Button} from '@mui/material';

const StyledMenu = styled((props) => (
    <Menu
        {...props}
    />
    ))(({ theme }) => ({
        '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(0.5),
            backgroundColor:'#272829    ',
            minWidth:140,
            width:140
        },
})); 

const LoginButton = ()=>{
    const {account,setAccount} = useContext(DataContext);

    useEffect(()=>{
        if(localStorage.getItem("userId")){
            console.log(localStorage.getItem("userId"));
            setAccount(true);
        }
    },[account]);
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        window.location.reload();
    }


    return (
        <>
            {
                account?
                <>
                    <div className='absolute right-[40px] flex gap-2 cursor-pointer' onClick={handleClick}>
                        <div className=' p-1 overflow-hidden'>
                            <img className='w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500' src={localStorage.getItem('image') || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQLZBLliHC0oAh1vMfI7Z5IzTV8_RlzVeh6QqSzs_SCqn5a0rkuXEoVsuDPNxMntF0vc&usqp=CAU'}/>
                        </div>
                        <StyledMenu sx={{display:'flex',flexDirection:'column'}} id="basic-menu" MenuListProps={{ 'aria-labelledby': 'basic-button'}} anchorEl={anchorEl} open={open} onClose={handleClose} >
                            <Button  style={{width:'100%',color:'white'}} variant="text">Blog</Button>
                            <Button style={{width:'100%',color:'white'}} variant="text">About</Button>
                            <Button onClick={logout} style={{width:'100%',color:'white'}} variant="text">Log Out</Button>
                        </StyledMenu>
                    </div>
                </>
                :
                <button onClick={()=>{navigate('/login')}} style={{position:'absolute',right:'30px'}} className="btn">LOGIN</button>
            }
                
        </>
    )
}
export default LoginButton;
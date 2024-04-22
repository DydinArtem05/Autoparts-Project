
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authentication } from '../../reducers/AuthReducer';
import { setProfileDefaultData } from '../../reducers/ProfileReducer';
import { AuthHttp } from '../../http/AuthHttp';

export default function AdminHeader() {

    const { isAuth } = useSelector(s => s.AuthReducer)
    const dispatch = useDispatch()

    const logout = async () => {
        try {
            await AuthHttp.logout()
            dispatch(authentication({isAuth:false}))
            dispatch(setProfileDefaultData())
            localStorage.setItem("accessToken",'');
        } catch (error) {
            alert(error)
        }
    }
  
    return (
        <Box sx={{ flexGrow: 1, position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 999 }}>
            <AppBar position="static">
                <Toolbar>
                <Link to={'/admin/statistic'}    >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
            
                    >
                        <MenuIcon />
                    </IconButton>
                    </Link>
                    <Typography variant="p" component="div" sx={{ flexGrow: 1, gap: '15px', display: 'flex' }}>
                        {
                            isAuth ? <>
                                <Link to={'/admin/add-brand'}>Марка</Link>
                                <Link to={'/admin/add-categories'}>Категория</Link>
                                <Link to={'/admin/add-products'}>Товары</Link>
                                <Link to={'/admin/add-node'}>Создать Каталог</Link>
                            </> : <>Панель администратора</>
                        }
                    </Typography>
                    {
                        isAuth &&
                        <Button color="inherit" onClick={logout}>Выйти</Button>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
}


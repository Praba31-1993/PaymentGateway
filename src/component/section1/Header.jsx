import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Input, ListItemButton, ListItemIcon, ListItemText, InputLabel } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

export default function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ width: '100%', background: 'white' }}>
            <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <ListItemButton >
                    <ListItemText sx={{
                        marginLeft: { xs: '-15px', md: '' }, "& .MuiTypography-root": {
                            fontWeight: 'bold'
                        }
                    }} primary="Logo" />
                </ListItemButton>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >

                        <MenuItem onClick={handleCloseNavMenu}>
                            <Box sx={{ display: { sm: 'block', md: 'none' } }}>

                                <Typography>
                                    <FormControl sx={{ m: 1 }} variant="standard">
                                        <Input
                                            id="standard-adornment-amount"
                                            placeholder='Search here...'
                                            startAdornment={<InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>}
                                        />
                                    </FormControl>
                                </Typography>
                                <Typography>
                                    <ListItemButton>
                                        <ListItemIcon >
                                            <AlternateEmailIcon />
                                        </ListItemIcon>
                                        <ListItemText sx={{ marginLeft: { sm: '', md: '-15px' } }} primary="test@gmail.com" />
                                    </ListItemButton>
                                </Typography>
                                <Typography>
                                    <ListItemButton>
                                        <ListItemIcon >
                                            <LocalPhoneIcon />
                                        </ListItemIcon>
                                        <ListItemText sx={{ marginLeft: { xs: '', md: '-15px' } }} primary="00-000-00211" />
                                    </ListItemButton>
                                </Typography>
                            </Box>
                        </MenuItem>

                    </Menu>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                    <Typography>
                        <FormControl sx={{ m: 1 }} variant="standard">
                            <Input
                                id="standard-adornment-amount"
                                placeholder='Search here...'
                                startAdornment={<InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>}
                            />
                        </FormControl>
                    </Typography>
                    <Typography>
                        <ListItemButton>
                            <ListItemIcon >
                                <AlternateEmailIcon />
                            </ListItemIcon>
                            <ListItemText sx={{ marginLeft: { sm: '', md: '-15px' } }} primary="test@gmail.com" />
                        </ListItemButton>
                    </Typography>
                    <Typography>
                        <ListItemButton>
                            <ListItemIcon >
                                <LocalPhoneIcon />
                            </ListItemIcon>
                            <ListItemText sx={{ marginLeft: { xs: '', md: '-15px' } }} primary="00-000-00211" />
                        </ListItemButton>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
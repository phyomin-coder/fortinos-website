import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    Box,
    IconButton,
    Menu,
    MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/images/fotinos-logo.png';

const FOTINOS_ORANGE = '#F07E2C';
const FOTINOS_LIGHT_BG = '#FFFFFF';
const FOTINOS_TEXT = '#4F4F4F';

const FotinosNavBar = ({ activeLink, setActiveLink }) => {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Service', path: '/service' },
        { name: 'Case Studies', path: '/cases' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const navigate = useNavigate();
    const location = useLocation();

    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    // ✅ KEEP ACTIVE BUTTON AFTER REFRESH
    useEffect(() => {
        const current = navItems.find(
            (item) => item.path === location.pathname
        );
        if (current) {
            setActiveLink(current.name);
        }
    }, [location.pathname, setActiveLink]);

    // ✅ SAFE NAVIGATION HANDLER
    const handleLinkClick = (item) => {
        setActiveLink(item.name);
        navigate(item.path);
        handleMenuClose();
    };

    // ✅ CONTACT BUTTON
    const ContactUsButton = ({ sxProps }) => (
        <Button
            onClick={() =>
                handleLinkClick({ name: 'Contact Us', path: '/contact' })
            }
            variant="contained"
            disableElevation
            sx={{
                backgroundColor: FOTINOS_ORANGE,
                color: 'white',
                fontWeight: 600,
                px: 3,
                py: 1,
                borderRadius: 10,
                textTransform: 'none',
                boxShadow: '0 8px 16px -4px rgba(240, 126, 44, 0.4)',
                '&:hover': {
                    backgroundColor: '#FFFFFF',
                    color: '#F07E2C',
                    boxShadow: '0 6px 18px rgba(240, 126, 44, 0.75)',
                },
                ...sxProps,
            }}
        >
            Contact Us
        </Button>
    );

    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: FOTINOS_LIGHT_BG }}>
                <Toolbar
                    sx={{
                        maxWidth: '1280px',
                        mx: 'auto',
                        width: '100%',
                        px: 2,
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* LOGO */}
                    <Box>
                        <img src={logo} alt="Logo" width={80} />
                    </Box>

                    {/* ✅ DESKTOP NAV */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
                        {navItems
                            .filter((i) => i.name !== 'Contact Us')
                            .map((item) => (
                                <Button
                                    key={item.name}
                                    onClick={() => handleLinkClick(item)}
                                    sx={{
                                        color:
                                            activeLink === item.name
                                                ? FOTINOS_ORANGE
                                                : FOTINOS_TEXT,
                                        borderBottom:
                                            activeLink === item.name
                                                ? `2px solid ${FOTINOS_ORANGE}`
                                                : '2px solid transparent',
                                        fontWeight: 600,
                                        textTransform: 'none',
                                    }}
                                >
                                    {item.name}
                                </Button>
                            ))}
                    </Box>

                    {/* CTA + MOBILE TOGGLE */}
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <ContactUsButton />
                        </Box>

                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <IconButton onClick={handleMenuOpen}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Box>

                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={isMenuOpen}
                        onClose={handleMenuClose}
                        sx={{ display: { md: 'none' } }}
                    >
                        {navItems
                            .filter((item) => item.name !== 'Contact Us')
                            .map((item) => (
                                <MenuItem
                                    key={item.name}
                                    onClick={() => handleLinkClick(item)}
                                    sx={{
                                        color:
                                            activeLink === item.name
                                                ? FOTINOS_ORANGE
                                                : FOTINOS_TEXT,
                                        fontWeight: 600,
                                    }}
                                >
                                    {item.name}
                                </MenuItem>
                            ))}

                        {/* ✅ Mobile CTA Contact Button ONLY */}
                        <MenuItem sx={{ p: 2 }}>
                            <ContactUsButton sxProps={{ width: '100%' }} />
                        </MenuItem>
                    </Menu>

                </Toolbar>
            </AppBar>

            {/* Spacer */}
            <Box sx={{ height: 80 }} />
        </>
    );
};

export default FotinosNavBar;

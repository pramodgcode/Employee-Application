import React, { useEffect, useState } from 'react';
import { AppBar, Box, Button, Toolbar, Typography, CssBaseline, useTheme, Avatar, Menu, MenuItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';


export default function Navbar() {
  const theme = useTheme();
  const location = useLocation();

 
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; 
  };


  
  const hideNavbarPaths = ['/', '/login', '/signup'];
  if (hideNavbarPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <div>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: theme.palette.primary.main, height: '100px', justifyContent: 'center' }}>
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    Employee list
              </Typography>
            </Box>
            {user ? (
              <>
                {user.role === 'admin' && (
                  <>
                    <Button
                      component={Link}
                      to="/employeemain"
                      sx={{
                        color: theme.palette.common.white,
                        fontWeight: 'bold',
                        mx: 2,
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: theme.palette.grey[300],
                        },
                      }}
                    >
                      Dashboard
                    </Button>
                    <Button
                      component={Link}
                      to="/employeeform"
                      sx={{
                        color: theme.palette.common.white,
                        fontWeight: 'bold',
                        mx: 2,
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: theme.palette.grey[300],
                        },
                      }}
                    >
                      Registration Form
                    </Button>
                  </>
                )}
                {user.role === 'employee' && (
                  <Button
                    component={Link}
                    to="/employeemain"
                    sx={{
                      color: theme.palette.common.white,
                      fontWeight: 'bold',
                      mx: 2,
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: theme.palette.grey[300],
                      },
                    }}
                  >
                    home
                  </Button>
                )}
    
<Box
  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 1, cursor: 'pointer' }}
  onClick={handleMenu}
>
 
  <Typography 
    variant="body1" 
    sx={{ color: 'common.black', mt: 0.5, textAlign: 'center' }}
  >
    {user.username} ({user.role})
  </Typography>

</Box>
<Menu
  id="menu-appbar"
  anchorEl={anchorEl}
  anchorOrigin={{
    vertical: 'bottom', 
    horizontal: 'right',
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top', 
    horizontal: 'right',
  }}
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleLogout}>Log Out</MenuItem>
</Menu>
            
              </>
            ) : (
              <>
                <Button
                  component={Link}
                  to="/login"
                  sx={{
                    color: theme.palette.common.white,
                    fontWeight: 'bold',
                    mx: 2,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: theme.palette.grey[300],
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  sx={{
                    color: theme.palette.common.white,
                    fontWeight: 'bold',
                    mx: 2,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: theme.palette.grey[300],
                    },
                  }}
                >
                  Signup
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

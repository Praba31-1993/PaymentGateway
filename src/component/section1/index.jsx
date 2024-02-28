import React from 'react';
import Stack from '@mui/material/Stack';
import { Container, Typography } from '@mui/material';
import Header from './Header';
import Navbar from './Navbar';
import Content from './Content';
function SectionOne() {
    return (
        <Typography
            style={{ background: "white", width: '100%', height: '500px',}}
        >
            <Stack
                direction={{ xs: 'column', sm: 'column' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                style={{ background: "#E9F8FF", height: '100%', border:'1px solid black' }}
            >
                
                    <Header/>
                    <Navbar/>
                    <Content/>
                

            </Stack>
        </Typography>

    );
}

export default SectionOne;
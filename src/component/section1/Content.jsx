import { Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import banner from "../../assets/svg/banner_image.svg"
import star from "../../assets/png/star.png"
import Button from '@mui/material/Button';

function Content(props) {
    const styles = useStyles();
    const starList = [0, 1, 2, 3, 4]
    return (
        <Typography className={styles.Container}>
            <Typography style={{ width: '50%', padding: '50px' }}>
                <Typography>
                    <Typography style={{ fontSize: '4em', fontWeight: 'bold' }}>
                        Start accepting payment in 3 minutes
                    </Typography>
                    <Typography style={{ fontSize: '1em', fontWeight: 400 }}>
                        Integrate XYZ payment gateway without any technical knowledge
                    </Typography>
                    <Typography className={styles.StartNow}>
                        <Button sx={{ background: 'red', width: 'fit-content', color: 'white' }}>Start Now</Button>
                        <Button variant='outlined' sx={{ background: 'white', width: 'fit-content', color: 'black', border: '1px solid black' }}>Read the developer docs</Button>

                    </Typography>
                    <Typography className={styles.StartNow}>
                        <Typography style={{ fontSize: '4em', fontWeight: 'bold' }}>4.7</Typography>
                        <Typography className={styles.Rating}>
                            <Typography>Top rated on trustspot</Typography>
                            <Typography >
                                {starList.map((list) => (
                                    <img src={star} alt="start" />
                                ))}
                            </Typography>
                        </Typography>
                    </Typography>
                </Typography>
            </Typography>
            <Typography style={{ width: '50%', }}>
                <img src={banner} alt="banner" className={styles.Image} />
            </Typography>
        </Typography>
    );
}

export default Content;

const useStyles = makeStyles({
    Container: {
        border: '1px solid black',
        background: 'white',
        display: 'flex',
        width: '100%'
    },
    Image: {
        width: '100%',
        height:'100%'
    },
    StartNow: {
        display: 'flex',
        gap: '2em',
        marginTop: '20px!important'
    },
    Rating:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'        
    }
})

import React,{useState} from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Carousel from './Carousel';


function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function Navbar(props) {

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    return (
        <>
            {/* 
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        My app
                    </Typography>
                    <Link to="/" className='text-white'>  <Button color="inherit" >Home</Button></Link>

                    <Link to="/about">  <Button color="inherit">About</Button></Link>
                    <Link to="/signIn">  <Button color="inherit">SignIn</Button></Link>
                </Toolbar>
            </AppBar> */}


            <React.Fragment>
                <CssBaseline />
                <ElevationScroll {...props}>
                    <AppBar >
                        <Toolbar>
                            <Typography variant="h6" style={{ flexGrow: 1 }} component="div" >
                                MY APP
                            </Typography>

                            <Link to="/" className='text-white button active1 '>  <Button color="inherit" >Home</Button></Link>
                            <Link to="/about" className='text-white button active1'>  <Button color="inherit">About</Button></Link>
                            <Link to="/signIn" className='text-white button active1'>  <Button color="inherit">SignIn</Button></Link>


                            <div class="wrapper">
                                <div class="btn">
                                    <i  aria-hidden="true" className={`fa fa-search ${isHovered ? 'hovered' : ''}`}
                                        onMouseEnter={handleHover}
                                        onMouseLeave={handleMouseLeave}
                                    ></i>
                                    
                                </div>
                                {/* <div class="form">
                                    <label id="search">Enter Your Email address</label><br />
                                    <input type="text" class="input" />
                                </div> */}
                            </div>
                            {/* <div className={`card ${isHovered ? 'hovered' : ''}`}
                                onMouseEnter={handleHover}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img src={props.image} alt={props.title} />
                                <h3>{props.title}</h3>
                                <p>{props.description}</p>
                            </div> */}
                        </Toolbar>
                    </AppBar>
                </ElevationScroll>
                <Toolbar />
                {/* <Carousel>
                <div>
                    <img
                        src="https://www.w3schools.com/howto/img_snow_wide.jpg"
                        alt="img1"
                    />
                </div>
                <div>
                    <img
                        src="https://www.w3schools.com/howto/img_woods_wide.jpg"
                        alt="img2"
                    />
                </div>
                <div>
                    <img
                        src="https://www.w3schools.com/howto/img_lights_wide.jpg"
                        alt="img3"
                    />
                </div>
            </Carousel> */}
                {/* <Container>
                
          
                    <Box sx={{ my: 2 }}>
                        {[...new Array(12)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                            )
                            .join('\n')}
                    </Box>
                </Container> */}
            </React.Fragment>
        </>
    )
}



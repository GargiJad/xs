import React, { useState, useEffect, useRef } from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import { CardMedia, CardContent, Typography, Container, Grid } from '@material-ui/core';
import img from '../assets/images/Rectangle 1.png'
import img1 from '../assets/images/Rectangle 1.png'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import SimpleSlider from '../components/SimpleSlider';
import Carousel from '../components/Carousel';
import LetterMorph from 'react-letter-morph';
import video1 from '../assets/videos/mov_bbb.mp4'
import ReactPlayer from 'react-player';
import Card from '../components/Card';



const items = [
    {

        image: img,
    },
    {

        image: img1,
    },
    {

        image: img,
    },
    // Add as many items as you want
];



// const Item = ({ item }) => {
//     return (
//         <Card>
//             <CardMedia
//                 style={{ height: '150px' }}
//                 image={item.image}
//                 title={item.name}
//             />
//             <CardContent>
//                 <Typography variant="h6">{item.name}</Typography>
//             </CardContent>
//         </Card>
//     );
// };

const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
        return <div className="timer"></div>;
    }

    return (
        <div className="timer">
            {/* <div className="text">Remaining</div> */}
            <div className="value">{remainingTime}</div>
            <div className="text"></div>
        </div>
    );
};

function Home() {

    const playerRef = useRef(null);
    const [counter, setCounter] = useState(60);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    return (
        <>
            <Carousel>
                <div>
                    <img
                        src="https://www.w3schools.com/howto/img_snow_wide.jpg"
                        alt="img1"
                    />
                    {/* <ReactPlayer ref={playerRef} url={video1} controls={true} className='videostyle'/> */}

                </div>
                <div>
                    <img
                        src="https://www.w3schools.com/howto/img_woods_wide.jpg"
                        alt="img2"
                        className='animated-image '
                    />
                </div>
                <div>
                    <img
                        src="https://www.w3schools.com/howto/img_lights_wide.jpg"
                        alt="img3"
                    />
                </div>

            </Carousel>

            <div className='section'>
                <Container>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid xs={12} className='text-center'>
                            <LetterMorph
                                words={[' SUSTAINABLE', 'EXHIBITS', 'SUSTAINABLE1']}
                                duration={1000}
                                effect="wave"
                                fontSize={100}
                                fontWeight={700}
                                width={500}
                                height={300}
                                lineWidth={2}
                                colors={['#ff0047', '#ff0049']}
                            >
                            </LetterMorph>
                            {/* <LetterMorph text="Hello World!" duration={1000} effect="morph" fontSize={50} fontWeight={700} >
                            </LetterMorph> */}
                        </Grid>

                    </Grid>

                    <Grid
                        container
                        spacing={4}

                        justify="center"
                    >
                        <Grid item xs={12} sm={6} md={4}>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card />
                        </Grid>
                    </Grid>
                </Container>
                <SimpleSlider />


            </div>
            <h1 className='card_title'>about</h1>

            {/* <h1 className='counter'> {counter}</h1> */}
            {/* <div className='section'>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid xs={4}>
                        <div className="App">
                            <h1>

                                <br />

                            </h1>
                            <div className="timer-wrapper">
                                <CountdownCircleTimer
                                    isPlaying
                                    duration={59}
                                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                                    colorsTime={[10, 6, 3, 0]}
                                    onComplete={() => ({ shouldRepeat: true, delay: 1 })}
                                >
                                    {renderTime}
                                </CountdownCircleTimer>
                            </div>
                    
                        </div>
                    </Grid>
                    <Grid xs={4}>
                        <div className="App">
                            <h1>
                                <br />
                            </h1>
                            <div className="timer-wrapper">
                                <CountdownCircleTimer
                                    isPlaying
                                    duration={30}
                                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                                    colorsTime={[10, 6, 3, 0]}
                                    onComplete={() => ({ shouldRepeat: true, delay: 1 })}
                                    className='w-100'
                                >
                                    {renderTime}
                                </CountdownCircleTimer>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={4}>
                        <div className="App">
                            <h1>

                                <br />

                            </h1>
                            <div className="timer-wrapper">
                                <CountdownCircleTimer
                                    isPlaying
                                    duration={60}
                                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                                    colorsTime={[10, 6, 3, 0]}
                                    onComplete={() => ({ shouldRepeat: true, delay: 1 })}
                                >
                                    {renderTime}
                                </CountdownCircleTimer>
                            </div>
                  
                        </div>
                    </Grid>
                </Grid>
            </Container>

            </div> */}


        </>
    )
}

export default Home;
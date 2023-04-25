import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import { Facebook, Twitter, Instagram } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <>
      <footer>
        <div className="top">
          <div className="pages">
            <ul>
              <h3>Brand Name</h3>
              <li><a href="#">Home</a></li>
              <li><a href="#">Catalog</a></li>
              <li><a href="#">Search</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>

            <ul>
              <h3>Careers</h3>
              <li><a href="#">Apply Online</a></li>
              <li><a href="#">Available Positions</a></li>
            </ul>

            <ul>
              <h3>About Us</h3>
              <li><a href="#">Meet Our Team</a></li>
              <li><a href="#">Our Responsibilities</a></li>
              <li><a href="#">Our Codes</a></li>
              <li><a href="#">Our Values</a></li>
            </ul>
          </div>
          <div class="newsletter">
            {/* <h3>Stay in Touch</h3> */}
            <form>
              <input
                type="email"
                name="newsletter_email"
                id="newsletter_email"
                placeholder="Email"
              />
              <input type="button" value="Submit" />
            </form>
          </div>
        </div>
        <div className="social social-icons">
          <Facebook />
          <Twitter />
          <Instagram />

        </div>
        <div className="info">
          <div className="legal">
            <a href="#">Terms & Conditions</a><a href="#">Privacy Policy</a>
          </div>
          <div className="copyright">2023 Copyright &copy;</div>
        </div>
      </footer>
      {/* <footer className={classes.footer}>
        <Container>
          <Grid>
            <Grid xs={12}>
              <Typography variant="h6" align="center" gutterBottom>
                Footer
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <div className="social-icons">
                <Facebook />
                <Twitter />
                <Instagram />
              </div>
            </Grid>
          </Grid>
        </Container>

      </footer>
      <div className="footer">

        <p>Copyright © 2023</p>
      </div> */}



    </>

  );
}

export default Footer;
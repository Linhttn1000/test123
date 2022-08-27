import { ContactMail, Facebook, Twitter, Instagram, YouTube, Wifi, Pinterest } from '@mui/icons-material';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={3}>
            <Stack>
              <Typography>Seed feedback</Typography>
              <Stack direction='row' spacing={2}>
                <ContactMail />
                <Typography>Typography</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction='row' spacing={2} alignItems='center' justifyContent='center'>
              <Button>
                <Facebook />
              </Button>
              <Button>
                <Twitter />
              </Button>
              <Button>
                <Instagram />
              </Button>
              <Button>
                <YouTube />
              </Button>
              <Button>
                <Pinterest />
              </Button>
              <Button>
                <Wifi />
              </Button>
            </Stack>
            <Stack>
              <Stack direction='row' spacing={2}>
                <ContactMail />
                <Typography>Typography</Typography>
              </Stack>
              <Stack direction='row' spacing={2}>
                <ContactMail />
                <Typography>Typography</Typography>
              </Stack>
            </Stack>
            <Typography>2022 © UIT | All rights reserved</Typography>
          </Grid>
          <Grid item xs={3}>
            <Stack>
              <Stack direction='row' spacing={2}>
                <ContactMail />
                <Typography>Typography</Typography>
              </Stack>
              <Stack direction='row' spacing={2}>
                <ContactMail />
                <Typography>Typography</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;

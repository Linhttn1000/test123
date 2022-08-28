import { Button, Grid, Stack, Typography } from '@mui/material';
import { FOOTER_ADDITIONAL_INFO as additionalInfo, FOOTER_SOCIAL_NETWORKS as socialLinks } from './footerConfig';

const Footer = () => {
  return (
    <>
      <Stack direction='column' spacing={4} padding={8}>
        <Stack direction='row' spacing={2} alignItems='center' justifyContent='center'>
          {socialLinks.map((socialItem) => (
            <Button key={socialItem.id} variant='outlined'>
              {socialItem.icon}
            </Button>
          ))}
        </Stack>
        <Grid container spacing={2}>
          {additionalInfo.map((item, idx) => (
            <Grid item xs={4} key={idx}>
              {item.map((subItem) => (
                <Stack key={subItem.id} direction='row' alignItems='center' justifyContent='center' spacing={2}>
                  <span>{subItem.icon}</span>
                  <Typography fontSize={12} marginTop={8}>
                    {subItem.title}
                  </Typography>
                </Stack>
              ))}
            </Grid>
          ))}
        </Grid>
        <Stack justifyContent='center' alignItems='center'>
          <Typography fontSize={12}>2022 © UIT Media | All rights reserved</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Footer;

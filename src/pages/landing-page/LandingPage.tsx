import { Box, Grid } from '@mui/material';
import Categories from './components/categories';
import Gallery from './components/gallery';
import LandingPageNavigation from './components/landing-page-navigation';
import TagClouds from './components/tag-clouds/index';
import Trending from './components/trending';

const LandingPage = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#F5F5F7',
        }}
      >
        <Trending />
        <LandingPageNavigation />
        <Grid container>
          <Grid item xs={8} paddingX={2}>
            <Gallery />
          </Grid>
          <Grid item xs={4} paddingX={4}>
            <TagClouds />
            <br />
            <Categories />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LandingPage;

import { Box, ImageList } from '@mui/material';
import Card from '../../../../shared/components/card';
import { MOCK_DATA as data } from './mockData';

const Gallery = () => {
  return (
    <>
      <ImageList cols={3} rowHeight='auto' variant='masonry' gap={4}>
        {data.map((item, key) => (
          <Box
            sx={{
              margin: '8px',
            }}
          >
            <Card key={key} imgSrc={item.imgSrc} alt={item.alt} />
          </Box>
        ))}
      </ImageList>
    </>
  );
};

export default Gallery;

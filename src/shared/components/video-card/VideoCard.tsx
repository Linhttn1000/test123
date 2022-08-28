import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

interface IVideoCardProp {
  imageUrl: string;
  title: string;
}

const VideoCard = ({ imageUrl, title }: IVideoCardProp) => {
  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia component='img' height='140' image={imageUrl} alt={title} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Share
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default VideoCard;

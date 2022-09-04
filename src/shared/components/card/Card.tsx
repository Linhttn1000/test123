import { ChatBubble, KeyboardArrowUp, Share, VideoCall, Visibility, VisibilityRounded } from '@mui/icons-material';
import { Chip, IconButton, SvgIcon, Tooltip } from '@mui/material';
import { Stack } from '@mui/system';
import classes from './styles.module.scss';

interface ICardProp {
  imgSrc: string;
  alt: string;
}

const Card = ({ imgSrc, alt }: ICardProp) => {
  return (
    <>
      <div className={classes.card}>
        <div className={classes['card__actions']}>
          <Tooltip title='Quick view' placement='right-end'>
            <IconButton className={classes['card__actions__btn']}>
              <SvgIcon component={KeyboardArrowUp} inheritViewBox />
            </IconButton>
          </Tooltip>
          <Tooltip title='Share' placement='right-end'>
            <IconButton className={classes['card__actions__btn']}>
              <SvgIcon component={Share} inheritViewBox />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes['card__image']}>
          <img src={imgSrc} alt={alt} />
          <div className={classes['card__image__tags']}>
            <Stack spacing={2} direction='row'>
              <Chip
                icon={<SvgIcon component={VideoCall} inheritViewBox />}
                label='Video'
                className={classes['card__image__tags__item']}
              />
              <Chip
                icon={<SvgIcon component={VideoCall} inheritViewBox />}
                label='Video'
                className={classes['card__image__tags__item']}
              />
            </Stack>
          </div>
        </div>
        <div className={classes['card__footer']}>
          <Stack direction='column'>
            <h3 className={classes['card__footer__caption']}>Rolling eyes mp4 demo</h3>
            <Stack direction='row' alignItems='center' justifyContent='space-between' marginTop={2}>
              <div className={classes['card__footer__avatar']}>
                <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' alt='Avatar' />
                <span>king</span>
              </div>
              <Stack direction='row' alignItems='center' justifyContent='center'>
                <div className={classes['card__footer__info']}>
                  <SvgIcon component={ChatBubble} inheritViewBox sx={{ color: '#84849d' }} />
                  <span>0</span>
                </div>
                <div className={classes['card__footer__info']}>
                  <SvgIcon component={VisibilityRounded} inheritViewBox sx={{ color: '#84849d' }} />
                  <span>0</span>
                </div>
                <div className={classes['card__footer__info']}>
                  <SvgIcon component={KeyboardArrowUp} inheritViewBox sx={{ color: '#84849d' }} />
                  <span>0</span>
                </div>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Card;

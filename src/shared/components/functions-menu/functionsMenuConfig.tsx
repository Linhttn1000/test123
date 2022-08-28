import {
  Close,
  FormatAlignJustify,
  FormatAlignLeft,
  Headphones,
  Image,
  Newspaper,
  VideoCall,
} from '@mui/icons-material';

export const FUNCTIONS_MENU_CONFIG = [
  { id: 'newspaper', title: 'News', icon: <Newspaper />, },
  { id: 'image', title: 'Image', icon: <Image /> },
  { id: 'video_call', title: 'Video', icon: <VideoCall /> },
  { id: 'format_align_left', title: 'Poll', icon: <FormatAlignLeft /> },
  { id: 'format_align_justify', title: 'List', icon: <FormatAlignJustify /> },
  { id: 'close', title: 'Trivia Quiz', icon: <Close /> },
  { id: 'headphones', title: 'Music', icon: <Headphones /> },
];

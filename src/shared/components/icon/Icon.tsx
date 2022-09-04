import { SvgIcon } from '@mui/material';

interface IIconProp {
  icon: any;
  color?: string;
  size?: number;
}

const Icon = ({ icon, color = '#84849d', size = 20 }: IIconProp) => {
  return <SvgIcon component={icon} inheritViewBox sx={{ color, fontSize: `${ size }px` }} />;
};

export default Icon;

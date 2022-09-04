import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { CATEGORY_CONFIGS as configs } from './configs';

const Categories = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#fff',
          padding: '12px',
          borderRadius: '16px',
        }}
      >
        <Typography variant='h4'>Categories</Typography>
        <List>
          {configs.map((config) => (
            <ListItem key={config.id} sx={{ borderBottom: '1px solid #f2f5f8' }}>
              <ListItemIcon>{config.icon}</ListItemIcon>
              <ListItemText>{config.title}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default Categories;

import { Box } from './Box';

const Container = ({ children }) => {
  return (
    <Box width={1200} px={20} mx="auto">
      {children}
    </Box>
  );
};

export default Container;

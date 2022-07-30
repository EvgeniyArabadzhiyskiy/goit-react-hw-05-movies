import { Box } from "components/Box";

const NotFoundPage = () => {
  return (
    <Box as="main" textAlign="center" >
        <b style={{ fontSize: 64 }}>404</b>
      <h1>Sorry, we couldn't find that page </h1>
    </Box>
  );
};

export default NotFoundPage;

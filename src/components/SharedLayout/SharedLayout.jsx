import { Suspense } from 'react';
import { Box } from '../Box';
import { Outlet } from 'react-router-dom';
import { Header, SiteNavLink } from './SharedLayout.styled';
import Container from 'components/Container';
// import Loader from 'components/Loader/Loader';


const SharedLayout = () => {
  return (
    <Container>
      <Box display="grid" gridAutoColumns="1fr" gridGap="16px">
        <Header>
          <span>LOGO</span>
          <nav>
            <SiteNavLink to="/">Home</SiteNavLink>
            <SiteNavLink to="/movie">Movie</SiteNavLink>
          </nav>
        </Header>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </Container>
  );
};

export default SharedLayout;
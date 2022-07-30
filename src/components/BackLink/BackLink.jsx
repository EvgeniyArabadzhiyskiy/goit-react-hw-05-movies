import { TbArrowBackUp } from 'react-icons/tb';
import { StyledBackLink } from './BackLink.styled';

const BackLink = ({ to, children }) => {
  return (
    <StyledBackLink to={to}>
      <TbArrowBackUp  />
      {children}
    </StyledBackLink>
  );
};

export default BackLink;

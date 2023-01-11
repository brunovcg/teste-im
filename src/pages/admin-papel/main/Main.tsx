import StyledMain from './Main.styled';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <StyledMain className="im-main">
      <Outlet />
    </StyledMain>
  );
}

export default Main;

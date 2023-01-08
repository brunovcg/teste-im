import StyledHome from './Home.styled';
// import useQueryLogin from '@/queries/user-queries/useMutationLogin';
import { useState } from 'react';
import { UserLoginServicePayload } from '@/services/user-services/userServices.types';
import { useUserDataContext } from '@/context/user-context/userContext';

function Home() {
  const [payload, setPayload] = useState<UserLoginServicePayload>({} as UserLoginServicePayload);

  // const { mutate: getInfo } = useQueryLogin();
  const handleClick = () => console.log(payload);
  const { userData } = useUserDataContext();

  return (
    <StyledHome>
      <h1>HOME</h1>
      xx={JSON.stringify(userData?.username)}
      <br />
      <input type="text" onChange={(e) => setPayload((state) => ({ ...state, username: e.target.value }))} />
      <input type="text" onChange={(e) => setPayload((state) => ({ ...state, password: e.target.value }))} />
      <button onClick={handleClick}>Payload</button>
    </StyledHome>
  );
}

export default Home;

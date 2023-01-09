import StyledHome from './Home.styled';
import { useState } from 'react';
import { UserLoginServicePayload } from '@/services/user-services/userServices.types';
import { useUserDataContext } from '@/context/user-context/userContext';
import { httpHelpers } from '@/helpers';
import { AxiosResponse } from 'axios';

function Home() {
  const [payload, setPayload] = useState<UserLoginServicePayload>({} as UserLoginServicePayload);
  const { userData, setUserData } = useUserDataContext();

  const handleClick = () => {
    httpHelpers
      .request({ baseURL: 'http://localhost:8080', url: '/login', method: 'post', payload })
      .then((res: AxiosResponse) => {
        setUserData(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error.data));
  };

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

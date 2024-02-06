import {useRecoilState} from 'recoil';
import useAuthStorage from 'hooks/useAuthStorage';
import {authState} from 'libs/recoil/states/auth';

/** 프로젝트 최상단에서 user 데이터 불러오기  */
export default function useInitialData() {
  const {token} = useAuthStorage();

  const [authData, setAuthData] = useRecoilState(authState);

  // Todo: navigate login page
  const isVerifyTokenError = false;
  isVerifyTokenError;

  const isVerifyTokenLoading = false;

  return {authData, setAuthData, token, isVerifyTokenLoading};
}

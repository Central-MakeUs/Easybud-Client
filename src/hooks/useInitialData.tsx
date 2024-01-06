import useAuthStorage from 'hooks/useAuthStorage';

/** 프로젝트 최상단에서 user 데이터 불러오기  */
export default function useInitialData() {
  // Todo: get user info using token
  const {token} = useAuthStorage();
  token;

  // Todo: check authenticated
  const isAuthenticated = true;
  // Todo: navigate login page
  const isVerifyTokenError = false;
  isVerifyTokenError;

  const isVerifyTokenLoading = false;

  return {isAuthenticated, isVerifyTokenLoading};
}

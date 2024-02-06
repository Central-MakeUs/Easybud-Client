import {useCallback} from 'react';
import {useRecoilState} from 'recoil';
import {TokenType} from 'types/token';
import {tokenState} from 'libs/recoil/states/token';

/** auth token manager */
export default function useAuthStorage() {
  const [token, setToken] = useRecoilState(tokenState);

  const isEmptyToken =
    token?.accessToken?.length === 0 && token?.refreshToken?.length === 0;

  function setAuthData({
    accessToken,
    refreshToken,
  }: {
    accessToken: TokenType['accessToken'];
    refreshToken: TokenType['refreshToken'];
  }) {
    setToken({accessToken, refreshToken});
  }

  const clear = useCallback(() => {
    if (isEmptyToken) {
      return;
    }

    setToken({accessToken: null, refreshToken: null});
  }, [isEmptyToken, setToken]);

  return {
    token,
    setAuthData,
    clear,
  };
}

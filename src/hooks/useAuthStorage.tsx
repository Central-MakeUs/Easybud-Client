import {tokenState} from 'libs/recoil/states/token';
import {TokenType} from 'libs/recoil/types';
import {useCallback} from 'react';
import {useRecoilState} from 'recoil';

/** auth token manager */
export default function useAuthStorage() {
  const [token, setToken] = useRecoilState(tokenState);

  const isEmptyToken = token?.length === 0;

  function setAuthData({accessToken}: {accessToken: TokenType}) {
    setToken(accessToken);
  }

  const clear = useCallback(() => {
    if (isEmptyToken) {
      return;
    }

    setToken(null);
  }, [isEmptyToken, setToken]);

  return {
    token,
    setAuthData,
    clear,
  };
}

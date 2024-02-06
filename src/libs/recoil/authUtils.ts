import {DefaultValue} from 'recoil';
import localStorage from 'libs/async-storage';
import {TokenType} from 'types/token';

type EffectValue<T> = T | DefaultValue;

type EffectProps<T> = {
  setSelf: (value: EffectValue<T>) => void;
  onSet: (
    effect: (
      newValue: EffectValue<T>,
      oldValue: EffectValue<T>,
      isReset: boolean,
    ) => void,
  ) => void;
};

export const authLocalStorageEffect =
  (accessTokenKey: string, refreshTokenKey: string) =>
  ({setSelf, onSet}: EffectProps<TokenType>) => {
    const loadSavedValues = async () => {
      const savedAccessToken = await localStorage.get(accessTokenKey);
      const savedRefreshToken = await localStorage.get(refreshTokenKey);

      if (savedAccessToken !== null && savedRefreshToken !== null) {
        setSelf({
          accessToken: savedAccessToken,
          refreshToken: savedRefreshToken,
        });
      }
    };

    loadSavedValues();

    onSet((newValue, _, isReset) => {
      if (isReset || newValue === null || newValue === undefined) {
        localStorage.remove(accessTokenKey);
        localStorage.remove(refreshTokenKey);
      } else {
        if (newValue instanceof DefaultValue) {
          localStorage.remove(accessTokenKey);
          localStorage.remove(refreshTokenKey);
        } else {
          if ('accessToken' in newValue!) {
            localStorage.set(accessTokenKey, newValue.accessToken);
          }
          if ('refreshToken' in newValue!) {
            localStorage.set(refreshTokenKey, newValue.refreshToken);
          }
        }
      }
    });
  };

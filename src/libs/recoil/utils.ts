import localStorage from 'libs/async-storage';
import {DefaultValue, SerializableParam} from 'recoil';

type EffectType<T> = {
  setSelf: (value: T | DefaultValue) => void;
  onSet: (
    effect: (
      newValue: T | DefaultValue,
      oldValue: T | DefaultValue,
      isReset: boolean,
    ) => void,
  ) => void;
};

export const localStorageEffect =
  <T extends SerializableParam>(key: string) =>
  ({setSelf, onSet}: EffectType<T>) => {
    const loadSavedValue = async () => {
      const savedValue = await localStorage.get(key);
      if (savedValue !== null) {
        setSelf(savedValue);
      }
    };

    loadSavedValue();

    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.remove(key);
      } else {
        if (newValue instanceof DefaultValue) {
          localStorage.remove(key);
        } else {
          localStorage.set(key, newValue);
        }
      }
    });
  };

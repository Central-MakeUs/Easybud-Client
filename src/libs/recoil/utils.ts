import localStorage from 'libs/async-storage';
import {DefaultValue, SerializableParam} from 'recoil';

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

export const localStorageEffect =
  <T extends SerializableParam>(key: string) =>
  ({setSelf, onSet}: EffectProps<T>) => {
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

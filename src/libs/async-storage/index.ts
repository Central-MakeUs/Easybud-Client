import AsyncStorage from '@react-native-async-storage/async-storage';

type SerializableParam =
  | string
  | number
  | boolean
  | object
  | null
  | undefined
  | Symbol;

type StorageType = {
  get(key: string): Promise<string | null>;
  set(key: string, value: string): Promise<void>;
  remove(key: string): Promise<void>;
  clearAll(): Promise<void>;
};

export class LocalStorage implements StorageType {
  private serialize = <T extends SerializableParam>(value: T): string => {
    return JSON.stringify(value);
  };

  private deserialize = (value: string | null) => {
    if (value === null) return null;
    try {
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  };

  async get(key: string) {
    try {
      const value = await AsyncStorage.getItem(key);
      return this.deserialize(value);
    } catch (e) {
      console.error('Error reading key: ' + key, e);
      return null;
    }
  }

  async set(key: string, value: SerializableParam) {
    try {
      await AsyncStorage.setItem(key, this.serialize(value));
    } catch (e) {
      console.error('Error setting key: ' + key, e);
    }
  }

  async remove(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing key: ' + key, e);
    }
  }

  async clearAll() {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.error('Error clearing the AsyncStorage', e);
    }
  }
}

const localStorage = new LocalStorage();

export default localStorage;

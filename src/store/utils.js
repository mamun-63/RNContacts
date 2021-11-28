import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const usePersistor = ({reducer, name, whitelist, blacklist}) =>
  persistReducer(
    {
      key: name,
      storage: AsyncStorage,
      whitelist,
      blacklist,
    },
    reducer,
  );
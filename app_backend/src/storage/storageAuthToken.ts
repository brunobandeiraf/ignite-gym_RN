import AsyncStorage from '@react-native-async-storage/async-storage';

import { AUTH_STORAGE } from '@storage/storageConfig';

// Salva o token do usuário logado
export async function storageAuthTokenSave(token: string) {
  await AsyncStorage.setItem(AUTH_STORAGE, token);
}

// Busca o token do usuário no dispositivo
export async function storageAuthTokenGet() {
  const token = await AsyncStorage.getItem(AUTH_STORAGE);

  return token;
}
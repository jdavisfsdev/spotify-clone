import { atom } from 'recoil';

export const playlistState = atom({
  key: 'playlistState',
  default: null,
});

export const playlistIdState = atom({
  // key must be unique, cant have two atoms with same key
  key: 'playlistIdState',
  default: '37i9dQZF1DX0XUsuxWHRQd',
});

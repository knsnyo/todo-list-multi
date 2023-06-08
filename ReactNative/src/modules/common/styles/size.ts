import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const rem = (size: number) => `${size * 10}px`;
export const vw = (size: number) => `${Math.floor((width / 100) * size)}px`;
export const vh = (size: number) => `${Math.floor((height / 100) * size)}px`;

import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const rem = (size: number) => `${size * 10}px`;
export const vw = (size: number) => `${Math.floor((width / 100) * size)}px`;

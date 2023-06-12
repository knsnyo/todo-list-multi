import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type StackParamList = {
  '/signin': undefined;
  '/signup': undefined;
  '/todos': undefined;
  '/todo': { idx: number };
  '/create': undefined;
  '/update': { idx: number };
};

export type StackNavigationProps = NativeStackNavigationProp<StackParamList>;

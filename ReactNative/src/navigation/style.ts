import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { BLACK, WHITE } from '../modules/common/styles/color';

export const ScreenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: `${BLACK}`,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color: `${WHITE}`,
  },
  headerTitleAlign: 'center',
  title: 'Todo - ReactNative',
  headerTintColor: `${WHITE}`,
  gestureDirection: 'horizontal',
  animation: 'slide_from_right',
};

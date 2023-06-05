import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../@types/root-stack-param-list';
import { Signin } from '../modules/signin/ui/views/Signin';
import { Signup } from '../modules/signup/ui/views/Signup';
import { Todo } from '../modules/todo/ui/views/Todo';
import { ScreenOptions } from './style';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Navigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="/todo" screenOptions={ScreenOptions}>
        <Stack.Screen name="/todo" component={Todo} />
        <Stack.Screen name="/signin" component={Signin} />
        <Stack.Screen name="/signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamList } from '../@types/navigation';
import { Signin } from '../modules/signin/ui/views/Signin';
import { Signup } from '../modules/signup/ui/views/Signup';
import { CreateTodo } from '../modules/todo/ui/views/CreateTodo';
import { Todo } from '../modules/todo/ui/views/Todo';
import { Todos } from '../modules/todo/ui/views/Todos';
import { UpdateTodo } from '../modules/todo/ui/views/UpdateTo';
import { ScreenOptions } from './style';

const Stack = createNativeStackNavigator<StackParamList>();

export function Navigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="/todos" screenOptions={ScreenOptions}>
        <Stack.Screen name="/signin" component={Signin} />
        <Stack.Screen name="/signup" component={Signup} />
        <Stack.Screen name="/todos" component={Todos} />
        <Stack.Screen name="/todo" component={Todo} />
        <Stack.Screen name="/create" component={CreateTodo} />
        <Stack.Screen name="/update" component={UpdateTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

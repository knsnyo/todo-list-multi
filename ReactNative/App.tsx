import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './src/modules/common/redux';
import { Navigation } from './src/navigation/Navigation';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;

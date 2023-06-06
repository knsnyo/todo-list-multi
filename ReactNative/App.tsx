import { QueryClient, QueryClientProvider } from 'react-query';
import { Navigation } from './src/navigation/Navigation';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}

export default App;


import { RouterContainer } from './router';
import './App.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <RouterContainer />
      </AuthProvider>
    </Provider>
  )
}

export default App

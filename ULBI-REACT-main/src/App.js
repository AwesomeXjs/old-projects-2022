import './styles/App.css'
import AppRouter from './components/router/AppRouter'
import { AuthProvider } from './context/AuthProvider'

function App() {
	return (
		<AuthProvider>
			<div className='App'>
				<AppRouter />
			</div>
		</AuthProvider>
	)
}

export default App

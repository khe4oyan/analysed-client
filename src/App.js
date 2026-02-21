// libs
import { Routes, Route, Navigate } from "react-router-dom";

// pages
import HomePage from './pages/HomePage';
import AuditPage from './pages/AuditPage';
import PurchasesPage from './pages/PurchasesPage';
import AuthPage from './pages/AuthPage';
import AuthRegisterPage from './pages/AuthRegisterPage';
import AuthLoginPage from './pages/AuthLoginPage';

// constants
import ROUTES from './constants/routes';

// styles
import './app.css';

function App() {
	return (
		<div>
			<Routes>
				<Route path={ROUTES.HOME} element={<HomePage />}>
					<Route index element={<Navigate to={ROUTES.PURCHASES}/>}/>
					<Route path={ROUTES.AUDIT} element={<AuditPage />}/>
					<Route path={ROUTES.PURCHASES} element={<PurchasesPage />}/>
				</Route>

				<Route path={ROUTES.AUTH} element={<AuthPage />}>
					<Route index element={<Navigate to={ROUTES.AUTH_LOGIN}/>}/>
					<Route path={ROUTES.AUTH_REGISTER} element={<AuthRegisterPage />}/>
					<Route path={ROUTES.AUTH_LOGIN} element={<AuthLoginPage />}/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
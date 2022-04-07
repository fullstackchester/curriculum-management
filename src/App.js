import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './js/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout';
import Curriculum from './pages/Curriculum';
import Faculty from './pages/Faculty';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Container from './components/Container';
import Error from './pages/Error';
import Settings from './pages/Settings';
import Subjects from './pages/Subject/Subjects';
import AddSubject from './pages/Subject/SubjectsAdd';


export default function App() {
	return (
		<div className='h-auto w-full bg-stone-100 '>
			<Router>
				<AuthProvider>
					<Routes>
						<Route index element={<Login />} />
						<Route path='*' element={<Error />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/' element={<Layout />} >
							<Route path='dashboard' element={<Container />} >
								<Route index element={<Dashboard />} />
							</Route>
							<Route path='curriculum' element={<Curriculum />} />
							<Route path='faculty' element={<Container />} >
								<Route index element={<Faculty />} />
							</Route>
							<Route path='profile' element={<Container />} >
								<Route index element={<Profile />} />
								<Route path='edit-profile' element={<EditProfile />} />
							</Route>
							<Route path='subject' element={<Container />} >
								<Route index element={<Subjects />} />
								<Route path='add-subject' element={<AddSubject />} />

							</Route>
							<Route path='settings' element={<Settings />} />
						</Route>

					</Routes>
				</AuthProvider>
			</Router>
		</div>
	)
}

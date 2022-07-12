import {
	BrowserRouter,
	Routes,
	Route,

} from "react-router-dom";

import { Header } from './components/Header'
import { Footer } from './components/Footer'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { NotFound } from "./pages/NotFound";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";


function App() {
	return (
		<>
			<BrowserRouter basename='/food-recipes-react'>
				<Header />
				<main className='container content'>
					<Routes >
						<Route index path='/' element={<Home />} />
						<Route path='about' element={<About />} />
						<Route path='contacts' element={<Contact />} />
						<Route path='category/:name' element={< Category />} />
						<Route path='meal/:id' element={< Recipe />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</main>

			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;

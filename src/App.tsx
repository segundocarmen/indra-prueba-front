import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/home';
import Plans from './pages/plans';
import Summary from './pages/summary';
import Page404 from './pages/404';
import InternalLayout from './pages/InternalLayout';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<InternalLayout />}>
                    <Route path='/plan' element={<Plans />} />
                    <Route path='/summary' element={<Summary />} />
                </Route>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path='/*' element={<Page404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

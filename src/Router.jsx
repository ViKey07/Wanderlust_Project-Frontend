import { Route, Routes } from 'react-router-dom';
import Details from './components/Places/Details';
import Home from './containers/Home';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories/:id" element={<Details />} />

        </Routes>
    );
};
export default Router;

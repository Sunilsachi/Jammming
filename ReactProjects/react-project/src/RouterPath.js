import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Form';
import Login from './Login';

const RouterPath = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Form />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
    );
}

export default RouterPath;
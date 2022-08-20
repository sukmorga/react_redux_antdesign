import { Layout } from 'antd';
import React from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import 'antd/dist/antd.css';

function App() {
    return (
        <Layout>
            <Navbar />
            <Layout.Content>
                <AppRouter />
            </Layout.Content>
        </Layout>
    );
}

export default App;

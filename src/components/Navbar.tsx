import { Menu, Row } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React, { FC } from 'react'
import Event from '../pages/Event';
import Login from '../pages/Login';

const Navbar: FC = () => {
    const auth = false;

    const menuItemsLogin = [
        {
            label: <Login />,
            key: 'Login',
        },
    ];
    const menuItemsAuth = [
        {
            label: <Event />,
            key: 'Event',
        },
        {
            key: 'Logout',
            label: 'Выйти',
        },
    ];
    return (
        <Header>
            <Row justify='end'>
                {auth ?
                    <Menu theme="dark" mode="horizontal" selectable={false} items={menuItemsAuth} />
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false} items={menuItemsLogin} />}
            </Row>
        </Header>
    )
}

export default Navbar
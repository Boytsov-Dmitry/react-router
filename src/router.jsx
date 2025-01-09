import { createBrowserRouter } from 'react-router-dom';

import { Menu } from './layout/Menu';
import { DriftPage } from './components/DriftPage';
import { ForzaPage } from './components/ForzaPage';
import { HomePage } from './components/HomePage';
import { TimeAttackPage } from './components/TimeAttackPage';

import * as rou from './config/routes'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Menu />,
        children: [
            {
                path: rou.HOME_ROUTE,
                exact: true,
                element: <HomePage />
            },
            {
                path: rou.DRIFT_TAXI_ROUTE,
                element: <DriftPage />
            },
            {
                path: rou.TIME_ATTACK_ROUTE,
                element: <TimeAttackPage />
            },
            {
                path: rou.FORZA_KARTING_ROUTE,
                element: <ForzaPage />
            }
        ]

    }
])
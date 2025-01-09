import { Link } from 'react-router-dom';

import { HOME_ROUTE, DRIFT_TAXI_ROUTE, TIME_ATTACK_ROUTE, FORZA_KARTING_ROUTE } from '../config/routes';


export const MainMenu = () => {
    
    return (
        <div className={'menu'}>
            <Link className={'menu__item'} to={HOME_ROUTE}>ГЛАВНАЯ</Link>
            <Link className={'menu__item'} to={DRIFT_TAXI_ROUTE}>ДРИФТ-ТАКСИ</Link>
            <Link className={'menu__item'} to={TIME_ATTACK_ROUTE}>TIME ATTACK</Link>
            <Link className={'menu__item'} to={FORZA_KARTING_ROUTE}>FORZA KARTING</Link>
        </div>
    );
};
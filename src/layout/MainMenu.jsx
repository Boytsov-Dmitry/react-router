import { NavLink } from 'react-router-dom';

import { HOME_ROUTE, DRIFT_TAXI_ROUTE, TIME_ATTACK_ROUTE, FORZA_KARTING_ROUTE } from '../config/routes';


export const MainMenu = () => {
    
    return (
        <div className={'menu'}>
            <NavLink className={'menu__item'} to={HOME_ROUTE}>ГЛАВНАЯ</NavLink>
            <NavLink className={'menu__item'} to={DRIFT_TAXI_ROUTE}>ДРИФТ-ТАКСИ</NavLink>
            <NavLink className={'menu__item'} to={TIME_ATTACK_ROUTE}>TIME ATTACK</NavLink>
            <NavLink className={'menu__item'} to={FORZA_KARTING_ROUTE}>FORZA KARTING</NavLink>
        </div>
    );
};
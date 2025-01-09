import { MainMenu } from './MainMenu'

import { Outlet } from "react-router-dom";



export function Menu() {
    return (
      <div>
        <header >
          <MainMenu className={({ isActive }) => isActive ? menu__item-active : undefined}/>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    )
}
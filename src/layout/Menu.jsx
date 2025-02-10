import { MainMenu } from './MainMenu'

import { Outlet } from "react-router-dom";



export function Menu() {
    return (
      <div>
        <header >
          <MainMenu />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    )
}
import './App.css'
import {FirstPage} from "./pages/FirstPage.tsx";
import {Providers} from "./contexts/Providers.tsx";





export const App = () => {


  return (
    <>
      <h1>useContesxtの勉強</h1>
       <Providers>
            <FirstPage />
       </Providers>
    </>
  )
}




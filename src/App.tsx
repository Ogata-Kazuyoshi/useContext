import './App.css'
import {FirstPage} from "./pages/FirstPage.tsx";
import {Providers} from "./providers/Providers.tsx";





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




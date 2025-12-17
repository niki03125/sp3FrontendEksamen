import './App.css'
import Header from './components/header/Header.jsx'
import { Outlet} from 'react-router';

function App() {

  return (
    <>
     <Header headers={[ { title: "Search", url: "/search" }
      , { title: "Songs", url: "/songs" }
      , { title: "Albums", url: "/albums" }
      , { title: "Artists", url: "/artists" }
    ]}
       />
    <Outlet/>
    </>
  )
}

export default App

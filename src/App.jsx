import './App.css'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/footer.jsx';
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
    <Footer />
    </>
  )
}

export default App

import {Navigate, Route,Routes} from "react-router-dom"
import PageHome from "./Pages/PageHome"
import PageOffnungZeit from "./Pages/PageOffnungZeit"
import PageContact from "./Pages/PageContact"
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to ={"/Home"}/>}/>
        <Route path="/home" element={<PageHome/>}/>
        <Route path="/offnungzeit" element={<PageOffnungZeit/>}/>
        <Route path="/contact" element={<PageContact/>}/>
     <Route path="*" element = {<PageHome/>}/>
      </Routes>
    </div>
  )
}

export default Router

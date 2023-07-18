import {Navigate, Route,Routes} from "react-router-dom"
import PageHome from "./Pages/PageHome"
import PageChat from "./Pages/PageChat"
import PageContact from "./Pages/PageContact"
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to ={"/Home"}/>}/>
        <Route path="/home" element={<PageHome/>}/>
        <Route path="/chat" element={<PageChat/>}/>
        <Route path="/contact" element={<PageContact/>}/>
     <Route path="*" element = {<PageHome/>}/>
      </Routes>
    </div>
  )
}

export default Router

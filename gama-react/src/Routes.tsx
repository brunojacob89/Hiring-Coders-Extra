import { Routes as WrapperRoutes, Route, BrowserRouter  } from "react-router-dom"
import Home from "./pages/Home"
import Contato from "./pages/Contato"

export default function Routes(){

    return (
        <BrowserRouter>
        <WrapperRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/contato/:id" element={<Contato />} />
        </WrapperRoutes>
        </BrowserRouter>
        
    )
}
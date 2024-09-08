import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing/landing.page";
import HomeLayout from "../pages/layout";

const RoutingConfig = () => {
    return (<>
        <Routes>
            <Route path="/" element={<HomeLayout/>}>
                <Route index element={<LandingPage />}></Route>


            </Route>

        </Routes>

    </>
    )
}
export default  RoutingConfig
import { Routes, Route, HashRouter } from "react-router-dom";
// global styles
import "@/common/css/normalize.css";
import "@/common/css/global.scss";

//layout
import PagesLayout from "@/Common/PagesLayout/PagesLayout.jsx";

// page components
import Home from "./Home";
import Staff from "./Staff";
import Contact from "./Contact";

//course work page coponents
import CourseWorkLayout from "./Coursework/Courseworklayout.jsx";
import SunAndMoon from "./CourseWork/SunAndMoon/SunAndMoon.jsx";
import Essay from "./CourseWork/Essay.jsx";
import ResponsiveDesign from "./CourseWork/ResponsiveDesign.jsx";

const MyRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route element={<PagesLayout />}>
                    <Route element={<Home />} path="" />
                    <Route element={<Staff />} path="staff" />
                    <Route element={<Contact />} path="contact" />

                    <Route element={<CourseWorkLayout />} path="course-work">
                        <Route element={<Essay />} path="" />
                        <Route element={<SunAndMoon />} path="sun-and-moon" />
                        <Route
                            element={<ResponsiveDesign />}
                            path="responsive"
                        />
                    </Route>
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default MyRoutes;

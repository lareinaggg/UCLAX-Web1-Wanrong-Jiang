import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";

import Inset from "@/Common/PagesLayout/Inset";

const Courseworklayout = () => {
    return (
        <CourseworklayoutStyled>
            <Inset>
                <h1>Course Work</h1>
                <nav className="sublinks">
                    <NavLink to="/course-work">Essays</NavLink>
                    <NavLink to="/course-work/sun-and-moon">
                        Sun And Moon
                    </NavLink>
                    <NavLink to="/course-work/responsive">Responsive</NavLink>
                </nav>

                <Outlet />
            </Inset>
        </CourseworklayoutStyled>
    );
};

export default Courseworklayout;

const CourseworklayoutStyled = styled.div``;

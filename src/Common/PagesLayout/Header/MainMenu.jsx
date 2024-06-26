import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const MainMenu = ({ onClick }) => {
    return (
        <MainmenuStyled onClick={onClick}>
            <NavLink to={"/"} end>
                Home
            </NavLink>
            <NavLink to={"/staff"}>Menu</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
            <NavLink to={"/course-work"}>Course</NavLink>
        </MainmenuStyled>
    );
};

export default MainMenu;

// prop-types
MainMenu.propTypes = {
    onClick: PropTypes.func,
};

const MainmenuStyled = styled.nav``;

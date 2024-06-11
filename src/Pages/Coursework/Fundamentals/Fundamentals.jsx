import styled from "styled-components";

// Scripts
//import "./scripts/index.js";

// React Components
import ReactComponent from "./ReactComponents";

const Fundamentals = () => {
    return (
        <FundamentalsStyled>
            <h2>JavaScript Fundamentals</h2>

            <ReactComponent title="The big lebowski" showDisc={true} />
            <ReactComponent title="The big lebowski" showDisc={false} />
            <ReactComponent title="The big lebowski" />
        </FundamentalsStyled>
    );
};

export default Fundamentals;

const FundamentalsStyled = styled.div``;

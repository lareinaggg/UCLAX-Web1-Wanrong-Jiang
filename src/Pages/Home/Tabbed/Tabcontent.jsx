import styled from "styled-components";
import PropTypes from "prop-types";
import { breakpoints } from "@/Common/useMediaQuery";

const Tabcontent = ({ curTab }) => {
    const { title, image, text } = curTab;
    return (
        <TabcontentStyled>
            <div className="column1">
                <img src={image} alt={title} />
            </div>

            <div className="column2">
                <h3>{title}</h3>

                <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </TabcontentStyled>
    );
};

export default Tabcontent;

// prop-types

Tabcontent.propTypes = {
    curTab: PropTypes.object.isRequired,
};

const TabcontentStyled = styled.div`
    padding: 20px;
    background-color: teal;

    @media ${breakpoints.isMediumAndUp} {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
    }
    img {
        max-width: 100%;
        display: block;
        margin: 0px auto 15px;
    }

    h3 {
        font-size: 30px;
        color: white;
    }

    p {
        font-size: 18px;
        color: #8cc6c6;
        margin-bottom: 20px;
        line-height: 150%;
    }
`;

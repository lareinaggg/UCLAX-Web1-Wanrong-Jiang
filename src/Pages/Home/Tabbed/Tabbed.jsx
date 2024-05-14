import styled from "styled-components";
import { useState } from "react";

// date
import { tabbedData } from "./tabbedData";
// component
import Tabcontent from "./Tabcontent";
import TabList from "./TabList/TabList";

const Tabbed = () => {
    const [curTab, curTabUpdate] = useState(tabbedData[0]);

    return (
        <TabbedStyled>
            <TabList
                tabs={tabbedData}
                curTab={curTab}
                curTabUpdate={curTabUpdate}
            />
            <Tabcontent curTab={curTab} />
        </TabbedStyled>
    );
};

export default Tabbed;

const TabbedStyled = styled.div``;

import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";
const Essay = () => {
    return (
        <EssayStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`Q1: Explain the difference between HTML, CSS and JavaScript.`}
            >
                When it comes to building websites, three key languages come
                into play: HTML, CSS, and JavaScript. Each serves a unique
                purpose and together they form the backbone of the modern web.
                Let's explore the differences between them: HTML, which stands
                for Hypertext Markup Language. It is the foundation and
                information of every web page. It's a markup language used to
                create the structure and content of a webpage. It's all about
                structuring the content, like organizing text, images, and
                videos into sections like headings, paragraphs, and lists. HTML
                builds a hierarchy to define these elements, kinda like putting
                labels on different parts of a body to know what they are. Now,
                let's talk about CSS, or Cascading Style Sheets. While HTML
                defines the structure and content of a webpage, CSS is
                responsible for its presentation and appearance. CSS allows web
                developers to control things like colors, fonts, layout, and
                spacing. With CSS, you can style individual elements or apply
                styles globally to affect the entire page. It's like the
                decorator of the web, adding visual flair and personality to a
                webpage. Finally, we have JavaScript, often referred to as the
                "programming language of the web." Unlike HTML and CSS, which
                are markup languages, JavaScript is a full-fledged programming
                language that adds interactivity and functionality to web pages.
                With JavaScript, you can create dynamic elements, and user
                interactions, manipulate the DOM (Document Object Model), and
                much more. JavaScript brings web pages to life, making them more
                engaging and interactive for users. It is the key to holding
                everything together and making it an application. In summary,
                HTML provides the structure and content of a webpage, CSS adds
                style and presentation, and JavaScript adds interactivity and
                functionality. Together, these three languages work in harmony
                to create rich and immersive web experiences.
            </SingleEssay>
            <SingleEssay
                question={`Q2: What is the difference between Git and Github?`}
            >
                Git and GitHub are both essential tools in modern software
                development, but they serve different purposes and have distinct
                functionalities. Git is a distributed version control system
                (VCS) that allows developers to track changes to their codebase
                over time. It was created by Linus Torvalds in 2005 to address
                the need for a decentralized and efficient system for managing
                code. With Git, developers can work on projects locally, make
                changes to their code, and commit those changes to a local
                repository. Git enables developers to create branches, merge
                changes, and collaborate with others seamlessly. It provides
                features such as version history, branching and merging, and
                conflict resolution. GitHub, on the other hand, is a web-based
                platform that provides hosting for Git repositories. It was
                founded in 2008 by Tom Preston-Werner, Chris Wanstrath, and PJ
                Hyett and has since become one of the most popular platforms for
                hosting and sharing code. GitHub allows developers to store
                their Git repositories remotely and provides additional
                collaboration features such as issue tracking, pull requests,
                code review, and project management tools. GitHub also offers
                social features such as user profiles, follower networks, and
                the ability to star and fork repositories. In summary, Git is a
                version control system that allows developers to manage their
                code locally, while GitHub is a web-based platform that provides
                hosting for Git repositories and additional collaboration
                features. Git is the underlying technology that powers GitHub,
                and many other similar platforms, but GitHub adds a layer of
                functionality on top of Git, making it easier for developers to
                collaborate on projects and share their code with others.
            </SingleEssay>
            <SingleEssay question={`Q3: Sample Question...`}>
                Answer 3 goes here.
            </SingleEssay>
        </EssayStyled>
    );
};

export default Essay;

const EssayStyled = styled.div``;

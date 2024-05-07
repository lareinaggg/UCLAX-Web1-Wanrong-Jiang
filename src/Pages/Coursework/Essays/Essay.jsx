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
            <SingleEssay
                question={`Q3: What is the difference between JQuery and React?`}
            >
                jQuery and React are both popular JavaScript libraries used for
                building web applications, but they serve different purposes and
                have distinct approaches to front-end development. jQuery is a
                lightweight, feature-rich JavaScript library that simplifies
                HTML document traversal and manipulation, event handling, and
                animation. It provides a concise and easy-to-use syntax for
                performing common tasks, such as selecting elements, modifying
                CSS styles, and handling user interactions. jQuery is primarily
                focused on enhancing the functionality and interactivity of web
                pages in a simple and efficient manner. It works well for small
                to medium-sized projects and is widely supported across
                different browsers. On the other hand, React is a powerful
                JavaScript library developed by Facebook for building user
                interfaces. Unlike jQuery, React follows a component-based
                architecture, where the UI is divided into reusable and
                composable components. These components encapsulate their own
                state and behavior, making it easier to manage complex UIs and
                maintain code consistency. React utilizes a virtual DOM
                (Document Object Model) to efficiently update and render UI
                components, minimizing the need for manual DOM manipulation. It
                also promotes a declarative programming paradigm, allowing
                developers to describe how the UI should look at any given
                state, rather than imperatively manipulating the DOM. In
                summary, while jQuery is focused on simplifying DOM manipulation
                and providing utility functions for web development, React is
                geared towards building dynamic and interactive user interfaces
                through a component-based approach and virtual DOM rendering.
                Depending on the requirements of the project and the developer's
                preferences, either jQuery or React can be a suitable choice for
                front-end development.
            </SingleEssay>
            <SingleEssay
                question={`What is the difference between a Front-End and Back-End Developer?`}
            >
                Front-end and back-end development are two distinct areas within
                the realm of software development, each with its own focus,
                responsibilities, and technologies. Understanding the difference
                between these roles is essential for anyone interested in
                pursuing a career in web development or software engineering.
                Front-end development, often referred to as client-side
                development, involves creating the visible parts of a website or
                web application that users interact with directly. Front-end
                developers primarily work on the user interface (UI) and user
                experience (UX), ensuring that the website or application is
                visually appealing, easy to navigate, and responsive across
                different devices and screen sizes. They use languages such as
                HTML (Hypertext Markup Language), CSS (Cascading Style Sheets),
                and JavaScript to build and style web pages, as well as
                frameworks and libraries like React, Angular, or Vue.js to
                streamline development and enhance functionality. Front-end
                developers are responsible for translating design mockups and
                wireframes into functional code, implementing animations and
                interactive elements, and optimizing performance for a smooth
                user experience. They collaborate closely with designers to
                ensure that the final product aligns with the intended vision
                and meets usability standards. On the other hand, back-end
                development, also known as server-side development, focuses on
                the behind-the-scenes logic and functionality of a website or
                application. Back-end developers build and maintain the server,
                database, and application logic that power the front-end
                interface. They work with programming languages like Python,
                Ruby, Java, or Node.js, as well as frameworks such as Django,
                Ruby on Rails, Spring, or Express.js, to create dynamic and
                scalable web applications. Back-end developers handle tasks such
                as database management, user authentication, server
                configuration, API (Application Programming Interface)
                development, and business logic implementation. They ensure data
                integrity, security, and performance on the server side, often
                working closely with front-end developers and other team members
                to integrate front-end and back-end components seamlessly. In
                summary, while front-end developers focus on creating the visual
                and interactive aspects of a website or application that users
                interact with directly, back-end developers focus on building
                and maintaining the server-side infrastructure and functionality
                that support the front-end interface. Both roles are crucial for
                delivering high-quality web experiences, and many developers
                specialize in either front-end or back-end development, while
                others have skills in both areas, known as full-stack
                developers.
            </SingleEssay>
        </EssayStyled>
    );
};

export default Essay;

const EssayStyled = styled.div``;

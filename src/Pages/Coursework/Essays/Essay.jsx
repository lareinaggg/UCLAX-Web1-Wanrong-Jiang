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
                question={`Q4: What is the difference between a Front-End and Back-End Developer?`}
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
            <SingleEssay
                question={`Q5: In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?`}
            >
                In React, linking to resources such as images, stylesheets, or
                other assets can be accomplished in a few different ways,
                primarily through Root Relative and Document Relative
                paths.Root-Relative Paths Root-relative paths start from the
                root of the web application, regardless of the current
                document’s location. In React, a root-relative path typically
                starts with a slash (/). This method is beneficial when you want
                to reference resources that are consistently located relative to
                the root of your application, ensuring the path remains valid
                regardless of where in the directory structure the referencing
                file resides.Document-Relative Paths Document-relative paths are
                relative to the current document’s location. These paths do not
                start with a slash but with the directory or file name, and they
                change based on the file's position within the directory
                structure. They are suitable for referencing resources that are
                in a known location relative to the referencing file. In
                conclusion, Root-relative paths provide a straightforward way to
                link resources consistently from the application's root.
                Document-relative paths are convenient for resources located
                near the referencing files. Understanding these methods and
                choosing the appropriate one based on the context can greatly
                enhance resource management in React projects.
            </SingleEssay>
            <SingleEssay
                question={`Q6: What is the difference between jpg, gif, png and svg images?`}
            >
                When it comes to digital images, the file formats JPEG (JPG),
                GIF, PNG, and SVG each have unique characteristics and uses.
                Understanding the differences between these formats can help you
                choose the right one for your needs. JPEG (JPG) JPEG, short for
                Joint Photographic Experts Group, is a commonly used format for
                photographic images. The primary advantage of JPEG is its
                ability to compress image data to significantly reduce file
                size, which is beneficial for web use and storage efficiency.
                However, JPEG uses lossy compression, meaning some image quality
                is sacrificed to achieve smaller file sizes. This format is
                ideal for photographs and images with gradients and many colors,
                but it's not suitable for images requiring transparency or for
                graphics with sharp edges and text.GIF GIF, which stands for
                Graphics Interchange Format, is known for its support of simple
                animations. It uses a limited color palette of 256 colors,
                making it less ideal for complex images but suitable for simpler
                graphics, logos, and icons. GIF also supports transparency but
                in a binary manner (either fully transparent or fully opaque).
                Due to its limited color range and support for animations, GIF
                is often used for web graphics, simple animations, and memes.
                However, its file sizes can be relatively large for complex
                animations. PNG PNG, or Portable Network Graphics, is a
                versatile image format that supports lossless compression, which
                means it maintains image quality without losing any data. PNG is
                excellent for images that require transparency, as it supports
                varying levels of opacity (alpha channel). This makes PNG ideal
                for web graphics, logos, and images with text, sharp lines, and
                transparent backgrounds. While PNG files can be larger than
                JPEGs due to their lossless nature, they are preferred when
                image quality and transparency are important. SVG SVG, or
                Scalable Vector Graphics, is fundamentally different from the
                other formats because it is a vector-based format rather than
                raster-based. SVG images are defined using XML text files, which
                describe the shapes, colors, and lines that make up the image.
                This means SVG images can be scaled to any size without losing
                quality, making them ideal for logos, icons, and illustrations
                that need to be displayed at various sizes. SVG also supports
                interactivity and animation, and it is widely used in web design
                for responsive graphics. However, SVG is not suitable for
                detailed photographic images. In conclusion, JPEG is best for
                photographs and detailed images where file size is a concern.
                GIF is suitable for simple animations and graphics with limited
                colors. PNG is preferred for high-quality images that require
                transparency and sharp detail. SVG is ideal for scalable
                graphics such as logos and icons. Understanding these
                differences ensures that you select the appropriate format to
                achieve the best visual and performance results for your images.
            </SingleEssay>
            <SingleEssay
                question={`Q7: Define the following Agile roles: Product Manager, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps.`}
            >
                Product Manager: Responsible for defining the product vision,
                strategy, and roadmap. They prioritize features, align the team
                with business goals, and act as the liaison between stakeholders
                and the development team. Scrum Master: Facilitates the Scrum
                process, ensures the team adheres to Agile practices, removes
                obstacles, and helps the team improve productivity and
                collaboration. UX Designer: Focuses on user experience by
                designing intuitive and user-friendly interfaces. They conduct
                user research, create wireframes, and ensure the product meets
                user needs and expectations. Developer/Engineer: Writes code to
                build the product. They implement features, fix bugs, and
                collaborate with other team members to deliver high-quality
                software. QA/SDET (Quality Assurance/Software Development
                Engineer in Test): Ensures the product meets quality standards.
                They write automated tests, conduct manual testing, identify
                defects, and work closely with developers to ensure a
                high-quality product. DevOps: Manages the infrastructure,
                deployment, and continuous integration/continuous deployment
                (CI/CD) processes. They ensure that code can be efficiently and
                reliably deployed to production and maintain system reliability
                and performance.
            </SingleEssay>
        </EssayStyled>
    );
};

export default Essay;

const EssayStyled = styled.div``;

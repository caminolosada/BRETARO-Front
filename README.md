# BRETARO

Bretaro is a Single Page Application developed with **React** and **Redux** that allows you to manage a book collection. With this application, users can perform CRUD operations (Create, Read, Update, Delete) on their book collection in a simple and efficient way.

Firstly, the page was designed in **Figma** to outline all the interface styles that would be later implemented using **StyledComponents** in each of the created components, always with a strong focus on **accessibility** for all users. Thus, ensuring suitable color contrast, adding alternative text to images, and incorporating aria-label tags where necessary.

Throughout the application development, version control was managed via **GIT**, following a **CI/CD** workflow in the pipeline, such as trunk-based development, overseeing all the code that was committed to the master branch using husky hooks, among others. For maintaining code quality practices, tools like **Eslint** and **Prettier** were utilized. Lighthouse was employed to monitor accessibility, best practices, SEO, and performance aspects.

The Backend code of the application can be consulted at the following link: https://github.com/caminolosada/BRETARO-Back

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=isdi-coders-2023_Camino-Losada-Final-Project-front-202304-bcn)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Camino-Losada-Final-Project-front-202304-bcn)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Camino-Losada-Final-Project-front-202304-bcn&metric=coverage)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Camino-Losada-Final-Project-front-202304-bcn)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Camino-Losada-Final-Project-front-202304-bcn&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Camino-Losada-Final-Project-front-202304-bcn)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Camino-Losada-Final-Project-front-202304-bcn&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Camino-Losada-Final-Project-front-202304-bcn)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Camino-Losada-Final-Project-front-202304-bcn&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Camino-Losada-Final-Project-front-202304-bcn)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Camino-Losada-Final-Project-front-202304-bcn&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Camino-Losada-Final-Project-front-202304-bcn)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Camino-Losada-Final-Project-front-202304-bcn&metric=bugs)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Camino-Losada-Final-Project-front-202304-bcn)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Camino-Losada-Final-Project-front-202304-bcn&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Camino-Losada-Final-Project-front-202304-bcn)

## Features

- Browse the list of available books.
- Add new books to the collection.
- Remove books from the collection.
- Update the information of existing books.

## Upcoming Implementations

- Login: Users will be able to log in to their accounts to access and manage their personalized collection. Once users have logged in, they can create, edit, and delete books in their private collection, which will not be accessible to other users.
- Security measures to protect user data, such as secure password storage and secure authentication via JSON Web Tokens.

## Demo

Currently, there is a demo hosted at the following link: https://bretaro.netlify.app/home

## Technologies Used

- **TypeScript**: programming language that extends JavaScript by adding static types.

- **React**: open-source JavaScript library for building user interfaces.

- **Redux**: JavaScript library for state management in applications.

- **React Router**: library that enables navigation between different views in a React application.

- **Axios**: promise-based HTTP client for making requests to a server.

- **React Testing Library**: testing utility for React applications that allows unit and integration testing.

- **Vite**: fast build tool for modern web applications.

- **Vitest**: set of testing utilities for Vite applications.

- **Jest**: JavaScript testing framework with a focus on simplicity and ease of use.

- **MSW**: testing library enabling the interception and simulation of network requests in web applications for integration and unit testing. This helps simulate responses and conduct tests without relying on a live server.

- **Styled Components**: library that allows writing CSS styles in React components.

## Additional Tools

- **ESLint**: static code analysis tool to identify and report problematic patterns in JavaScript code.

- **Git Hooks Workflows**: development strategy based on working directly on the main branch (trunk) and using Git hooks for quality control and code reviews.

- **Prettier**: code formatting tool that helps maintain consistent code style in the project.

- **SonarCloud**: analysis service that provides continuous inspection and analysis of code quality, security vulnerabilities, and overall maintainability of projects. It helps to identify bugs, code smells, security vulnerabilities, and other code issues by automatically analyzing code on every commit or pull request, offering detailed reports, and providing insights for improvements.

- **Netlify**: web hosting and infrastructure services platform offering comprehensive tools for web development, deployment, and management.

- **Figma**: cloud-based design and prototyping tool used for interface design, prototyping, collaboration, and design systems.

- **Trello**: web-based project management application that allows users to create boards, lists, and cards to organize tasks and projects in a visual and flexible way.

## Setup

1. Clone this repository and install its dependencies using the command `npm i`

2. Start a developmet server using the command `npm run dev`

3. Navigate to the appropriate link of your localhost

## Available cripts

`npm run dev`: starts a development server

`npm run build`: builds the app

`npm run preview`: runs the built app

`npm run lint`: runs ESLint

`npm run test`: runs the unit test for the application

`npm run test:coverage`: shows application's test coverage

## Authors

- [@caminolosada](https://github.com/caminolosada)

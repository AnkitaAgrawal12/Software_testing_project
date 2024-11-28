# Client-Side User Session Testing for Blogging Website

## Project Overview

This project involves testing client-side web applications using a full-stack blogging website as the platform. The codebase, consisting of over 1000 lines, incorporates robust features to provide users with a seamless and engaging experience. Key functionalities include:

- User registration and login.
- Adding posts or articles with thumbnails.
- Exploring and interacting with content shared by other users.
- Profile updates and review sharing.
- Collaborative features to foster community engagement.

## Testing Tools and Setup

### 1. **Jest**
Jest is a JavaScript testing framework designed for simplicity and performance. It is widely used for testing React applications, offering:

- Unit and integration testing support.
- Powerful mocking capabilities.
- Snapshot testing and watch mode for fast feedback.

**Installation:**
npm install --save-dev jest

### 2. **Babel**
Babel is a key tool for developers building React applications. It is a free, open-source JavaScript compiler that allows developers to use the latest JavaScript syntax in older browsers. To use Babel, install required dependencies:

**Installation:**
npm install --save-dev babel-jest @babel/core @babel/preset-env

### 3. **Cypress**
Cypress is an end-to-end testing framework that runs directly in the browser, providing real-time feedback for testing web applications. Its ability to simulate user interactions, debug with ease, and capture detailed logs makes it ideal for testing application workflows and ensuring UI reliability.

**Installation:**
npm install cypress --save-dev

### 4. **React Testing Library**
React Testing Library focuses on testing React components by simulating user interactions and verifying application behavior. It encourages best practices by prioritizing testing from the user's perspective, ensuring that components are accessible, functional, and integrated effectively.

**Installation:**
npm install --save-dev @testing-library/react @testing-library/dom

##Testing

#Team Member 1(Ankita's work)
1. Testing Navbar Logout Behavior (Jest):
    Implemented unit tests for the NavbarComponent to ensure proper logout functionality.
    Validated removal of session data (localStorage, sessionStorage, and cookies).

2. Login Page Testing (Jest):
    Designed unit tests for the LoginPage component to validate form rendering and behavior.
    Mocked API calls using axios to handle successful login, invalid credentials, and unexpected errors.

3. Testing with Cypress:
    Wrote Cypress tests to simulate real user flows for login and logout functionalities.
    Intercepted and mocked API responses for login requests to test session management.
    Verified session persistence using localStorage and ensured proper redirection to the homepage or login page after login/logout actions.

4. Session Management Verification:
    Thoroughly tested the behavior of session storage and navigation to maintain user experience integrity during login and logout flows.
    


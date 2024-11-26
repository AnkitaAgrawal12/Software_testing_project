This document provides an overview of the testing strategy implemented in the ProsePetal project using Jest and Cypress.

Project Overview
ProsePetal is a web application designed for blogging with functionalities including user authentication, post creation, and activity tracking. This documentation highlights the unit, integration, and end-to-end testing mechanisms employed to ensure the application's robustness.
Testing Tools
Jest

    Purpose: Unit and integration testing for the React frontend components.
    Features:
        Mocking API calls.
        Snapshot testing for UI components.
        Coverage reporting.

Cypress

    Purpose: End-to-end testing for the complete user flow in the application.
    Features:
        Simulates user interactions.
        Validates DOM elements and API integration.
        Comprehensive error handling and debugging tools.
        
Testing
Team Member 1(Ankita's work)
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
    

Team Member 2(Sejal's work)
1. Session Control Implementation:
    Developed mechanisms for user session management, ensuring secure and efficient tracking of user activities across the application.
    Integrated functionality to store, retrieve, and clear session-related data such as tokens and user information using localStorage, sessionStorage, and cookies.
    
2.Cypress Testing:
    Designed and implemented robust Cypress tests for end-to-end testing of key functionalities:
    	Navigation Tests: Testing navigation across key routes, ensuring seamless user transitions.
        mainpage.cy.js: Validated the main page's features, ensuring user interactions and components function as expected.
        homepage.cy.js: Tested the homepage's layout and actions, confirming seamless navigation and component rendering.
        newpost.cy.js : Validating the new post creation workflow and session-based behaviors, Verified auth token retrieval from local storage for authorization headers in API requests.
    Ensured test coverage for login, logout, and session data validation, simulating real-world scenarios.
    Utilized Cypress to intercept API calls for login and logout, ensuring secure and accurate data flow between the frontend and backend.
    
3. Error Handling in Tests:
    Verified error scenarios, such as invalid credentials or expired sessions, to ensure the application handles them gracefully.
    Tested redirections (e.g., to the login page after logout) and cleared session data.
    
4. Comprehensive Session Management: 
    Validated scenarios for token-based session handling, including login, logout, and token invalidation across tabs.

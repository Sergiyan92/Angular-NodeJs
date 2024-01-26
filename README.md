### Angular NodeJs Project

This project is a web application built with Angular on the front end and Node.js on the back end. It incorporates features such as user authentication, dashboard display, and assessment reports. The application allows users to log in, view their assessment reports, and visualize assessment data using graphs.

#### Features:

- **User Authentication:**

  - Secure login functionality using tokens.
  - User role management (Admin and User).

- **Dashboard:**

  - User-specific dashboard displaying assessment reports.
  - Admin dashboard with additional navigation for admin-specific actions.

- **Assessment Reports:**

  - Display of assessment reports on the user dashboard.
  - Visualization of assessment data using graphs.

#### How to Use:

1. Log in with valid credentials.
2. View your assessment reports on the dashboard.
3. Click on a specific assessment report to see detailed graphs.

#### Technologies Used:

- **Angular:** Front-end framework for building dynamic web applications.
- **Node.js:** Back-end runtime environment for server-side development.
- **Express:** Web application framework for Node.js.
- **API Integration:** Connects to internal APIs for user authentication and data retrieval.

#### Installation:

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the Angular app:
   ```bash
   npm run start-angular
   ```
5. Run the Node.js server:
   ```bash
   npm run start-node
   ```
6. Open `http://localhost:3000/` in your browser.

#### Acknowledgments:

The application uses custom APIs for user authentication and fetching assessment data. Graph data is retrieved from the `/api/userassessments/graph` endpoint.

#### Contributors:

Serhii Kondratchuk

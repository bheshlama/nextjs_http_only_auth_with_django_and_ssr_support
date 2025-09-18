# Next.js HTTP-Only Auth with Django Backend

This project is a full-stack authentication boilerplate that demonstrates how to implement secure, modern authentication using HTTP-only cookies. It consists of a Django backend (REST API) and a Next.js frontend, providing a robust foundation for web applications that require secure user authentication.

## Features

- **Django Backend**

  - RESTful API for authentication and user management
  - JWT-based authentication with HTTP-only cookies for enhanced security
  - User registration, login, logout, token refresh, and email verification endpoints
  - Modular app structure for easy extension

- **Next.js Frontend**
  - Modern React (Next.js) app with TypeScript
  - Secure login, registration, password reset, and email verification flows
  - Uses HTTP-only cookies for authentication (no tokens in localStorage)
  - React Query for data fetching and state management
  - Modular, scalable folder structure

## Folder Structure

```
backend/   # Django REST API
frontend/  # Next.js (React) frontend
```

## Getting Started

### Backend (Django)

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies (preferably in a virtual environment):
   ```bash
   pip install -r requirements.txt
   ```
3. Run migrations and start the server:
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

### Frontend (Next.js)

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies (use yarn):
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   yarn dev
   ```

## Security Notes

- Authentication tokens are stored in HTTP-only cookies, making them inaccessible to JavaScript and reducing XSS risks.
- CSRF protection is recommended for all state-changing requests.

## Global State Management

The Next.js frontend uses Redux Toolkit for global state management. The store is defined in `frontend/src/core/store/store.ts` and combines multiple slices, such as `authRoot` (for authentication state) and `appRoot` (for app-wide state). This setup allows for scalable, predictable state management across the application.

Key points:

- **Redux Toolkit** is used for easier and more efficient Redux setup.
- **Slices** like `authRootSlice` manage authentication state (user, loading, isAuthenticated, etc.).
- **Store Provider** wraps the app to provide access to the global state.
- **Typed hooks** (`useTypedSelector`, `useTypedDispatch`) are used for type-safe state access and dispatching actions.

You can find the store implementation in:

```
frontend/src/core/store/store.ts
```

## License

This project is open-source and available under the MIT License.

---

Feel free to customize this boilerplate for your own projects!

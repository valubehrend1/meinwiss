# Refactored Authentication

This set of components provides complete authentication functionality including:

- Login
- Registration
- Switching between forms
- Loading state and error handling
- Preparation for integration with real API

## Structure

```
/components/Auth/
  ├── AuthCard.tsx       # Main component that toggles between login and registration
  ├── LoginForm.tsx      # Login form
  ├── RegisterForm.tsx   # Registration form
  ├── AuthStyles.tsx     # Shared styles
  └── index.ts           # Exports

/hooks/
  └── useAuth.ts         # Custom hook for authentication logic

/utils/
  └── authUtils.ts       # Utility functions for authentication

/types/components/
  └── auth.ts            # Authentication-related types
```

## Usage

Simply import and use `AuthCard` in your routes:

```tsx
import { AuthCard } from './components/Auth';

function AuthPage() {
  return (
    <div className="auth-page">
      <AuthCard initialMode="login" />
    </div>
  );
}
```

## Features

1. **Form switching**: Users can switch between login and registration forms.

2. **State management**: Uses React hooks to handle form state.

3. **Validation**: Includes basic form validation.

4. **API-ready**: The structure is prepared to integrate with real APIs.

5. **Modular styles**: Styles are reusable and easy to customize.

## Expansion

To expand this functionality:

1. Implement real API calls in `authUtils.ts`
2. Add more validations as needed
3. Integrate with a global state management system like Redux if necessary

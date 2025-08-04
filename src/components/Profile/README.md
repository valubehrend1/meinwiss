# User Profile Components

This directory contains components related to user profile management in the Lupai application.

## File Structure

- **ProfileSettings.tsx** - Main component that organizes the profile settings page
- **ProfileForm.tsx** - Form for editing profile information and changing password
- **AvatarSection.tsx** - Displays the avatar with user initials
- **ProfileStyles.ts** - Centralized styles file for all profile components

## Related Files Outside This Folder

### Types
- `/src/types/components/profile.ts` - Defines interfaces and types for profile components:
  - `UserProfile` - User profile data
  - `ProfileFormData` - Edit form data
  - `ProfilePageProps` - Props for the main component
  - `ProfileFormProps` - Props for the form
  - `AvatarSectionProps` - Props for the avatar component

### Hooks
- `/src/hooks/useProfile.ts` - Custom hook to handle profile business logic:
  - Loads profile data
  - Manages loading and error states
  - Updates profile information

### Utilities
- `/src/utils/profileUtils.ts` - Functions to interact with the API:
  - `getUserProfile` - Gets profile data
  - `updateUserProfile` - Updates profile data

## Features

1. **Profile Display**
   - Shows the user's full name
   - Displays an avatar with the user's initials

2. **Personal Data Editing**
   - Allows editing first and last name
   - Allows updating email address

3. **Password Management**
   - Allows changing the current password
   - Validates new password matching

4. **Error and State Handling**
   - Displays error messages
   - Loading indicators during asynchronous operations
   - Success notifications

## How to Use

The main `ProfileSettings` component optionally accepts a `userId`:

```tsx
<ProfileSettings userId="user-123" />
```

If no userId is provided, it will attempt to load the profile of the currently authenticated user.

## Styles

All styles are centralized in `ProfileStyles.ts` to facilitate maintenance and ensure consistency. Components use the styled components defined in this file instead of inline styles.

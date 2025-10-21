# Authentication Setup Guide

## Overview
This application includes a complete login system with admin credentials stored in environment variables.

## Setup Instructions

### 1. Create Environment File

Create a `.env.local` file in the root directory of your project:

```bash
# Admin Authentication Credentials
NEXT_PUBLIC_ADMIN_USERNAME=admin
NEXT_PUBLIC_ADMIN_PASSWORD=sports_card_admin_2024
```

### 2. Customize Your Credentials

**Important:** Change the default credentials for security!

```bash
NEXT_PUBLIC_ADMIN_USERNAME=your_custom_username
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password
```

### 3. Default Credentials

If no `.env.local` file is found, the system will use these defaults:
- **Username:** `admin`
- **Password:** `sports_card_admin_2024`

## Features

### ✅ Implemented Features

1. **Authentication Context** (`src/contexts/AuthContext.tsx`)
   - Global authentication state management
   - Login/logout functionality
   - Session persistence using localStorage

2. **Protected Dashboard** (`src/components/ProtectedDashboard.tsx`)
   - Blocks access to unauthorized users
   - Shows login prompt for unauthenticated users
   - Automatically displays dashboard after login

3. **Login Modal** (`src/components/AuthModal.tsx`)
   - Beautiful animated login form
   - Username/password authentication
   - Error handling and validation
   - Password visibility toggle

4. **Header Integration** (`src/components/Header.tsx`)
   - Shows logged-in user's username
   - Login button for guests
   - Logout button for authenticated users

5. **Environment-Based Credentials**
   - Credentials stored in `.env.local`
   - Easy to customize and deploy

## Usage

### Login Flow

1. Visit the application
2. If not authenticated, you'll see a login prompt
3. Enter your credentials:
   - Default: `admin` / `sports_card_admin_2024`
4. Click "Sign In"
5. Access granted to the dashboard!

### Logout

- Click the logout icon (🚪) in the header
- You'll be redirected to the login screen

## Security Notes

⚠️ **Important Security Considerations:**

1. **Change Default Credentials:** Always use custom credentials in production
2. **Environment Variables:** Never commit `.env.local` to version control
3. **Client-Side Auth:** This is a simple client-side authentication suitable for demos. For production:
   - Use server-side authentication
   - Implement JWT tokens
   - Add password hashing
   - Use a proper authentication service (Auth0, NextAuth, etc.)

## File Structure

```
src/
├── contexts/
│   └── AuthContext.tsx          # Authentication state management
├── components/
│   ├── AuthModal.tsx             # Login modal component
│   ├── ProtectedDashboard.tsx    # Protected route wrapper
│   └── Header.tsx                # Header with login/logout
├── app/
│   ├── layout.tsx                # AuthProvider wrapper
│   └── page.tsx                  # Protected main page
└── .env.local                    # Environment variables (create this!)
```

## Troubleshooting

### Login Not Working?

1. Check your `.env.local` file exists
2. Verify credentials match exactly
3. Clear localStorage and try again
4. Restart the development server

### Session Persists After Logout?

- Clear browser localStorage
- Hard refresh the page (Ctrl+Shift+R)

## Next Steps for Production

For a production-ready authentication system, consider:

1. **Backend Authentication API**
   - Implement proper user database
   - Use bcrypt for password hashing
   - Generate secure JWT tokens

2. **NextAuth.js Integration**
   - Use NextAuth for production-grade auth
   - Support multiple providers (Google, GitHub, etc.)
   - Built-in session management

3. **Environment Security**
   - Move to server-side only env variables
   - Use `NEXT_PUBLIC_` prefix only for truly public variables
   - Implement proper secrets management

4. **Additional Features**
   - Password reset functionality
   - Multi-factor authentication
   - Role-based access control
   - Audit logging


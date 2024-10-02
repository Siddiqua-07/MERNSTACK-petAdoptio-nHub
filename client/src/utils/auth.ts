// src/utils/auth.ts

interface User {
    username: string;
    // Add other user properties as needed
  }
  
  export const isAdmin = (user: User | null | undefined): boolean => {
    // Replace 'admin@example.com' with your hardcoded admin username
    return user?.username === 'admin@example.com';
  };
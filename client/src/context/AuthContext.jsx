import { createContext, useContext, useMemo } from 'react';
const AuthContext = createContext(null);
// Authentication state and session checks will be implemented by Akindu.
export function AuthProvider({ children }) { const value = useMemo(() => ({ user: null, loading: false }), []); return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>; }
export function useAuth() { return useContext(AuthContext); }

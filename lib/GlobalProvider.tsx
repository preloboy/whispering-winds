import { Session, User } from "@supabase/supabase-js";
import React, { createContext, useContext, ReactNode, useState } from "react";


interface GlobalContextType {
    isLogged: boolean;
    session: Session | null;
    setSession: (session: Session | null) => void;
    user: User | null;
    setUser: (user: User | null) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
    children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {

    const [session, setSession] = useState<Session | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const isLogged = !!user;

    return (
        <GlobalContext.Provider
            value={{
                isLogged,
                session,
                setSession,
                user,
                setUser,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = (): GlobalContextType => {
    const context = useContext(GlobalContext);
    if (!context)
        throw new Error("useGlobalContext must be used within a GlobalProvider");

    return context;
};

export default GlobalProvider;
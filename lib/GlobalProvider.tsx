import { Session } from "@supabase/supabase-js";
import React, { createContext, useContext, ReactNode, useState } from "react";
import { supabase } from "./supabase";


interface GlobalContextType {
    isLogged: boolean;
    session: Session | null;
    setSession: (session: Session | null) => void;
    getSession: () => void;
    logout: () => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
    children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {

    const [session, setSession] = useState<Session | null>(null);
    const isLogged = !!session?.user;

    const getSession = () => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })
    }

    const logout = () => {
        supabase.auth.signOut()
    }

    const value = {
        isLogged,
        session,
        setSession,
        getSession,
        logout,
    };

    return (
        <GlobalContext.Provider value={value}        >
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
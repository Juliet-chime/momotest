import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

type AppContextType = {
    user: any | null;
    setUser: Dispatch<SetStateAction<any | null>>;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<any | null>(null);

    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;

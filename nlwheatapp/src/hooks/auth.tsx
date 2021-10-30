import React, { createContext, useContext, useState } from "react";
import * as AuthSession from "expo-auth-session";
import { api } from "../services/api"

const CLIENT_ID = "6d976995b1896851e7fa";
const SCOPE = "read:user";

type User = {
  id: string;
  avatar_url: string;
  name: string;
  login: string;
};

type AuthContextData = {
  user: User | null;
  isSigningIn: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthContextProps = {
  children: React.ReactNode;
};

type AuthResponse = {
  token: string;
  user: User;
};

type Authorization = {
  params: {
    code?: string;
  };
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthContextProps) {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  async function signIn() {
    setIsSigningIn(true);
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;
    const { params } = (await AuthSession.startAsync({
      authUrl
    })) as Authorization;

    if(params && params.code){  
      const authResponse = await api.post('/authenticate', {
        code: params.code
      });

      const { user, token } = authResponse.data as AuthResponse; 
    }

    setIsSigningIn(false);
  }

  async function signOut() {
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user,
        isSigningIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };

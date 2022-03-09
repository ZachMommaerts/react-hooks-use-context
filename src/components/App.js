import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user";
import { ThemeContext } from '../context/theme';
import { useContext } from "react/cjs/react.production.min";

function App() {
  const { theme } = useContext(ThemeContext);
  
  return (
      <main className={theme}>
        <UserProvider>
          <Header />
          <Profile />
        </UserProvider>
      </main>
  );
}

export default App;

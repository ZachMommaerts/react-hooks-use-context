import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user";
import { ThemeProvider } from '../context/theme';

function App() {
  return (
    <ThemeProvider>
      <main className={theme}>
        <UserProvider>
          <Header />
          <Profile />
        </UserProvider>
      </main>
    </ThemeProvider>
  );
}

export default App;

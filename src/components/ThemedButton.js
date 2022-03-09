import React from "react";
import { useContext } from "react/cjs/react.production.min";
import { ThemeContext } from '../context/theme';

function ThemedButton({ ...props }) {
  const { theme } = useContext(ThemeContext)
  return <button className={theme} {...props} />;
}

export default ThemedButton;

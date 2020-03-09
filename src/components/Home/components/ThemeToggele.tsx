import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { AuthContext } from "../../../contexts/AuthContext";

const ThemeToggele = () => {
  const { ThemeToggele } = useContext(ThemeContext);
  const { isAuthentificated } = useContext(AuthContext);

  return (
    <div>
      <button onClick={() => ThemeToggele(isAuthentificated)}>
        Change Theme
      </button>
    </div>
  );
};

export default ThemeToggele;

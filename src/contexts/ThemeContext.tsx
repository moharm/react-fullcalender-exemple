import React, { createContext, Component } from "react";

interface contextTypes {
  isLightTheme: boolean;
  light: object;
  dark: object;
  ThemeToggele: (isAuthentificated: boolean) => void;
}

export const ThemeContext = createContext({} as contextTypes);

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
  };

  ThemeToggele = (isAuthentificated: boolean) => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
    console.log(isAuthentificated);
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, ThemeToggele: this.ThemeToggele }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;

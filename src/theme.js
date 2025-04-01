import {createContext, useState, useMemo} from 'react';
import {createTheme} from '@mui/material/styles';
import {useState, useMemo} from 'react';

//color design tokens
export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
        grey: {
          100: "#d0d1d5",  // Lightest
          200: "#a1a4ab",
          300: "#727681",
          400: "#434957",
          500: "#141B2D",  // Original color
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509"   // Darkest
        },

        primary: {
          100: "#e6f7f3",  // Lightest
          200: "#ccefe7",
          300: "#b3e7db",
          400: "#99dfcf",
          500: "#4cceac",  // Original color
          600: "#3da58a",
          700: "#2e7c68",
          800: "#1e5245",
          900: "#0f2923"   // Darkest
        },

        greenAccent: {
          100: "#fce8e7",  // Lightest
          200: "#f9d1cf",
          300: "#f6bab7",
          400: "#f3a39f",
          500: "#db4f4a",  // Original color
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f"   // Darkest
        },

        redAccent: {
          100: "#eef0ff",  // Lightest
          200: "#dde1ff",
          300: "#ccd2ff",
          400: "#bbc3ff",
          500: "#6870fa",  // Original color
          600: "#5359c8",
          700: "#3e4296",
          800: "#2a2c64",
          900: "#151632"   // Darkest
        },

        blueAccent: {
          100: "#f5f5f5",  // Lightest
          200: "#e6e6e6",
          300: "#d6d6d6",
          400: "#c6c6c6",
          500: "#666666",  // Original color
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414"   // Darkest
        }
      }
    : {
        grey: {
          100: "#040509",   // Darkest
          200: "#080b12",
          300: "#0c101b",
          400: "#101624",
          500: "#141B2D",  // Original color
          600: "#434957",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",  // Lightest
        },

        primary: {
          100: "#0f2923",   // Darkest
          200: "#1e5245",
          300: "#2e7c68",
          400: "#3da58a",
          500: "#4cceac",  // Original color
          600: "#99dfcf",
          700: "#b3e7db",
          800: "#ccefe7",
          900: "#e6f7f3",  // Lightest
        },

        greenAccent: {
          100: "#2c100f",   // Darkest
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",  // Original color
          600: "#f3a39f",
          700: "#f6bab7",
          800: "#f9d1cf",
          900: "#fce8e7",  // Lightest
        },

        redAccent: {
          100: "#151632",   // Darkest
          200: "#2a2c64",
          300: "#3e4296",
          400: "#5359c8",
          500: "#6870fa",  // Original color
          600: "#bbc3ff",
          700: "#ccd2ff",
          800: "#dde1ff",
          900: "#eef0ff",  // Lightest
        },

        blueAccent: {
          100: "#141414",   // Darkest
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",  // Original color
          600: "#c6c6c6",
          700: "#d6d6d6",
          800: "#e6e6e6",
          900: "#f5f5f5",  // Lightest
        }
      })
});

// mui theme settings
export const theme = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "fcfcfc",
            },
          }),
    },
    typography: {

      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },  
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

//context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {}
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(() => ({
    toggleColorMode: () => setMode((prev) => (prev === "dark" ? "light" : "dark")),
  }))
}

const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);


return[theme, colorMode]
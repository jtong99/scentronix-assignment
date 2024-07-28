import { Palette, PaletteColor, alpha } from "@mui/material";
import { Roboto } from "next/font/google";
// eslint-disable-next-line no-restricted-imports
import createTheme from "@mui/material/styles/createTheme";
import { Inter } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#f8f5f0",
    },
    success: {
      main: "#6DD230",
    },
    text: {
      primary: "#121212",
      secondary: "#aaaaaa",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontSize: 46,
      fontWeight: 700,
    },
    h2: {
      fontSize: 36,
      fontWeight: 700,
    },
    h3: {
      fontSize: 20,
      fontWeight: 700,
    },
    h4: {
      fontSize: 20,
      fontWeight: 600,
    },
    h5: {
      fontSize: 18,
      fontWeight: 600,
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
    },
  },

  components: {
    MuiChip: {
      styleOverrides: {
        filled: ({ ownerState, theme }) => {
          const paletteColor =
            (
              theme.palette[
                (ownerState.color ?? "primary") as keyof Palette
              ] as PaletteColor
            )?.main ?? theme.palette.text.primary;
          return {
            backgroundColor: alpha(paletteColor, 0.1),
            color: paletteColor,
            fontWeight: 500,
          };
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          whiteSpace: "nowrap",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        outlined: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;

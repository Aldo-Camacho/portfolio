import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#15C6EA",
    },
    secondary: {
      main: "#EA15C6",
    },
    terciary: {
      main: "#C6EA15",
    },
    black: {
      main: "#000000",
    },
    white: {
      main: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: "biglink"},
              style: {
                fontSize: "2rem",
              }
            }
          ],
          fontSize: "1rem",
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          justifyContent: "space-between",
          paddingLeft: 8,
          paddingRight: 8,
          paddingTop: 8,
          paddingBottom: 8,
        }
      }
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          fontSize: "large",
          justifyContent: "left",
          paddingLeft: 16,
          paddingBottom: 8,
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          position: "fixed",
          bottom: 0,
          left: 0,
        }
      }
    },
    MuiImageListItem: {
      styleOverrides: {
        root: {
          alignItems: "center",
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          color: "white",
          backgroundColor:"rgba(0, 0, 0, 0.5)",
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          color: "white",
          backgroundColor:"rgba(0, 0, 0, 0.5)",
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          gap: 8,
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          height: "fit-content",
          background: "linear-gradient(135deg, rgba(234,21,198,1) 0%, rgba(21,198,234,1) 50%, rgba(198,234,21,1) 100%);",
          color: "black",
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        }
      }
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

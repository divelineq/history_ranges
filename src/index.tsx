import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import "./index.css";

export const theme = {
	colors: {
		text: "#42567A",
		border: "#D9D9D9",
		bg: "#ffffff",
		primary: "#3877EE",
		secondary: "#EF5DA8",
		background: "#FFFFFF",
	},
} as const;

export type AppTheme = typeof theme;

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<ThemeProvider theme={theme}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ThemeProvider>,
);

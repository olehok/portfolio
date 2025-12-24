import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../context/themeContext";

function saveState(state) {
    localStorage.setItem("appState", JSON.stringify(state));
}

function loadState() {
    try {
        const saved = localStorage.getItem("appState");
        if (saved) {
            const parsed = JSON.parse(saved);
            return { theme: parsed.theme };
        }
        return undefined;
    } catch {
        return undefined;
    }
}

const preloadedState = loadState();

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
    preloadedState,
});

store.subscribe(() => {
    saveState({
        theme: store.getState().theme,
    });
});
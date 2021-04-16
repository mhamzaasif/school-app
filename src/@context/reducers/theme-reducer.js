const themeColorsLight = {
    white: "#FFF"
}

const themeColorsDark = {
    white: "#000"
}

export const initialState = {
    theme: 'light',
    themeColors: themeColorsLight
};

export const themeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_THEME_LIGHT":
            return { ...state, theme: 'light', themeColors: themeColorsLight };
        case "SET_THEME_DARK":
            return { ...state, theme: 'dark', themeColors: themeColorsDark };
        default:
            return state;
    }
};

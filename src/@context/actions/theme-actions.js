export const setTheme = ({ dispatch, theme }) => {
    return dispatch({
        type: theme === 'light' ? "SET_THEME_LIGHT" : "SET_THEME_DARK",
        paylaod: theme
    })
}
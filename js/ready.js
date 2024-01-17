import { getInitialTheme, setTheme } from './theme';

export const onSiteLoaded = () => {
    try {
        // set the theme
        const theme = getInitialTheme();
        if (theme) setTheme(theme);

        // hide the loading panel
        const pnl = document.getElementById('loadingpanel');
        pnl.style.display = 'none';
    } catch (error) {
        // console.log(error);
    }
};

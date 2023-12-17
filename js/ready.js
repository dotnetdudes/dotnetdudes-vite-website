// import { getInitialTheme, setTheme } from './theme';

export const onSiteLoaded = () => {
    try {

        document.addEventListener('DOMContentLoaded', function () {
            // const theme = getInitialTheme();
            // console.log(theme);
            // setTheme(theme);
            // const pnl = document.getElementById('loadingpanel');
            // pnl.style.display = 'none';
            console.log('DOMContentLoaded');
        });
    } catch (error) {
        console.log(error);
    }
};

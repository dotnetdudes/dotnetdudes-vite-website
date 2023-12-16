export const onStarterLoaded = () => {
    try {
        const openReactStarter = () => {
            window.open("https://github.com/dotnetdudes/react-starter", "_blank");
        }
        const openReactNativeStarter = () => {
            window.open("https://github.com/dotnetdudes/react-native-starter", "_blank");
        }
        document.addEventListener('DOMContentLoaded', function () {
            const btn = document.getElementById('reactStarter');
            const reactBtn = document.getElementById('nativeStarter');
            btn.addEventListener('click', openReactStarter);
            reactBtn.addEventListener('click', openReactNativeStarter);
        });
    } catch (error) {
        console.log(error);
    }
}

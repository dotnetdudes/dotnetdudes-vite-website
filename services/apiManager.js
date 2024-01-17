import dudesApi from './api';

// generate javascript singleton
const apiManager = (() => {
    let instance;

    function createInstance() {
        return dudesApi;
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
}
)();

export default apiManager;
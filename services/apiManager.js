import dudesApi from './api';

// generate javascript singleton
const apiManager = (function () {
    var instance;

    function createInstance() {
        return dudesApi;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
}
)();

export default apiManager;
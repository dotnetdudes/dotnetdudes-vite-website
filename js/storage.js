export const setItem = (name, item) => {
    if (!window.localStorage) return false;
    window.localStorage.setItem(name, item);
    return true;
};

export const getItem = (name) => {
    if (!window.localStorage) return false;
    return window.localStorage.getItem(name);
};

export const clearStorage = () => {
    if (!window.localStorage) return false;
    window.localStorage.clear();
};

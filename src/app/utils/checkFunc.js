export const isHttp = (str) => {
    const regex = /^(http)/g;
    return regex.test(str);
};

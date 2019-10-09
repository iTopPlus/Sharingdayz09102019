const setCookie = (params, res) =>
    new Promise(async resolve => {
        const currentDate = new Date();
        currentDate.setTime(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000);
        const cookieOption = {
            expire: currentDate.toUTCString(),
            secure:true,
            httpOnly: true, // <-- just mitigate the risk of client side if browser supports it
            path: '/',
            domain: 'localhost',
        };
        res.cookie('sz010', params, cookieOption);
        // res.setHeader('cookaskasdkas?')
        resolve();
    });

const getCookie = (req, name) => {
    const cookies = req.cookies[name];
    return cookies;
};

const clearCookie = (res, name) => 
    new Promise(async (resolve, reject) => {
        res.clearCookie(name);
        resolve()
    })

module.exports = {
    setCookie: setCookie,
    getCookie: getCookie,
    clearCookie: clearCookie,
};

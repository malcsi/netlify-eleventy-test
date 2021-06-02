module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("source");
        data: "_data"
    eleventyConfig.setBrowserSyncConfig({
        http: {
            key: '/etc/localhost.key',
            cert: '/etc/localhost.crt'
        }
    });
};

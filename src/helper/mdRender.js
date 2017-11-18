var showdown  = require('showdown');

var converter = new showdown.Converter();

const renderMd = (mdText) => {
    return converter.makeHtml(mdText);
}

module.exports = {
    renderMd
}
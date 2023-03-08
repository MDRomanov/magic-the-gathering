const React = require('react');
const ReactDOMServer = require('react-dom/server');

function renderComponent(
  reactComponent,
  props = {},
  options = { htmlOnly: false },
) {
  const reactElement = React.createElement(reactComponent, {
    ...this.app.locals,
    ...this.locals,
    ...props,
  });

  const html = ReactDOMServer.renderToStaticMarkup(reactElement);

  if (options.htmlOnly) {
    return html;
  }
  const document = `<!DOCTYPE html>${html}`;
  this.send(document);
  return undefined;
}
function renderComponents(req, res, next) {
  res.renderComponent = renderComponent;
  next();
}

module.exports = renderComponents;

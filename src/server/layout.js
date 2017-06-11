export default function (html, state) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Other Company</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')};
        </script>
        <script type="application/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react.js"></script>
        <script type="application/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react-dom.min.js"></script>
        <script type="application/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/redux/3.6.0/redux.min.js"></script>
        <script type="application/javascript" src="/assets/js/bundle.js"></script>
      </body>
    </html>
  `;
}

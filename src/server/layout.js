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
        <script type="application/javascript" src="/assets/js/bundle.js"></script>
      </body>
    </html>
  `;
}

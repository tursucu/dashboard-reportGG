/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-danger */
import React from 'react';

const HTML = ({ content, state, helmet, errorContent, styleTags }) => {
  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const bodyAttrs = helmet.bodyAttributes.toComponent();

  return (
    <html lang="en" {...htmlAttrs}>
      <head>
        {helmet.title.toComponent()}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        {styleTags}
      </head>
      <body {...bodyAttrs}>
        <div
          id="root"
          dangerouslySetInnerHTML={{ __html: content || errorContent }}
        />
        <script
          charSet="UTF-8"
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(
              /</g,
              '\\u003c'
            )};`,
          }}
        />
        <script
          charSet="UTF-8"
          src={`${process.env.BASE_ROOT}/js/main.bundle.js`}
        />
      </body>
    </html>
  );
};

export default HTML;

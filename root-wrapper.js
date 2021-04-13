import {MDXProvider} from '@mdx-js/react';
import {Code} from './src/components/pageElements/code';
import {createGlobalStyle} from 'styled-components';
import React, {Fragment} from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0 20px;
    background: #1d2c2c;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  a { color: #94e0e0; text-decoration:none; }
  a:link { color: #94e0e0; }
  a​:active { color: #69cece; }
  a​:visited { color: #bc99dd; }
  a​:hover { color: #5cf0f0; text-decoration:underline; }
`;

const components = {
  'p.inlineCode': props => (
    <code {...props} style={{backgroundColor: '#283636', color: '#fff'}}></code>
  ),
  pre: ({children: {props}}) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace('language-', '')}
          {...props}
        />
      );
    }
  },
};

export const wrapRootElement = ({element}) => (
  <MDXProvider components={components}><Fragment><GlobalStyle />{element}</Fragment></MDXProvider>
);

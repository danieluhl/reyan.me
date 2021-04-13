import React from 'react';
import styled from 'styled-components';
import {useSiteMetadata} from '../hooks/useSiteMetadata';
import {Header} from './Header';

const AppStyles = styled.main`
  margin: 0 auto;
  max-width: 800px;
  color: #f1f1f1;
`;

export const Layout = ({children}) => {
  const {title, description} = useSiteMetadata();
  return (
    <AppStyles>
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </AppStyles>
  );
};

import React, {Fragment} from 'react';
import styled from 'styled-components';
import {useSiteMetadata} from '../hooks/useSiteMetadata';
import {Header} from './Header';

const AppStyles = styled.main`
  margin: 0 auto;
  max-width: 800px;
  color: #f1f1f1;
`;

const Hr = styled.hr`
  background: #202929;
  border: 1px solid #2f5858;
  height: 2px;
`;


export const Layout = ({children}) => {
  const {title, description} = useSiteMetadata();
  return (
    <Fragment>
      <Header siteTitle={title} siteDescription={description} />
      <Hr />
      <AppStyles>
        {children}
      </AppStyles>
    </Fragment>
  );
};

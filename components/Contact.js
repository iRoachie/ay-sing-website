import React from 'react';
import styled, { css } from 'styled-components';
import { media } from '../lib';

const Contact = ({ href, label, imageSrc, imageAlt }) => (
  <Content href={href}>
    <img src={imageSrc} alt={imageAlt} />
    <span>{label}</span>
  </Content>
);

const Content = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  margin: 20px 0;
  transition: 300ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  ${media('small')(css`
    font-size: 28px;
  `)};

  img {
    margin-right: 15px;
    width: 30px;
    height: 30px;

    ${media('small')(css`
      margin-right: 20px;
      width: 40px;
      height: 40px;
    `)};
  }
`;

export default Contact;

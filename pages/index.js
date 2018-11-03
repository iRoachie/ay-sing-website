import React from 'react';
import styled, { css } from 'styled-components';

import { Page, Contact } from '../components';
import { Row, Container } from '../styles';
import { media } from '../lib';

const email = 'kroach.apps@gmail.com';

export default () => (
  <Page>
    <Container>
      <Phones src="static/images/phones.png" alt="AY Sing" />

      <Content>
        <Row className="main-block">
          <img src="static/images/logo.svg" alt="AY Sing" className="main-logo" />
          <div className="title-block">
            <h1 className="title">AY Sing</h1>
            <h3 className="subtitle">Advent Youth Sing</h3>
          </div>
        </Row>

        <Row className="app-store-block">
          <a href="https://itunes.apple.com/app/id1200976617" className="app-store">
            <img src="static/images/app-store.svg" alt="Download on App Store" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.aysing" className="app-store">
            <img src="static/images/play-store.svg" alt="Get it on Play Store" />
          </a>
        </Row>

        <Contact
          href="https://twitter.com/roach_iam"
          label="@roach_iam"
          imageSrc="static/images/twitter-icon.svg"
          imageAlt="Twitter"
        />

        <Contact href={`mailto:${email}`} label={email} imageSrc="static/images/mail-icon.svg" imageAlt="Email" />
      </Content>
    </Container>
  </Page>
);

/** Styles */
const Content = styled.div`
  ${media('small')(css`
    margin-left: 80px;
  `)};

  .title-block {
    text-align: center;

    ${media('small')(css`
      margin-left: 40px;
      text-align: left;
    `)};
  }

  .title {
    color: #fff;
    font-size: 64px;
    margin-bottom: 0;

    ${media('small')(css`
      font-size: 48px;
    `)};

    ${media('medium')(css`
      font-size: 64px;
    `)};
  }

  .subtitle {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 32px;
    margin-top: 12px;
  }

  .app-store {
    margin: 8px;
  }

  .app-store-block {
    margin-top: 0;

    ${media('small')(css`
      margin-top: 30px;
    `)};
  }

  .main-block {
    display: flex;
    flex-direction: column;

    ${media('small')(css`
      flex-direction: row;
      justify-content: flex-start;
    `)};
  }

  .main-logo {
    width: 100px;
    height: 100px;

    ${media('small')(css`
      width: 120px;
      height: 120px;
    `)};

    ${media('small')(css`
      width: 149px;
      height: 149px;
    `)};
  }
`;

const Phones = styled.img`
  display: none;

  ${media('small')(css`
    display: block;
    max-width: 301px;
  `)};

  ${media('medium')(css`
    max-width: 401px;
  `)};
`;

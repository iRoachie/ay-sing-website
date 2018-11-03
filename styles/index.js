import styled, { css } from 'styled-components';
import { media } from '../lib';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;

  ${media('small')(css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `)}

  ${media('medium')(css`
    width: 970px;
  `)}

  ${media('large')(css`
    width: 970px;
    max-width: calc(100% - 30px);
  `)}
`;

export const Row = styled.div`
  margin-left: -15px;
  margin-right: -15px;
  align-items: center;
  display: flex;

  &:before,
  &:after {
    content: ' ';
    display: table;
  }

  &:after {
    clear: both;
  }
`;

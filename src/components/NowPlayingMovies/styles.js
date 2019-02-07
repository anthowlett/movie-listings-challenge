import styled from 'styled-components';
import { breakpoints, colors } from '../../utils';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MovieWrapper = styled.div`
  flex-basis: 100%;
  
  ${breakpoints.mini(`
      flex-basis: 50%;
  `)};
  ${breakpoints.small(`
      flex-basis: 33.333%;
  `)};
  ${breakpoints.medium(`
      flex-basis: 25%;
  `)};
`;

export const MovieDetails = styled.div`
  padding: 5px 15px;
`;

export const Message = styled.p`
  width: 100%;
  padding: 20px;
  text-align: center;
  font-size: 20px;
  color: red;
  background-color: ${colors.black_5};
`;
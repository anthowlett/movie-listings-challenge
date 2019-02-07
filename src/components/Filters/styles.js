import styled from 'styled-components';
import { colors, breakpoints } from '../../utils';

export const Wrapper = styled.div`
  padding: 20px;
  background-color: ${colors.black_5};

  ${breakpoints.small(`
    display: flex;
  `)};
`;

export const Message = styled.p`
  padding: 5px;
  color: red;
  background-color: ${colors.black_5};
`;
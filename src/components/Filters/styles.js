import styled from 'styled-components';
import { colors } from '../../utils';

export const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  background-color: ${colors.black_5};
`;

export const RatingWrapper = styled.div`
  padding-right: 20px;
`;

export const Message = styled.p`
  padding: 5px;
  color: red;
  background-color: ${colors.black_5};
`;
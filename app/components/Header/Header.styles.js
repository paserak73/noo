import styled from 'styled-components';

export const HeaderProfileAccount = styled.div`
  display: flex;
  align-items: center;
  margin-top: -10px;
  background: #eeeeee;
  width: 280px;
  height: 75px;
  margin-bottom: 8px;
  color: rgba(0,0,0,.85);

  svg {
    margin: 0 15px;
    min-width: 15px;
  }
`;
export const Calendar = styled.div`
  display: none;
  @media(max-width: 1000px) {
    display: block;
    position: absolute;
    right: 15px;
  }
  svg {
    fill: rgba(0,0,0,.65) !important;
  }
`;
export const HeaderProfileUsername = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: rgba(0,0,0,.75);
`;
export const HeaderProfileEmail = styled.div`
  color: rgba(0, 0, 0, .85);
  font-size: 13px;
`;
export const HeaderCreateListingWrap = styled.div`
  @media(max-width: 768px) {
    display: none;
  }
`;
export const HeaderProfileWrap = styled.div`
  margin-right: 10px;

  @media(max-width: 768px) {
    display: none;
  }
`;

export const HeaderFlatButtonWrap = styled.div`
  @media(max-width: 768px) {
    position: absolute;
    right: 0px;
  }
`;
export const Flex = styled.div`
  display: flex;
  width: ${(props) => props.location === '/activity' ? '100%' : 'auto'};
  justify-content: flex-end;
`;

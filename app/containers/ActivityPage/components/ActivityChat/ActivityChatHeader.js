import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import BackIcon from 'material-ui/svg-icons/navigation/arrow-back';

const Container = styled.div`
  width: 100%;
  height: ${(props) => !props.mode ? '52px' : 'auto'};
  background: white;
  position: absolute;
  top: -50px;
  left: 0;
  border-radius: 4px;
  display: flex;
  box-shadow: ${(props) => !props.mode ? 'rgba(0, 0, 0, 0.1) 0px 1px 8px' : '0'};
  flex-direction: ${(props) => !props.mode ? 'row' : 'column'};
  align-items: ${(props) => !props.mode ? 'center' : 'initial'};
  font-size: 14px;
  color: rgba(0,0,0,.8);
  z-index: 2;
  @media(max-width: 1000px) {
    border-radius: 0px;
  }
`;
const Img = styled.img`
  width: ${(props) => !props.mode ? '35px' : '100%'};
  border-radius: ${(props) => !props.mode ? '50%' : '6px 6px 0 0'};
  margin-right: ${(props) => !props.mode ? '10px' : '0'};
  object-fit: cover;
  height: ${(props) => !props.mode ? '35px' : '180px'};
  margin-left: ${(props) => !props.mode ? '50px' : '0'};
  @media(max-width: 1000px) {
    height: ${(props) => !props.mode ? '35px' : '220px'};
  }
  @media(max-width: 700px) {
    height: ${(props) => !props.mode ? '35px' : '180px'};
  }
`;
const IconButtonWrap = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
`;
const Shadow = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: ${(props) => !props.mode ? '0' : '80px'};
  background: linear-gradient(rgba(0,0,0,.3) 55%, rgba(0,0,0,0));
`;
const Description = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  background: #009788;
  color: white;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 400;
  flex-direction: column;
  position: relative;
  b {
    font-size: 16px;
  }
  span {
    margin: 2px 0;
  }
`;
const Price = styled.span`
  position: absolute;
  top: 30px;
  right: 20px;
  font-size: 20px;
  font-weight: 600;
`;
export default function ActivityChatHeader({ data, mode = false }) {
  return (
    <Container mode={mode}>
      <Shadow mode={mode} />
      <IconButtonWrap>
        <IconButton
          mode={mode}
          iconStyle={{ fill: !mode ? 'rgba(0,0,0,.7)' : 'white' }}
          onClick={data.backClick}
        >
          <BackIcon />
        </IconButton>
      </IconButtonWrap>
      <Img src={data.img} alt="x" mode={mode} />
      {mode === 'advanced' &&
        <Description>
          <b>{data.label}</b>
          <span>{data.address}</span>
          <span>{data.movingDate} - {data.minimumDuration}</span>
          <Price>{data.price} {data.currency} </Price>
        </Description>
      }
      {!mode && data.label}
    </Container>
  );
}

ActivityChatHeader.propTypes = {
  data: PropTypes.object,
  mode: PropTypes.string,
};

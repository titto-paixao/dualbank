import styled from 'styled-components';

interface ItemProps{
  active:boolean
}

export const Container = styled.nav`
  width:46px;
  height:100vh;

  position:fixed;

  display:flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items: center;
  padding: 0px;

  background-color: #F9F9F9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  li{
    display: flex;
    justify-content: center;
    align-items: center;

    width: 46px;
    height: 46px;
  }

`;

export const Item = styled.li<ItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:${props => (props.active ? "#622EE5" : "#F9F9F9") };

  width: 46px;
  height: 46px;

  img{
    width: 24px;
    height: 24px;
    object-fit:fill;
  }
`;

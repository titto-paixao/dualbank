import styled from 'styled-components';

interface TextProps {
  size:any,
  color:any,
  weight:any
}

interface CircleProps {
  colors:any,
}

export const Container = styled.div`
  background-color:  #F9F9F9;
  height:${window.innerHeight - 101}px;
`;
export const Content = styled.div`
  margin-left:20px;
  margin-top:20px;
`;
export const Header = styled.div`
  display:flex;
  height:44px;
  width:100%;
  align-items:center;

  padding-left:16px;

  background-color:#F9F9F9;

  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
`;

export const Group = styled.div`
  display:flex;
  align-items:center;
`
export const Text = styled.h2<TextProps>`
  font-size:${props => (!!props.size ? props.size : 14) }px;
  color:${props => (!!props.color ? props.color : "#000")};
  font-weight:${props => (!!props.weight ? props.weight : "400")};
`
export const GroupRow = styled.div`
  display:flex;
  flex-direction:column;
`
export const EyeOff = styled.div`
  height:14px;
  width:70px;
  background-color:#F9F9F9;
`
export const Circle = styled.div<CircleProps>`
  height:36px;
  width:36px;
  background:linear-gradient(135deg, ${props => (props.colors[0])} 0%, ${props => (props.colors[1])} 100%);
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:100px;
  font-family: 'Raleway', sans-serif;
  margin-right:10px;

  img{
    width:24px;
    height:24px;
  }
`
export const Item = styled.div`
  height:40px;
  width:80px;
  display:flex;
  align-items:center;
  justify-content:center;
  border: 1px solid #622EE5;
  box-sizing: border-box;
  border-radius: 5px;

  margin-left:20px;

  img{
    width:24px;
    height:24px;
  }
`

export const DateBalance = styled.div`
  width: 280px;
  height:47px;
  padding:8px;
  border: 0.5px solid #E5E4E2;

  border-top-left-radius:5px;
  border-top-right-radius:5px;

  display:flex;
  justify-content:space-between;
  align-items:center;

  border-bottom:1px solid #622EE5;
`
export const Balance = styled.div`
  width: 280px;
  height:47px;
  padding:8px;
  border: 0.5px solid #E5E4E2;

  border-top-left-radius:5px;
  border-top-right-radius:5px;

  display:flex;
  justify-content:space-between;
  align-items:center;

  border-bottom:1px solid #69D531;
`
import styled from 'styled-components';

interface TextProps {
  size:any,
  color:any,
  weight:any
}

export const Container = styled.header`
  background-color:#FFF;
  width:100%;
  height:70px;

  padding-left:20px;
  padding-right:20px;

  display:flex;
  justify-content:space-between;
  align-items:center;

  .logo{
    width:121px;
    height:21px;
    border-right:1px solid #E5E5E5;
    padding-right:6.5px;
    margin-right:23px;
  }
`;

export const Group = styled.div`
  display:flex;
  align-items:center;
`
export const GroupIcon = styled.div`
  display:flex;
  align-items:center;
  margin-left:15px;
  margin-right:15px;

  img + img {
    margin-left:15px;
  }

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

export const Search = styled.div`
  display:flex;
  height:30px;
  width:160px;
  border: 0.5px solid #778899;
  color:#778899;
  font-weight:400;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
  padding:6px;

  input{
    border:none;
    width:120px;
    outline:0;
  }

`
export const EyeOff = styled.div`
  height:16px;
  width:80px;
  background-color:#FFF;
`

export const User = styled.div`
  height:50px;
  width:50px;
  border:1px solid #4C77BF;
`

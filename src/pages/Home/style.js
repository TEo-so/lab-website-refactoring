import styled from "styled-components";
import head from '../../statics/images/head.gif'


export const HomeWrapper = styled.div`
  width: 80vw;
  padding: 0 ;
  margin: 0 auto;
  height:30vw;
  background: pink;
`;

export const HeaderWrapper = styled.div`
  width:80vw;
  height:10vw;
  background:url(${head}) no-repeat ;
  background-size:100%

`

export const Admin = styled.div`
 display:flex;
 position:fixed;
 top:8vw;
 left:70vw;
 div{
   font-size:10px;
   margin:5px;
 }
`
export const Tab = styled.div`
display:flex;
position:fixed;
top:12vw;
left:10vw;
div{
  border:1px solid black;
  font-size:12px;
  margin:0 3px;
}
`
export const SliderWrapper = styled.div`
 
`
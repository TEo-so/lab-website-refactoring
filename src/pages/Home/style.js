import styled from "styled-components";
import head from '../../statics/images/head.gif'


export const HomeWrapper = styled.div`
  width: 80vw;
  padding: 0 ;
  margin: 0 auto;
  height:350px;
  background: pink;
`;

export const HeaderWrapper = styled.div`
  width:80vw;
  height:124px;
  background:url(${head}) no-repeat ;
  background-size:100%

`

export const Admin = styled.div`
 display:flex;
 position:fixed;
 top:17%;
 left:70vw;
 div{
   font-size:10px;
   margin:5px;
 }
`
export const Tab = styled.div`
display:flex;
position:fixed;
top:28%;
left:12%;
div{
  border:1px solid black;
  font-size:12px;
  margin:0 3px;
}
`
export const SliderWrapper = styled.div`
 
`
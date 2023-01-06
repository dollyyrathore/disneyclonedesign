 import styled from "styled-components";
 import homebackground from "./home-background.png";
 import Imgslider from "./Imgslider";
import Recommend from "./Recommend";
import Viewers from "./Viewers";
import Newdisney from "./Newdisney";
import Original from "./Original";
import Trending from "./Trending";


const Home=(props)=>{
return(
<Container> 
    <Imgslider/>
    <Viewers/>
    <Recommend/>
    <Newdisney/>
    <Original/>
    <Trending/>
   </Container>
     
)

 }

 const Container=styled.main`
 position: relative;
 min-height: calc(100vh - 250px);
 overflow-x:hidden;
 display:block;
 top:72px;
 padding:0 calc(3.5w + 5px);
  
 &:after{
    background-image:url(${homebackground}); center center / cover no-repeat fixed;
    content:'';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;

}
`;
 export default Home;
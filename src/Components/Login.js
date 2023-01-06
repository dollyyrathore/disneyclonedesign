import styled from "styled-components";
import Disneybg from "./Disneybg.jpg";


const Login = (props) => {
    return(
    <Container>
        <Content>
            <CTA>
            <CTALogoOne src="images/cta-logo-one.svg" alt=''/>
            <SignUp>GET ALL THERE</SignUp>
            <Description>Get Premier Access to Raya and the Last<br/> Dragon for an addittional fee with a Disney+ subscription. 
            </Description>
            <CTALogoTwo src="images/cta-logo-two.png" alt=""/>
            </CTA>
        <BgImage/>
        </Content>
    </Container>
    );
};
    const Container = styled.section`
    overflow:hidden;
    display: flex;
    flex-direction:column;
    text-align:center;
    height:100vh;
    `;
    const Content=styled.div`
    margin-bottom:10vw;
    width:100%;
    position:relative;
    min-height:100vh;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:80px 40px;
    height:100%;
    `;
const BgImage = styled.div`
z-index:-1;
background-image:url(${Disneybg});
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
position:absolute;
top:0;
right:0;
left:0;
`;
const CTA =styled.div`
max-width:650px;
width:100%
display:flex;
flex-direction:column;
`;

const CTALogoOne = styled.img`
margin-bottom:30px;
max-width:600px;
min-height:1px;
display:block;
width:100%;
`;

const SignUp = styled.a`
font-weight:bold;
color:#f9f9f9;
background-color: #0063e5;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
padding-left:60px;
padding-right:60px;
font-size:18px;
padding:20px 60px  20px 60px;
border:1px solid transparent;
border-radius: 4px;

&:hover{
    background-color: #0483ee;
}
`;
const Description=styled.p`
color:hsla(0,0%,95,3%,1);
font-size:12px;
margin: 30px 0 24px;
line-height:1.5;
letter-spacing:1.5px;
`;
const CTALogoTwo=styled.img`
width:100%;
max-width:600px;
margin-bottom:20px;
display:inline-block;
vertical-align:bottom;

`;
export default Login;

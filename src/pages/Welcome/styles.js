import styled from 'styled-components';
import img from '../../assets/image/family.jpg';

export const AppBar = styled.div`
background-color: #fa8231;
position: relative;
width: 100%;
display: flex;
z-index: 1100;
box-sizing: border - box;
flex-shrink: 0;
flex-direction: column;
`;

export const WelcomeRoot = styled.div`
 display: flex;
 `;

export const WelcomeImage = styled.div`
 background-size: cover;
 background-position: top;
 background-image: url(${img});
 width: 50%;
 height: 600px;
 `;

export const WelcomeBox = styled.div`
 width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
 `;

export const WelcomeText = styled.div`
 color: #fa8231;
    font-size: 66px;
    font-weight: 200;
 `;

export const CustomHelp = styled.div`
 background-color: #fa8231;
    color: white;
    padding: 0 1.0rem;
 `;

export const HomeSubtitle = styled.div`
 display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.25rem;
    background-color: #fa8231;
    padding: 1rem;
 `;

export const MainTitle = styled.div`
 color: white;
    font-size: 20px;
    text-align: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
 `;

export const ButtonSign = styled.div`
color: #fa8231;
    border-color: 1px solid #fa8231;
 &:hover {
    background-color: white;
  }
 `;

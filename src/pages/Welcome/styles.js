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

export const HomeRoot = styled.div`
 display: flex;
 `;

export const HomeImage = styled.div`
 background-size: cover;
 background-position: top;
 background-image: url(${img});
 width: 50%;
 height: 600px;
 `;


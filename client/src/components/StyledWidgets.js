import styled from 'styled-components';

//Player Card
export const Card = styled.div`
    border: 2px solid;
    margin: 0 auto;
    width: 50%;
    height: 200px;
    margin-top:30px;
    margin-bottom: 30px;
    background-color: #1BB706;
    box-shadow: 3px 3px 3px ;
`;

export const Name = styled.h1`
    text-align: center;
    font-family: 'Lato', sans-serif;
`;

export const Country = styled.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    color: #FFFFFF;
`;

export const Searches = styled.div`
    text-align: center;
    font-size: 20px;
    color: #FFFFFF;
`;

//Nav Bar
export const NavHeader = styled.h1`
    text-align: center;
    font-size: 40px;
    font-family: 'Dancing Script', cursive;
    color: #7A0629;

`;

export const Navbar = styled.div`
.nav-bar {
    align-items: center;
    border-bottom: 1px solid rgb(221, 221, 221);
    display: flex;
    height: 90px;
    justify-content: center;
    padding: 0 3%;
    width: 100%;
    box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
  }

  .dark-mode-toggle {
    background: #B6B8B6;
    border-radius: 50px;
    border: 1px solid black;
    height: 20px;
    position: relative;
    width: 40px;
    margin-left: 30px;
  }
  
  .toggle {
    background: #FA1919;
    border-radius: 50px;
    height: 18px;
    left: 0;
    position: absolute;
    transition: 0.2s;
    width: 20px;
  }
  
  .toggled {
    left: 18px;
  }

`;

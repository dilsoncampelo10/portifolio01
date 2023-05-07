import styled from 'styled-components';

export const IconArea = styled.div`
    cursor: pointer;
    margin-bottom: 10px;
`;
export const Nav = styled.nav`
    position: fixed;
    background-color: #24292F;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    height: 100vh;
    width: 5%;
  
`;
// export const ButtonMenu = styled.button`
//     position: absolute;
//     z-index: 2;
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     background-color: #fff;
//     outline: 0;
//     border: 0;
// `

export const ListNav = styled.ul`
    background-color: #24292F;
    list-style:none;
`;
export const ListItem = styled.li`
    margin-bottom: 20px;
`;

export const NavItem = styled.a`
    color: #fff;
    text-decoration: none;
`;
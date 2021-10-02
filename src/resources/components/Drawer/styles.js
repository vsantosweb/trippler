import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Drawer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0 ,0 ,0 , .5);
  left: 0;
	top:0;
	bottom:0;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  transform: ${({ open }) => (open ? "translateY(0%)" : "translateY(100%)")};
  ${({ open }) => document.body.style.overflow = open ? 'hidden' : 'auto'}
`;

export const DrawerContainer = styled.div`
  background: #fff;
  position: relative;
  bottom: 0;
  min-height:200px;
  height: auto;
  width: 100%;
  transition: ease-in-out 0.1s;
 
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const DrawerHeader = styled.div`
  display: flex;
  span {
    flex: 1;
  }
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  font-size: 1em;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #eee;

  padding: 0.8em;
  color: #333;
  font-weight: bold;
  i {
    font-size: 1.3em;
  }
`;

export const DrawerBody = styled.div`
  
`;





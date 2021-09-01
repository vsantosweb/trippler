import styled from "styled-components";

export const DropDown = styled.div`
position: relative;
button{
  background-color: transparent;
  border: none;
  outline: none;
}

`
export const Container = styled.div`
  position: absolute;
  background: #fff;
  transform: translate(-50%, 8px);
  border-radius: 12px;
  border: solid 1px #eee;
  box-shadow: -4px 0px 7px -1px rgba(0, 0, 0, 0.1);
  height: auto;
  min-width:200px;
  z-index: 1000;

  /* display: ${({ open }) => (open ? "block" : "none")}; */
  &:before {
    /* content: " ";
    height: 0;
    position: absolute;
    width: 0;
    margin: auto;
    border: 10px solid transparent;
    border-bottom-color: red;
    transform: translateY(-20px) translateX(20px); */
  }
  @media (max-width: 720px){
    position: absolute;
    background: #fff;
    transform: translate(0,0);
    /* min-width: 100%; */
    border-radius: 0;
    /* min-height: 100vh; */
    right: 0;
    top: 0;
  }
`;

export const DropDownButton = styled.button`
  box-shadow: none;
  outline: none;
  border: none;
  position: relative;
  border-radius: 50px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  color:#fff;
  i {
    font-size: 1.8em;
  }
`;

export const ClearAllButton = styled.button`
  outline: none;
    border: none;
    position: relative;
    font-size: 11px;
    background: none;
    color: #2c7fcb;
    display: flex;
    align-items: center;

`;
export const NotifyEmptyData = styled.div`
  padding: 1em;
`
export const NotifyBadge = styled.span`
  position: absolute;
  top: 0;
  font-size: 10px;
  background: red;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  color: #fff;
  font-weight: bold;
  display: flex;
  right: 0;
  align-items: center;
  justify-content: center;
  background-color: #df8430;
  transform: translate(3px, -4px);
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.4em;
`;
export const Title = styled.h4`
  margin: 0;
`;

export const NotificationList = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 12px;
  list-style: none;
  line-height: 1.8;
  overflow-y: auto;
  max-height: calc(100vh - 150px);
`;

export const NotificaitonBody = styled.div`
  border-radius: 12px;
  flex: 1;
`;
export const NotificationData = styled.div`
  display: block;
  color: #333;
`;
export const NotificaitonListItem = styled.li`
  display: flex;
  padding: 0.5em;
  gap: 10px;
  cursor: pointer;
  align-items: flex-start;
  border-bottom: solid 1px #e2e2e2;
  background-color: ${({ unRead }) => (unRead ? "#e3f2ff" : "none")};
  &:last-child{ border-radius: 12px; }
  &:hover{
    background-color: #f1f1f1;
  }
`;
export const NotificaitonTitle = styled.h6`
  color: #2c7fcb;
  font-weight: bold;
  margin-bottom: 0;
`;

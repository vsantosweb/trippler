import styled from "styled-components";

export const BurgerIcon = styled.div`
  height: 1.2rem;
  top: 13px;
  right: 20px;
  z-index: 20;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 1.4rem;
    height: 2px;
    background-color: #333;
    transition: all 0.1s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg) translate(3px,5px);" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-48deg) translate(3px, -7px)" : "rotate(0)")};
    }
  }
`;
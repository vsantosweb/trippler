import styled from "styled-components";

export const Title = styled.h1``;
export const SubTitle = styled.h4``;
export const Banner = styled.div``;
export const HeroCategory = styled.div``;
export const HeroCategoryItem = styled.div``;
export const HeroCategoryIcon = styled.div``;
export const HeroCategoryText = styled.span``;
const media = (size) => '@media (max-width: '+size+'px)';

export const Container = styled.div`
  background: #333;
  padding: 1.4em 1em;
  color: #fff;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  ${Banner} {

    ${Title} {
      line-height: 1.2;
      font-weight: 800;
      font-size: 1.8rem;
      color: #fff;
      text-transform: uppercase;
    }
    ${SubTitle} {
      margin: 0;
      font-size: 1.3rem;
      color:  ${({ theme }) => theme.colors.secondary};
    }
  }
`;


export const HeroCategories = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: .7em ;
  ${HeroCategory} {
    display: flex;
    justify-content: center;
    ${media(720)}{
      justify-content: space-around;
    }
    width: 100%;
    text-align: center;
    ${HeroCategoryItem} {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      ${HeroCategoryText}{
        font-weight: bold;
      }
      ${HeroCategoryIcon} {
        margin-bottom: .2em;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: ${({ theme }) => theme.radiusDefault};;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        width: 1rem;
        height: 1rem;
        padding: 0.4rem;
        background: ${({ theme }) => theme.colors.primary};
        padding: 1em;
        color: #333;
        i{
          color: #fff;
        }
      }
    }
  }
`;

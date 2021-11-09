import styled from "styled-components";

export const CardEvent = styled.div`
  border-radius: ${({ theme }) => theme.radiusDefault};
  background: #fff;
  min-height: 289px;
  /* border: solid 1px #ddd; */
  margin-bottom: 2em;
  -khtml-user-select: none !important;
  -o-user-select: none !important;
  -moz-user-select: none !important;
  -webkit-user-select: none !important;
  user-select: none !important;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  &:hover {
    box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.07);
    transition: all 0.5s;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const CardEventImage = styled.img`
  border-top-left-radius: ${({ theme }) => theme.radiusDefault};
  border-top-right-radius: ${({ theme }) => theme.radiusDefault};
  border-bottom-left-radius: ${({ theme }) => theme.radiusDefault};
  border-bottom-right-radius: ${({ theme }) => theme.radiusDefault};
  width: 100%;
  overflow: none;
  -khtml-user-select: none !important;
  -o-user-select: none !important;
  -moz-user-select: none !important;
  -webkit-user-select: none !important;
  user-select: none !important;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;

export const CardEventBody = styled.a`
  display: flex;
  flex-direction: column;
  gap:5px;
  text-decoration: none;
  position: relative;
  color: inherit;
  white-space: nowrap;
  -khtml-user-select: none !important;
  -o-user-select: none !important;
  -moz-user-select: none !important;
  -webkit-user-select: none !important;
  user-select: none !important;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;

export const CategoryTag = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.primary};
  margin-top: -11px;
  margin-left: 10px;
  border-radius: ${({ theme }) => theme.radiusDefault};
  padding-left: 10px;
  padding-right: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  padding-bottom: 3px;
`;

export const CardEventTitle = styled.div`
  padding: 0 8px;
  margin-bottom: 0;
  font-size: 16px;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  font-weight: 500;
`;

export const CardEventInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const CardEventPriceWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const CardEventPriceText = styled.div`
  font-size: 11px;
  color: #8d8d8d;
`;

export const CardEventPrice = styled.div`
  display: block;
  font-size: 1.5em;
  font-weight: bold;
`;

export const CardEventFooter = styled.div`
  padding: 6px;
  background-color: transparent;
`;

export const OwnerImage = styled.div``;
export const OwnerName = styled.div``;

export const OwnerInfo = styled.div`
  display: flex;
  align-items: center;
  ${OwnerName} {
    color: unset;
    font-size: 12px;
    font-weight: bold;
  }
  ${OwnerImage} {
    margin-right: 5px;
    max-width: 25px;
    border-radius: 100%;
    image {
      width: 100%;
      border-radius: 100%;
    }
  }
`;

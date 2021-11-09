import styled from 'styled-components';

export const TimelineContent = styled.div`
  flex: 0 0 40%;
`;

export const TimeLine = styled.div`
  transition: all ease 0.4s;
  /* box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px; */
  border-radius: ${({ theme }) => theme.defaultRadius};
`;

export const TimelineHeader = styled.div``;
export const RoadmapTitle = styled.h2`
font-size: 18px;
font-weight: bold;
margin-bottom: .75rem;
`;

export const TimeLineItemTitle = styled.h2`
font-size: 14px;
margin-bottom: 10px;
`;

export const TimelineEventDate = styled.span`
`;


export const TimeLineItem = styled.li`
  padding: 0em 1.8em;
  border-left: solid 2px #ddd;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* &:before {
    content: "";
    display: flex;
    justify-content: center;
    color: #fff;
    background: ${({ theme }) => theme.colors.primary};
    align-items: center;
    position: absolute;
    border-radius: 50%;
    border: solid 4px #fff;
    right: 0;
    lefT: 10px;
    width: 20px;
    height: 20px;
    z-index: 2;
  } */
`;

export const TimelineIcon = styled.div`
    display: flex;
    justify-content: center;
    color: #fff;
    background: ${({ theme }) => theme.colors.primary};
    align-items: center;
    position: absolute;
    border-radius: 50%;
    border: solid 4px #fff;
    left: -8px;
    width: 40px;
    font-size: 1.4em;
    height: 40px;
    z-index: 2;
`
export const TimelineList = styled.ul`
  list-style-type: none;
  position: relative;
  padding-left: .75em;
  
  /* &:before {
    content: " ";
    background: #dbdfe3;
    display: inline-block;
    position: absolute;
    left: 21px;
    width: 1px;
    height: 100%;
    z-index: 1;
  } */
`;

export const TimeLineItemValueList = styled.ul`
  position: relative;
  padding: 0;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color:#606060;
  border-radius: ${({ theme }) => theme.defaultRadius};
`;
export const TimeLineItemValueItem = styled.li`
  display: flex;
  font-size: 14px;

  align-items: center;
  border-radius: ${({ theme }) => theme.defaultRadius};
  padding:.2em;
  /* background: ${({ theme }) => theme.colors.primary+'0d'}; */
  /* &:before {
    content: " ";
    background: ${({ theme }) => theme.colors.primary};
    display: inline-block;
    position: absolute;
    left: -22px;
    width: 10px;
    height: 2px;
    z-index: 2;
  } */
`;

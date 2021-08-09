import styled from "styled-components";
import { Button } from "../_Elements/Button";

export const Container = styled.div`
  background-color: #fff;
  border-radius: ${({ theme }) => theme.radiusDefault};
  padding: 0.5em;
  /* border: solid 1px #eee; */
  display: flex;
  flex-direction: column;
`;
export const Thumbnail = styled.div`
  position: relative;
  margin-left: -0.4em;
  margin-right: -0.4em;
  margin-top: -0.4em;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    image-rendering: unset;
    border-top-left-radius: ${({ theme }) => theme.radiusDefault};
    border-top-right-radius: ${({ theme }) => theme.radiusDefault};
  }
`;

export const Title = styled.h5`
  font-weight: 600;
  line-height: 1.5;
  font-size: 16px;
  color: rgb(25, 31, 40);
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
`;

export const Description = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
`;

export const Price = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const AddtPackageContainer = styled.div`
  width: 100%;
  height: calc(100% - 35%);
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  z-index: 3;
  padding: 0.5em;
  background-color: #fff;
  border-top: solid 1px #ddd;
  ${({ open }) =>
    open
      ? (document.body.style.overflow = "hidden ")
      : (document.body.style.overflow = "auto")}
`;
export const AddtPackageContent = styled.div`
  flex: 1;
`;

export const AddtPackageHeader = styled.div`
  display: flex;
`;

export const AddtPackageTitle = styled.h5`
  flex: 1;
`;

export const AddtPackagePassengerList = styled.ul`
  display: flex;
  overflow: auto;
  max-height: 430px;
  flex-direction: column;
  gap: 10px;
`;
export const AddtPackagePassengerListItem = styled.li`
  display: flex;
  padding: 0.3em;
  border-bottom: solid 1px #eee;
  span {
    flex: 1;
  }
`;
export const AddtPackageFooter = styled.div`
  display: flex;
  gap: 10px;
`;
export const AddtrPackageButton = styled(Button)`
  width: 100%;
`;

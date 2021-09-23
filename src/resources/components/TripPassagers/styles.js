import styled from "styled-components";
import Button from "../_Elements/Button";

export const PassagerList = styled.div`
  padding: 0.8em;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8em 0;
  border-bottom: solid 1px #eee;
`;


export const TicketForm = styled.form``

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h4`
  margin: 0;
`;
export const Price = styled.span`
  font-weight: bold;
`;
export const Description = styled.small``;

export const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const ActionButton = styled.button`
  border: solid 1px ${({ theme }) => theme.colors.primary};
  font-size: 1.4em;
  background-color: transparent !important;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 100%;
`;

export const Quantity = styled.div`
  font-weight: bold;
  font-size: 1.3em;
`;

export const InfoTrip = styled.div`
display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const InfoDetails = styled.span`
  display: flex;
  flex-direction: column;
  align-items: ${({ justify }) => justify};
`;

export const Period = styled.div`
  font-weight: bold;
  color: #555;
`;

export const InfoTop = styled.div`
font-size: 12px;
`;
export const InfoPriceValue = styled.span`
  font-weight: bold;
  font-size: 1.6em;
  margin-top: -6px;
`;

export const Vacancies = styled.div`
  color: #333;
`;

export const TotalAmountContainer = styled.div`
  color: #333;
  display: flex;
  justify-content: flex-end;
  padding: .8em;
`;
export const TotalAmount = styled.div`
  font-size: 1.8em;
  font-weight: bold;
`;

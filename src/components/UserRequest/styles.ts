import styled from "styled-components/native";
import { dark } from "../../themes/dark";

export const Container = styled.View`
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  height: 36px;
  width: 36px;
  border-radius: 18px;
  margin-right: 16px;
`;

export const Username = styled.Text`
  font-family: "Inter_500Medium";
  font-size: 14px;
  color: ${dark.colors.white};
`;

export const Message = styled.Text`
  font-family: "Inter_500Medium";
  font-size: 14px;
  color: ${dark.colors.gray};
`;

export const ContainerButton = styled.View`
  width: 100px;
  height: 32px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Column = styled.View``;

export const UserContainerIcon = styled.View`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background-color: ${dark.colors.purple};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -2px;
  left: 24px;
  border: 2px ${dark.colors.background};
`;

export const UserIcon = styled.Image`
  height: 8px;
  width: 8px;
`;

export const Verified = styled.Image`
  width: 16px;
  height: 16px;
`;
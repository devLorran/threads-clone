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

export const Name = styled.Text`
  font-family: "Inter_400Regular";
  font-size: 14px;
  color: ${dark.colors.gray};
  margin-top: 4px;
`;

export const Column = styled.View``;

export const ContainerButton = styled.View`
  width: 100px;
  height: 32px;
`;

export const Row = styled.View`
  flex-direction: row;
`;
export const Verified = styled.Image`
  width: 16px;
  height: 16px;
`;
export const Followers = styled.Text`
  font-family: "Inter_400Regular";
  font-size: 14px;
  color: ${dark.colors.white};
  margin-top: 8px;
`
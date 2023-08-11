import styled from "styled-components/native";
import { dark } from "../../themes/dark";

export const Container = styled.View`
  flex: 1;
  background-color: ${dark.colors.background};
`;

export const Heading = styled.Text`
  font-family: "Inter_700Bold";
  font-size: 32px;
  color: ${dark.colors.white};
  margin: 0 16px;
`;

export const SafeArea = styled.SafeAreaView``;

export const ContainerList = styled.View`
  margin: 8px 0;
`;

export const CategoriesList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
})``;

export const ButtonCategory = styled.TouchableOpacity<{ focused?: boolean }>`
  background-color: ${({ focused }) =>
    focused ? dark.colors.white : "transparent"};
  border: ${({ focused }) => (focused ? null : `1px ${dark.colors.white}`)};
  border-radius: 8px;
  padding: 8px 24px;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

export const ButtonText = styled.Text<{ focused?: boolean }>`
  font-family: "Inter_600SemiBold";
  font-size: 14px;
  color: ${({ focused }) => (focused ? dark.colors.gray : dark.colors.white)};
`;

export const List = styled.FlatList``;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${dark.colors.gray_light};
  margin-left: 60px;
`;
import styled from "styled-components/native";
import { dark } from "../../themes/dark";
import { MaterialTabBar } from "react-native-collapsible-tab-view";
export const Container = styled.View`
    flex:1;
    background-color: ${dark.colors.background}
`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
`;
export const ButtonIcon = styled.TouchableOpacity<{mr?: string}>`
    margin-right: ${({mr}) => (mr ? mr : 0)}px;
`;
export const Icon = styled.Image`
    
`;
export const SafeArea = styled.SafeAreaView`
    padding-top:22px;
    background-color: ${dark.colors.background};
    z-index:99;
`;
export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  padding: 16px;
`;
export const Spacing = styled.View`
  width: 8px;
`;

export const TabLabel = styled.Text`
  font-family: "Inter_600SemiBold";
  font-size: 12px;
  color: ${dark.colors.white};
`;

export const CustomTabBar = styled(MaterialTabBar).attrs({
indicatorStyle: {
    backgroundColor: dark.colors.white,
    },
})``;
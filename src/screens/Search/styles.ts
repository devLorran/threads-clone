import styled from "styled-components/native";
import { dark } from "../../themes/dark";

export const Container = styled.View`
    flex: 1;
    background-color: ${dark.colors.background};
`;

export const Header = styled.View`
    padding: 0 16px;
`;

export const Title = styled.Text`
    font-family: "Inter_700Bold";
    font-size: 32px;
    color: ${dark.colors.white};
`;

export const SafeArea = styled.SafeAreaView`
    padding-top:22px;
    background-color: ${dark.colors.background};
    z-index:99;
`;

export const ContainerInput = styled.View`
    background-color: ${dark.colors.gray_dark};
    padding: 8px;
    border-radius: 8px;
    flex-direction: row;
    margin-top: 16px;
`;

export const Input = styled.TextInput.attrs({
    keyboardAppearance: "dark",
    })`
    font-family: "Inter_500Medium";
    color: ${dark.colors.white};
    flex: 1;
    margin-left: 8px;
`;

export const List = styled.FlatList``;

export const Divider = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${dark.colors.gray_light};
    margin-left: 60px;
`;
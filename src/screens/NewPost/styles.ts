import styled from "styled-components/native";
import { dark } from "../../themes/dark";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export const SafeArea = styled.SafeAreaView`
    background-color: ${dark.colors.background};
    z-index:99;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${dark.colors.background};
  align-items: center;
  top: -2px
`;

export const CancelButton = styled.TouchableOpacity`
  margin-left: 16px;
`;

export const Cancel = styled.Text`
  font-family: "Inter_500Medium";
  font-size: 12px;
  color: ${dark.colors.white};
`;

export const Heading = styled.Text`
  font-family: "Inter_700Bold";
  font-size: 16px;
  color: ${dark.colors.white};
  position: absolute;
  align-self: center;
  top: -2px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${dark.colors.gray_light};
  margin-top: 16px;
`;

export const Avatar = styled.Image`
  height: 36px;
  width: 36px;
  border-radius: 18px;
`;

export const AvatarSmall = styled.Image`
  height: 16px;
  width: 16px;
  border-radius: 8px;
`;

export const Username = styled.Text`
  font-family: "Inter_500Medium";
  font-size: 14px;
  color: ${dark.colors.white};
  margin-left: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  keyboardAppearance: "dark",
  autoFocus: true,
})`
  font-family: "Inter_400Regular";
  font-size: 14px;
  color: ${dark.colors.white};
  margin-top: 8px;
  margin-left: 8px;
`;

export const Column = styled.View``;

export const Content = styled.View`
  padding: 16px;
`;

export const Line = styled.View`
  background-color: ${dark.colors.gray};
  width: 1.5px;
  height: 80px;
  margin: 16px 0;
`;

export const ColumnAvatar = styled.View`
  align-items: center;
`;

export const ButtonAttach = styled.TouchableOpacity`
  margin-top: 16px;
`;

export const Button = styled.TouchableOpacity``;

export const Icon = styled.Image``;

export const BottomModal = styled(BottomSheetModal).attrs({
    handleStyle: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    handleIndicatorStyle: { backgroundColor: "transparent" },
    backgroundStyle: { backgroundColor: dark.colors.gray_mid },
  })``;
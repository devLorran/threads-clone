import styled from "styled-components/native";
import { dark } from "../../themes/dark";

export const Btn = styled.TouchableOpacity<{ inverted?: boolean }>`
    background-color: ${({ inverted }) =>
        inverted ? "transparent" : dark.colors.white};
    border: ${({ inverted }) => (inverted ? `1px ${dark.colors.white}` : null)};
    border-radius: 8px;
    padding: 8px 0;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const BtnText = styled.Text<{ inverted?: boolean }>`
    font-family: "Inter_600SemiBold";
    font-size: 12px;
    color: ${({ inverted }) => (inverted ? dark.colors.white : dark.colors.gray)};
`;
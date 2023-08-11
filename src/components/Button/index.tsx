//import liraries
import React from 'react';
import * as Styles from "./styles";
import { IButton } from './types';

// create a component
const Button = ({ inverted, text }: IButton) => {
    return (
        <Styles.Btn inverted={inverted}>
            <Styles.BtnText inverted={inverted}>{text}</Styles.BtnText>
        </Styles.Btn>
    );
};


export default Button;

import React from "react";

import * as S from "./styles";
import Button from "../Button";
import { IUserRequest } from "./types";

const UserRequest = ({ ...props }: IUserRequest) => {
    return (
        <S.Container>
            <S.Row>
                <S.Avatar source={{ uri: props.avatar_uri }}/>
                <S.UserContainerIcon>
                    <S.UserIcon source={require("../../assets/images/tab/profile_focused.png")} />        
                </S.UserContainerIcon>
                <S.Column>
                    <S.Row>
                        <S.Username>{props.username}</S.Username>
                        {props.verified && (<S.Verified source={require('../../assets/images/verified.png')} />)}
                    </S.Row>
                    <S.Message>{props.message}</S.Message>
                </S.Column>
            </S.Row>
            <S.ContainerButton>
                <Button inverted text="Seguir" />
            </S.ContainerButton>
        </S.Container>
    );
};

export default UserRequest;

//import liraries
import React from 'react';
import * as Styles from "./styles"
import Button from "../Button";
import { IUser } from "./types";
const UserFollow = ({...props}: IUser) => {
    return (
        <Styles.Container>
            <Styles.Avatar source={{uri: props.avatar_uri}} />
            <Styles.Column>
                <Styles.Row>
                    <Styles.Username>{props.username}</Styles.Username>
                    {props.verified && (<Styles.Verified source={require('../../assets/images/verified.png')} />)}
                </Styles.Row>
                    <Styles.Name>{props.name}</Styles.Name>
                <Styles.Followers>{props.followers} seguidores</Styles.Followers>
            </Styles.Column>
            <Styles.Row />
            <Styles.ContainerButton>
                <Button inverted text='Seguir' />
            </Styles.ContainerButton>
        </Styles.Container>
    );
};

export default UserFollow;

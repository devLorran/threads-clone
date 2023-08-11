//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Styles from "./styles"
const CardUser = () => {

    const UserInfo = () => (
        <Styles.Column>
            <Styles.Name>Lorran Rodrigues</Styles.Name>
            <Styles.RowUsername>
                <Styles.Username>@Goohan</Styles.Username>
                <Styles.TagContainer>
                    <Styles.Tag>Threads.net</Styles.Tag>
                </Styles.TagContainer>
            </Styles.RowUsername>
        </Styles.Column>
    )

    return (
        <Styles.Container>
            <Styles.Row>
                <UserInfo />
            <Styles.Avatar source={require('../../assets/images/Lorran.jpg')}/>
            </Styles.Row>
            <Styles.Bio>Desenvolvedor Mobile | Front End | Vamos recriar o mundo :D</Styles.Bio>
            <Styles.AvatarGroupContainer>
                <Styles.AvatarGroup 
                    source={{uri: 'https://randomuser.me/api/portraits/women/32.jpg'}}
                />
                <Styles.AvatarGroup 
                    source={{uri: 'https://randomuser.me/api/portraits/women/60.jpg'}}
                    ml='-8'
                />
                <Styles.AvatarGroup 
                    source={{uri: 'https://randomuser.me/api/portraits/women/40.jpg'}}
                    ml='-8'
                />
                <Styles.Followers>2800 seguidores</Styles.Followers>
            </Styles.AvatarGroupContainer>
        </Styles.Container>
    );
};

export default CardUser;

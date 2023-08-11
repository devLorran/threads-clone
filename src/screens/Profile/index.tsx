//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import * as Styles from "./styles"
import CardUser from '../../components/CardUser';
import Button from '../../components/Button';
import { Tabs } from 'react-native-collapsible-tab-view';
import { dark } from '../../themes/dark';
import Thread from '../../components/Thread';

import posts from "../../assets/json/posts.json";
import { IPost } from '../../components/Thread/types';

const Profile = () => {

    const Header = () => (
        <Styles.Header>
            <Styles.ButtonIcon>
                <Styles.Icon source={require('../../assets/images/privacy.png')}/>
            </Styles.ButtonIcon>
            <Styles.Row>
                <Styles.ButtonIcon mr='16'>
                    <Styles.Icon source={require('../../assets/images/instagram.png')}/>
                </Styles.ButtonIcon>
                <Styles.ButtonIcon>
                    <Styles.Icon source={require('../../assets/images/configuration.png')}/>
                </Styles.ButtonIcon>
            </Styles.Row>
        </Styles.Header>
    )

    const Content = () => (
        <Styles.Container>
            <Header />
            <CardUser />
            <Styles.ContainerButtons>
                <Button inverted text='Editar Perfil'/>
                <Styles.Spacing/>
                <Button inverted text='Compartilhar Perfil'/>
            </Styles.ContainerButtons>
        </Styles.Container>
    )

    return (
        <>
        <Styles.SafeArea />
        <Tabs.Container
            renderTabBar={(props) => <Styles.CustomTabBar {...props} />} 
            renderHeader={Content}
            headerContainerStyle={{backgroundColor: dark.colors.background}}
        >
            <Tabs.Tab name='threads' label={() => <Styles.TabLabel>Threads</Styles.TabLabel>}>
                <Styles.Container>
                    <Tabs.FlatList data={posts} 
                    keyExtractor={(item: IPost) => `${item.id}`}
                    renderItem={({item}) => (<Thread
                        {... item}
                    />)} />
                </Styles.Container>
            </Tabs.Tab>
            <Tabs.Tab name='respostas' label={() => <Styles.TabLabel>Respostas</Styles.TabLabel>}>
                <></>
            </Tabs.Tab>
        </Tabs.Container>
        
        </>
    );
};

export default Profile;

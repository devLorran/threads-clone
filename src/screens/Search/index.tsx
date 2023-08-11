//import liraries
import React from 'react';
import * as Styles from "./styles"; 
import { dark } from '../../themes/dark';
import Feather from "@expo/vector-icons/Feather";
import UserFollow from "../../components/UserFollow";

import users from "../../assets/json/users.json";
import { ListRenderItemInfo } from "react-native";
import { IUser } from "../../components/UserFollow/types";
const Search = () => {

    const Header = () => (
        <Styles.Header>
            <Styles.SafeArea/>
            <Styles.Title>Pesquisar</Styles.Title>
            <Styles.ContainerInput>
                <Feather color={dark.colors.gray} name='search' size={20} />
                <Styles.Input placeholder='Pesquisar' placeholderTextColor={dark.colors.gray}/>
            </Styles.ContainerInput>
        </Styles.Header>
    )

    return (
        <Styles.Container>
            <Styles.SafeArea />
            <Header />
            <Styles.List data={users} ItemSeparatorComponent={Styles.Divider} renderItem={({item}:ListRenderItemInfo<IUser>) => <UserFollow {...item} />}/>
        </Styles.Container>
    )
};

export default Search;

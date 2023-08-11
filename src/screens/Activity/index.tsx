//import liraries
import React, { Component } from 'react';
import * as S from "./styles";
import { ListRenderItemInfo } from "react-native";
import { ICategory } from "./types";
import UserRequest from "../../components/UserRequest";

import usersRequests from "../../assets/json/users_request.json";
import { IUserRequest } from "../../components/UserRequest/types";

const Activity = () => {

    const [selectedIndex, setSelectecIndex] = React.useState<number>();

    //lista de atividades
    const CATEGORIES: ICategory[] = [
        {
            id: 0,
            name: 'Todos',
        },
        {
            id: 1,
            name: 'Respostas',
        },
        {
            id: 2,
            name: 'Menções',
        },
        {
            id: 3,
            name: 'Verificado',
        }
    ]

    return (
        <S.Container>
            <S.SafeArea/>
            <S.Heading>Atividade</S.Heading>
            <S.ContainerList>
                <S.CategoriesList data={CATEGORIES} renderItem={({item, index}: ListRenderItemInfo<ICategory>) => 
                <S.ButtonCategory
                focused={selectedIndex === index}
                onPress={() => 
                setSelectecIndex(index)}>
                    <S.ButtonText focused={selectedIndex === index}>{item.name}</S.ButtonText>
                </S.ButtonCategory>} />
            </S.ContainerList>
            <S.List
            data={usersRequests}
            ItemSeparatorComponent={S.Divider}
            renderItem={({ item }: ListRenderItemInfo<IUserRequest>) => (
                <UserRequest {...item} />
                )}
            />
        </S.Container>
    );
};

export default Activity;

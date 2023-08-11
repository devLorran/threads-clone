//import liraries
import React from 'react';
import * as Styles from "./styles";

import posts from "../../assets/json/posts.json";
import { IPost } from '../../components/Thread/types';
import { ListRenderItemInfo } from 'react-native';
import Thread from '../../components/Thread';
const Home = () => {
    return (
        <Styles.Container>
            <Styles.SafeArea />
            <Styles.List data={posts} renderItem={({ item }: ListRenderItemInfo<IPost>) => (
                <Thread {... item} />
            )}
            />
        </Styles.Container> 
    );
};

export default Home;

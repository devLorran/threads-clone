//import liraries
import React from 'react';
import * as Styles from "./styles";
import { IPost } from './types';
const Thread = ({ ... props }: IPost) => {//espread operadotr

    const Post = () => (
        <Styles.Container>
            <Styles.Username>{props.username}</Styles.Username>
            <Styles.Post>
                {props.post}
            </Styles.Post>
            {props.postImage && (
                <Styles.PostImage source={{uri:props.postImage}}/>
            )}
        </Styles.Container>
    )

    const ActionButtons = () => (
        <Styles.ContainerActions>
            <Styles.Action>
                <Styles.Icon source={require('../../assets/images/actions/like.png')}/>
            </Styles.Action>
            <Styles.Action>
                <Styles.Icon source={require('../../assets/images/actions/comment.png')}/>
            </Styles.Action>
            <Styles.Action>
                <Styles.Icon source={require('../../assets/images/actions/reply.png')}/>
            </Styles.Action>
            <Styles.Action>
                <Styles.Icon source={require('../../assets/images/actions/share.png')}/>
            </Styles.Action>
        </Styles.ContainerActions>
    )

    const Interactions = () => (
            <Styles.ContainerInteractions>
            <Styles.AvatarGroupContent>
            <Styles.Row>
                <Styles.AvatarGroup
                h="16"
                w="16"
                source={{ uri: props.avatar_uri }}
                />
            </Styles.Row>
            </Styles.AvatarGroupContent>
            <Styles.Likes>7 respostas - 59 Curtidas</Styles.Likes>
        </Styles.ContainerInteractions>
    )
    return (
        <Styles.Container>
            <Styles.Row>
                <Styles.Column style={{alignItems: 'center'}}>
                    <Styles.Avatar source={{uri: props.avatar_uri}} />
                    <Styles.Line />
                </Styles.Column>
                <Styles.Column>
                    <Post />
                    <ActionButtons />
                </Styles.Column>
            </Styles.Row>
            <Interactions />
        </Styles.Container>
    );
};

export default Thread;

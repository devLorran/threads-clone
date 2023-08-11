import React from "react";

import * as S from "./styles";

import {
    BottomSheetModal,
  } from '@gorhom/bottom-sheet';

import { dark } from "../../themes/dark";

import Feather from "@expo/vector-icons/Feather";
import { View, Text, Button } from "react-native";

const NewPost = () => {
  // ref
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = React.useMemo(() => ['100%'], []); 

  // callbacks
  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present(); 
  }, []);

  const handleCloseModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const handleSheetChanges = React.useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const NewPostIcon = () => (//ação que faz o modal aparecer na tela assim que clica no botão do tabottom
    <S.Button onPress={handlePresentModalPress}>
      <S.Icon source={require("../../assets/images/tab/post.png")} />
    </S.Button>
  );

  return (
    <S.Container>
        <NewPostIcon />
        <View style={{top: 40}}>
            {/* <Button
                onPress={handlePresentModalPress}
                title="Present Modal"
                color="white"
            /> */}
            <S.BottomModal enablePanDownToClose={false} index={0} snapPoints={snapPoints} ref={bottomSheetModalRef}>
                <S.CancelButton>
                    <S.Cancel onPress={handleCloseModalPress}>Cancelar</S.Cancel>
                </S.CancelButton>
                <S.Heading>Nova Thread</S.Heading>
                <S.Divider />
                <S.Content>
                    <S.Row>
                        <S.ColumnAvatar>
                            <S.Avatar source={require('../../assets/images/Lorran.jpg')} />
                            <S.Line />
                            <S.AvatarSmall source={require('../../assets/images/Lorran.jpg')} />
                        </S.ColumnAvatar>
                        <S.Column>
                            <S.Username>Lorran Rodrigues</S.Username>
                            <S.Input placeholder="inicie uima nova Thread" placeholderTextColor={dark.colors.gray} />
                            <S.ButtonAttach>
                                <Feather name="paperclip" size={24} color={dark.colors.gray}/>
                            </S.ButtonAttach>
                        </S.Column>
                    </S.Row>
                </S.Content>
            </S.BottomModal>
        </View>
    </S.Container>
  );
};

export default NewPost;

import React from 'react';
import {ListItem, Overlay} from 'react-native-elements';

export function ActionSheet({actions, visible, closeOverlay}) {
  const cancelAction = {
    title: 'Cancelar',
    action: closeOverlay,
  };
  return (
    <Overlay
      overlayStyle={{width: '90%'}}
      isVisible={visible}
      onBackdropPress={closeOverlay}>
      <>
        {[...actions, cancelAction].map(({title, action}) => (
          <ListItem
            key={title}
            onPress={() => {
              closeOverlay();
              action();
            }}>
            <ListItem.Content>
              <ListItem.Title>{title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </>
    </Overlay>
  );
}

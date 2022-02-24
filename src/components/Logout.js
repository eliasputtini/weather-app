import * as React from 'react';
import {Button, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../providers/AuthProvider';

export function Logout() {
  const navigation = useNavigation();
  const {signOut} = useAuth();

  return (
    <Button
      title="Sair"
      onPress={() => {
        Alert.alert('Log Sair', null, [
          {
            text: 'Sim, Sair',
            style: 'destructive',
            onPress: () => {
              signOut();
              navigation.popToTop();
            },
          },
          {text: 'Cancelar', style: 'cancel'},
        ]);
      }}
    />
  );
}

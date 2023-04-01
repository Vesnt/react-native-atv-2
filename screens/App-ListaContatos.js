import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Header, ListItem, Avatar, Icon } from 'react-native-elements';
import { useIsFocused } from "@react-navigation/native";

function ListaScreen({ navigation }) {

  const lista = [
    {   id: 1, nome: 'Marcos Andrade',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HdzG1pEhoNcrazR62fZv_2gNXtiqlAq42A&usqp=CAU',
        telefone: '81 988553424', email: 'teste@teste.com.br'
    },
    {
        id: 2, nome: 'Patrícia Tavares',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4JbwG0c_1MD5Wv_dDXcEXFPDzJAMA2SMqtA&usqp=CAU',
        telefone: '81 998765332', email: 'teste@teste.com.br'
    },
    {
        id: 3, nome: 'Rodrigo Antunes',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HdzG1pEhoNcrazR62fZv_2gNXtiqlAq42A&usqp=CAU',
        telefone: '81 987765525', email: 'teste@teste.com.br'
    },]

  return (
    <View >
      <Header
        leftComponent={<Button
          icon={
            <Icon
              name="arrow-left"
              size={25}
              color="white"
            />
          }
          title=""
          onPress={() => navigation.navigate('Home')}
        />}
        rightComponent={<Button
          title="+"
          onPress={() => navigation.navigate('CadastroContato')}
        />}
        centerComponent={{ text: 'Lista de Contatos', style: { color: '#fff', fontSize: 25 } }}
      />
      {
        lista.map((l, i) => (
          <ListItem key={i} bottomDivider onPress={() => navigation.navigate('ALTERARCONTATO',
            {
              nome: l.nome,
              telefone: l.telefone,
              email: l.email,
              id: l.id
            })}>
            <Avatar source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{l.nome}</ListItem.Title>
              <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
    </View>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    paddingTop: 40
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#1c313a',
    padding: 10,
    margin: 10,
    borderRadius: 14,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ListaScreen;
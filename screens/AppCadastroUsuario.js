import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  Header, Icon  } from 'react-native-elements';

const CadastroUsuarioScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Cpf:', cpf);
    console.log('Senha:', password);
  };

  return (


 
<View>
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
          onPress={() => navigation.navigate('Lista')}
        />}
        
        
        centerComponent={{ text: 'Cadastrar Usuário', style: { color: '#fff', fontSize: 25 } }}
      />
      <View style={styles.container}>
  
      <Input
        placeholder="Nome"
        onChangeText={(text) => setName(text)}
        value={name}
        autoCapitalize="words"
      />
      <Input
        placeholder="Cpf"
        onChangeText={(text) => setCpf(text)}
        value={cpf}
        keyboardType="decimal-pad"
        autoCapitalize="none"
      />
      <Input
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button
          title="SALVAR"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('Lista')} />

      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
  title: {
    marginBottom: 25,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});

export default CadastroUsuarioScreen;

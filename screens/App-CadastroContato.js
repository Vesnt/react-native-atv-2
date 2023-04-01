import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const CadastroContatoScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  

  const handleSignup = () => {
    console.log('Nome:', name);
    console.log('Telefone:', telefone);
    console.log('Email:', email);
    
   
  };

  return (


    <View>
      
      <Header
        leftComponent={<Button
          icon={
            <Icon
              name="arrow-left"
              size={20}
              color="white"
            />
          }
          title=""
          onPress={() => navigation.navigate('Lista')}
        />}
        
        
        centerComponent={{ text: 'Cadastro de Contatos', style: { color: '#fff', fontSize: 25 } }}
      />
<View style={styles.container}>
      <Input
        placeholder="Nome"
        onChangeText={(text) => setName(text)}
        value={name}
        autoCapitalize="words"
      />
     
       <Input
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

       <Input
        placeholder="Telefone"
        onChangeText={(text) => setTelefone(text)}
        value={telefone}
        keyboardType="decimal-pad"
        autoCapitalize="none"
      />
      
      <View style={styles.buttonContainer}>
        <Button
          title="SALVAR"
          buttonStyle={styles.button}
          onPress={()=>navigation.navigate('Lista')} />
        

        
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
    marginBottom: 60,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    paddingHorizontal: 25,
    borderRadius: 25,
  },
});

export default CadastroContatoScreen;

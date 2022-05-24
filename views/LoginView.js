import React from "react"; import { View, Text, TextInput, Button, Alert } from "react-native";
 export function LoginView({ navigation }) {
    return (
         <View>
              <Text>Sign Up or Sign In:</Text>
               <View>
                    <TextInput
                      placeholder="email" 
                      autoCapitalize="none" 
                      /> 
                      </View> 
                      <View> 
                          <TextInput 
                          placeholder="senha" 
                          secureTextEntry 
                          /> 
                          </View> 
                          <Button title="Entrar" /> 
                          <Button title="cadastrar" /> 
                          </View> ); }

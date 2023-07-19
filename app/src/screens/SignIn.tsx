import { VStack, Image, Text, Center, Heading } from "native-base";

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700" px={10}>
      {/* px padding
      bg é background */}
        <Image 
            source={BackgroundImg}
            alt="Pessoas treinando"
            resizeMode="contain"
            position="absolute"
        />
        {/* my é posicionamento na vertical */}
        <Center my={24}>
            <LogoSvg />

            <Text color="gray.100" fontSize="sm">
                Treine sua mente e o seu corpo.
            </Text>
        </Center>
        {/* mb é margin-bottom */}
        <Center>
            <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                Acesse a conta
            </Heading>

            <Input 
              placeholder="E-mail" 
              keyboardType="email-address"
               autoCapitalize="none" //tudo em minísculo

            />
            <Input 
              placeholder="Senha" 
              secureTextEntry //input de senha
            />

            <Button title="Acessar" />
      </Center>

      <Button title="Criar Conta" variant="outline" />
    </VStack>
  );
}
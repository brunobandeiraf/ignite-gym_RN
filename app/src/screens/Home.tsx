import { useState } from 'react';
import { FlatList, Heading, HStack, Text, VStack } from 'native-base';

import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { ExerciseCard } from '@components/ExerciseCard';

export function Home() {

  const [groupSelected, setGroupSelected] = useState('Costas')
  const [groups, setGroups] = useState(['Costas', 'Bíceps', 'Tríceps', 'Ombro'])

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList 
        data={groups} //Nome do grupo será a chave
        keyExtractor={item => item} // Desestrutura os itens
        renderItem={({ item }) => ( // Percorre um a um dos itens
          <Group 
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}

        horizontal // FlatList na horizontal
        showsHorizontalScrollIndicator={false} // Remover barra de scroll
        _contentContainerStyle={{
          px: 8, //padding
        }}
        my={10} // margin vertical 
        maxH={10} // Máximo da altura será 10, senão oculta espaço de toda tela
      />

      <VStack px={8}> 
       {/* justifyContent="space-between" - cada um em um canto 
        mb - margin-bottom 
        */}
        <HStack justifyContent="space-between" mb={5}> 
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize="sm">
            4
          </Text>
        </HStack>

        <ExerciseCard />
        <ExerciseCard />
        
      </VStack>

    </VStack>
  );
}
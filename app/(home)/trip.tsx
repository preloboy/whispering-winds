import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextType } from '@/components/TextType'
import { Input } from '@/components/Input'
import { Box } from '@/components/Box'
import { Scroll } from '@/components/Scroll'
import { Container } from '@/components/Container'
import { CardWithDetails } from '@/components/CardWithDetails'

export default function trip() {
  const [destination, setDestination] = useState('')
  return (
    <SafeAreaView>
      <Input placeholder='Search for Destinations ...' onChangeText={setDestination} />
      {/* <Box>
        <TextType type='defaultSemiBold'>Search results ...</TextType>
      </Box>
      <TextType>{destination}</TextType> */}
      <Box>
        <Container>
        <Scroll horizontal={true}>
          <TextType type='defaultSemiBold'>Trending</TextType>
          <TextType type='defaultSemiBold'>Seasonal</TextType>
          <TextType type='defaultSemiBold'>Weekend</TextType>
          <TextType type='defaultSemiBold'>Holidays</TextType>
        </Scroll>
        </Container>
      </Box>
        <Container>
      <Scroll horizontal={true}>
          <CardWithDetails>
            <TextType type='subtitle'>Title</TextType>
            <TextType>Description</TextType>
          </CardWithDetails>
          <CardWithDetails>
            <TextType type='subtitle'>Title</TextType>
            <TextType>Description</TextType>
          </CardWithDetails>
          <CardWithDetails>
            <TextType type='subtitle'>Title</TextType>
            <TextType>Description</TextType>
          </CardWithDetails>
      </Scroll>
        </Container>
    </SafeAreaView>
  )
}
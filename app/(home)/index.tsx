import { FlatList } from 'react-native'
import React from 'react'
import { Container } from '@/components/elements/Container'
import { Box } from '@/components/elements/Box'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextType } from '@/components/elements/TextType'
import { Button } from '@/components/elements/Button'
import { Services } from '@/constants/Services'
import { Packages } from '@/constants/Packages'
import { Tabbar } from '@/components/elements/Tabbar'
import { Scroll } from '@/components/elements/Scroll'
import { Header } from '@/components/Header'
import { PackagesList } from '@/components/PackageList'
import { PlaceList } from '@/components/PlacesList'

export default function index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Scroll
        horizontal={false}
      >
        <TextType type='title' header={true}>What's new today?</TextType>
        <Container>
          <FlatList 
          data={Services}
          // numColumns={4}
          horizontal
          renderItem={item => <Button col={true} name={item.item.name} type='filled' icon={item.item.icon} round align='center' iconSize={24} />}
          />
        </Container>
        <Header title='Popular Packages' link='View all' />
        <Box>
          <FlatList
            data={Packages}
            renderItem={item => <Tabbar>{item.item.name}</Tabbar>}
            horizontal showsHorizontalScrollIndicator={false}
          />
        </Box>
        <Container>
          <PackagesList />
        </Container>
        <Header title='Famous Places' link='View all' />
        <Container>
          <PlaceList />
        </Container>
      </Scroll>
    </SafeAreaView>
  )
}
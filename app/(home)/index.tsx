import { View, Text, Image, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Container } from '@/components/elements/Container'
import { Box } from '@/components/elements/Box'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextType } from '@/components/elements/TextType'
import { Button } from '@/components/elements/Button'
import { Places } from '@/constants/Places'
import { Services } from '@/constants/Services'
import { Packages } from '@/constants/Packages'
import { Tabbar } from '@/components/elements/Tabbar'
import { Scroll } from '@/components/elements/Scroll'
import { Header } from '@/components/Header'
import { PackagesList } from '@/components/Package'

export default function index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Scroll
        horizontal={false}
      >
        <TextType type='title' header={true}>What's new today?</TextType>
        <Container>
          {Services.map((service, index) => (
            <Button key={index} col={true} name={service.name} type='filled' icon={service.icon} round align='center' iconSize={24} />
          ))}
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
          {/* <Scroll horizontal={true} >
            {Places.map((place, index) => (
              <Card
                portrait
                key={index}
                image='https://th.bing.com/th/id/R.80048c94faacac8b7ff6af18efa3d92a?rik=Ac82coHKVHLVyg&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-8.jpg&ehk=GoUR7nA3jNm0gIdWFJoMVL1iu%2bJuWOU7Nu7KkgKZzeQ%3d&risl=&pid=ImgRaw&r=0'
              >
                <TextType type="defaultSemiBold">{place.name}</TextType>
              </Card>
            ))}
          </Scroll> */}
        </Container>
      </Scroll>
    </SafeAreaView>
  )
}
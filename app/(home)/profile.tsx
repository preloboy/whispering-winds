import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Scroll } from '@/components/elements/Scroll'
import { Container } from '@/components/elements/Container'
import { TextType } from '@/components/elements/TextType'
import { ImageView } from '@/components/elements/ImageView'
import { Box } from '@/components/elements/Box'
import { Logo } from '@/components/elements/Logo'
import { Button } from '@/components/elements/Button'
import { supabase } from '@/lib/supabase'
import { useGlobalContext } from '@/lib/GlobalProvider'

export default function profile() {

  const { logout } = useGlobalContext()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Scroll>
        <Container style={styles.profile}>
          <Container style={styles.user}>
            <ImageView
              type='round'
              image='https://toppng.com/uploads/preview/stock-person-png-stock-photo-man-11563049686zqeb9zmqjd.png'
            />
            <Container col={true}>
              <TextType type='subtitle'>Hi!, User</TextType>
              <TextType type='defaultSemiBold'>usename</TextType>
              <TextType >email@mail.com</TextType>
            </Container>
          </Container>
          <TextType type='defaultSemiBold' header={true}>Edit</TextType>
        </Container>
        <Container style={styles.header}>
          <TextType type='defaultSemiBold' header={true}>Personal Details</TextType>
          <TextType type='link' header={true}>Edit</TextType>
        </Container>
        <Box style={styles.details}>
          <TextType type='default'>Name</TextType>
          <TextType type='default'>Email</TextType>
          <TextType type='default'>Phone</TextType>
          <TextType type='default'>Address</TextType>
        </Box>
        <Container style={styles.header}>
          <TextType type='defaultSemiBold' header={true}>Address</TextType>
          <TextType type='link' header={true}>Edit</TextType>
        </Container>
        <Box style={styles.details}>
          <TextType type='default'>Address 1</TextType>
          <TextType type='default'>Address 2</TextType>
          <TextType type='default'>City</TextType>
          <TextType type='default'>State</TextType>
          <TextType type='default'>Country</TextType>
        </Box>
        <Container style={styles.header}>
          <TextType type='defaultSemiBold' header={true}>Contact</TextType>
          <TextType type='link' header={true}>Edit</TextType>
        </Container>
        <Box style={styles.details}>
          <TextType type='default'>Phone No</TextType>
          <TextType type='default'>Email</TextType>
        </Box>
        <Container>
          <Container style={styles.social}>
            <Logo name='logo-facebook' size={28} />
            <Logo name='logo-twitter' size={28} />
            <Logo name='logo-instagram' size={28} />
          </Container>
        </Container>
        <Button onPress={logout} name='Logout' type='filled' style={styles.logout} />
      </Scroll>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  profile: {
    // width: '100%',
    paddingLeft: 15,
    marginTop: 30,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  details: {
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 10,
    paddingVertical: 10,
  },
  social: {
    marginTop: 20,
    marginHorizontal: 'auto',
    gap: 20
  },
  user: {
    alignItems: 'center'
  },
  header: {
    justifyContent: 'space-between',
  },
  logout: {
    marginVertical: 20,
    marginHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 10,
  }
})
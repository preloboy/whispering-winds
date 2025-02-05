import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { StyleSheet, Alert } from 'react-native'
import { Session } from '@supabase/supabase-js'
import { Container } from './elements/Container'
import { TextType } from './elements/TextType'
import { ImageView } from './elements/ImageView'
import { Box } from './elements/Box'
import { UserProps } from '@/constants/Users'
import { Logo } from './elements/Logo'
import { Header } from './Header'

export type AccountProps = {
  session?: Session
  user: UserProps
}

export default function Account({ session, user }: AccountProps) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState('')
  const [website, setWebsite] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')

  useEffect(() => {
    if (session) getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      if (!session?.user) throw new Error('No user on the session!')

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', session?.user.id)
        .single()
      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string
    website: string
    avatar_url: string
  }) {
    try {
      setLoading(true)
      if (!session?.user) throw new Error('No user on the session!')

      const updates = {
        id: session?.user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      const { error } = await supabase.from('profiles').upsert(updates)

      if (error) {
        throw error
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container col>
      <Container style={styles.profile}>
        <Container style={styles.user}>
          <ImageView
            type='round'
            image='https://toppng.com/uploads/preview/stock-person-png-stock-photo-man-11563049686zqeb9zmqjd.png'
          />
          <Container col={true} style={{paddingLeft:10}}>
            <TextType type='subtitle'>Hi!, {user.name}</TextType>
            <TextType >{user.email}</TextType>
          </Container>
        </Container>
        <TextType type='defaultSemiBold' header={true}>Edit</TextType>
      </Container>
      <Header title='Personal Details' link='Edit' />
      <Box style={styles.details}>
        <TextType type='default'>{user.name}</TextType>
        <TextType type='default'>{user.email}</TextType>
        <TextType type='default'>{user.phone}</TextType>
        <TextType type='default'>{user.address}</TextType>
      </Box>
      <Header title='Address' link='Edit' />
      <Box style={styles.details}>
        <TextType type='default'>{user.address}</TextType>
      </Box>
      <Header title='Contact Details' link='Edit' />
      <Box style={styles.details}>
        <TextType type='default'>{user.phone}</TextType>
        <TextType type='default'>{user.email}</TextType>
      </Box>
      <Container>
        <Container style={styles.social}>
          <Logo name='logo-facebook' size={28} />
          <Logo name='logo-twitter' size={28} />
          <Logo name='logo-instagram' size={28} />
        </Container>
      </Container>
    </Container>
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
    paddingLeft:10
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
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Scroll } from '@/components/elements/Scroll'
import { Button } from '@/components/elements/Button'
import { useGlobalContext } from '@/lib/GlobalProvider'
import Account from '@/components/Account'
import { Users } from '@/constants/Users'

export default function profile() {

  const { logout } = useGlobalContext()
  const user = Users[1]

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Scroll>
        <Account user={user} />
        <Button onPress={logout} name='Logout' type='filled' style={{ color: 'red' }} />
      </Scroll>
    </SafeAreaView>
  )
}


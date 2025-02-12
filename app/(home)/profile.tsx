import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Scroll } from '@/components/elements/Scroll'
import { Button } from '@/components/elements/Button'
import { useGlobalContext } from '@/lib/GlobalProvider'
import Account from '@/components/Account'

export default function profile() {

  const { logout, session, getSession } = useGlobalContext()

  useEffect(() => {
    if (session) getSession()
  }, [session])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Scroll>
        <Account />
        <Button onPress={logout} name='Logout' type='filled' style={{ color: 'red' }} />
      </Scroll>
    </SafeAreaView>
  )
}


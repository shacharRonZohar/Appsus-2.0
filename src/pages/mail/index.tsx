import { signIn, useSession } from 'next-auth/react'
import { trpc } from '../../utils/trpc'

import MailList from '../../cmps/mail/mail-list'

import type { NextPageWithLayout } from '../_app'

const MailApp: NextPageWithLayout = () => {
  const { data: sessionData } = useSession()
  const {
    data: mails,
    isLoading,
    isError,
    error,
  } = trpc.mail.getAll.useQuery(undefined, {
    enabled: sessionData?.user !== undefined,
  })
  if (!sessionData?.user)
    return (
      <div>
        Not logged in
        <button onClick={() => signIn()}>Log In</button>
      </div>
    )
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>{error.message}</div>
  return <MailList mails={mails} />
}

// return <div>{page}</div>

export default MailApp

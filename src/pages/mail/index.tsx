import { NextPage } from 'next'
import { signIn, useSession } from 'next-auth/react'
import { trpc } from '../../utils/trpc'

import type { NextPageWithLayout } from '../_app'

const MailApp: NextPageWithLayout = () => {
  const { data: sessionData } = useSession()
  const { data, isLoading, isError, error } = trpc.mail.getAll.useQuery(undefined, {
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
  return (
    <div>
      {data.map(item => {
        return (
          <div key={item.id}>
            {/* {item.subject} */}
            <div>{item.body}</div>
          </div>
        )
      })}
    </div>
  )
}

// return <div>{page}</div>

export default MailApp

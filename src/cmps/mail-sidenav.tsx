import React from 'react'
import { useSession } from 'next-auth/react'

import { trpc } from '../utils/trpc'

const MailSideNav: React.FC = () => {
  const { data: sessionData } = useSession()
  const utils = trpc.useContext()
  const mutation = trpc.mail.create.useMutation({
    onSuccess: () => {
      utils.mail.getAll.invalidate()
    },
  })
  if (!sessionData) return <div>Not logged in</div>
  return (
    <div>
      Mail Sidenav
      <button
        onClick={() =>
          mutation.mutate({
            // TODO: Find out why user email is optional
            from: sessionData.user?.email || '',
            to: 'test@gmail.com',
            subject: 'test',
            body: 'test',
          })
        }
      >
        Compose
      </button>
      {mutation.isLoading && <div>Adding Mail...</div>}
    </div>
  )
}
export default MailSideNav

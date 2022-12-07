import type { RouterOutputs } from '../../utils/trpc'

type Mail = RouterOutputs['mail']['getAll'][0]

const MailList: React.FC<{ mails: Mail[] }> = ({ mails }) => {
  return (
    <section className="mail-list-container">
      <ul>
        {mails.map(mail => (
          <MailPreview mail={mail} key={mail.id} />
        ))}
      </ul>
    </section>
  )
}

const MailPreview: React.FC<{ mail: Mail }> = ({ mail: { subject } }) => {
  return <li className="mailPreview">{subject}</li>
}

export default MailList

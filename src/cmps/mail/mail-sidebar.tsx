import MailNav from '../navbar/mail-nav'

const MailSidebar: React.FC = () => {
  return (
    <div className="container">
      <button>Compose</button>
      <MailNav />
    </div>
  )
}

export default MailSidebar

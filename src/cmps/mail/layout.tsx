import Layout from '../layout'
import MailSidebar from './mail-sidebar'

import type { LayoutFC } from '../../types/utils'

const MailLayout: LayoutFC = ({ children }) => {
  return (
    // <Layout>
    <div className="container">
      <MailSidebar />
      <main>{children}</main>
    </div>
    // </Layout>
  )
}

export default MailLayout

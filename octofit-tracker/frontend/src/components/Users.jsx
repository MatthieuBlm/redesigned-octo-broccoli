import ResourceList from './ResourceList.jsx'
import { apiOrigin } from '../api.js'

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : `${apiOrigin}/api/users/`

export default function Users() {
  return <ResourceList endpoint={usersEndpoint} title="Users" description="Your community of athletes, ready to make progress." emptyMessage="No users registered yet." columns={[{ key: 'name', label: 'Name' }, { key: 'username', label: 'Username' }, { key: 'email', label: 'Email' }, { key: 'team', label: 'Team' }]} />
}
import ResourceList from './ResourceList.jsx'
import { apiOrigin } from '../api.js'

const teamsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : `${apiOrigin}/api/teams/`

export default function Teams() {
  return <ResourceList endpoint={teamsEndpoint} title="Teams" description="Build a crew that keeps every workout moving forward." emptyMessage="No teams created yet." columns={[{ key: 'name', label: 'Team' }, { key: 'description', label: 'Description' }, { key: 'points', label: 'Points' }]} />
}
import ResourceList from './ResourceList.jsx'
import { apiOrigin } from '../api.js'

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : `${apiOrigin}/api/activities/`

export default function Activities() {
  return <ResourceList endpoint={activitiesEndpoint} title="Activities" description="Track movement, effort, and progress across your team." emptyMessage="No activities recorded yet." columns={[{ key: 'activity', label: 'Activity' }, { key: 'username', label: 'Athlete' }, { key: 'duration', label: 'Duration', render: (item) => item.duration ? `${item.duration} min` : '-' }, { key: 'points', label: 'Points' }, { key: 'date', label: 'Date', render: (item) => item.date ? new Date(item.date).toLocaleDateString() : '-' }]} />
}
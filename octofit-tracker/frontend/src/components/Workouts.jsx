import ResourceList from './ResourceList.jsx'
import { apiOrigin } from '../api.js'

const workoutsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : `${apiOrigin}/api/workouts/`

export default function Workouts() {
  return <ResourceList endpoint={workoutsEndpoint} title="Workouts" description="Find the next focused session for your training plan." emptyMessage="No workouts available yet." columns={[{ key: 'name', label: 'Workout' }, { key: 'description', label: 'Description' }, { key: 'difficulty', label: 'Difficulty' }, { key: 'duration', label: 'Duration', render: (item) => item.duration ? `${item.duration} min` : '-' }]} />
}
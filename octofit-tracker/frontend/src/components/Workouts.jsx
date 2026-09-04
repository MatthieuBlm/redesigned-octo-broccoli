import ResourceList from './ResourceList.jsx'

export default function Workouts() {
  return <ResourceList endpoint="/api/workouts/" title="Workouts" description="Find the next focused session for your training plan." emptyMessage="No workouts available yet." columns={[{ key: 'name', label: 'Workout' }, { key: 'description', label: 'Description' }, { key: 'difficulty', label: 'Difficulty' }, { key: 'duration', label: 'Duration', render: (item) => item.duration ? `${item.duration} min` : '-' }]} />
}
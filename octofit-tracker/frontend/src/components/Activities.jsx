import ResourceList from './ResourceList.jsx'

export default function Activities() {
  return <ResourceList resource="activities" title="Activities" description="Track movement, effort, and progress across your team." emptyMessage="No activities recorded yet." columns={[{ key: 'activity', label: 'Activity' }, { key: 'username', label: 'Athlete' }, { key: 'duration', label: 'Duration', render: (item) => item.duration ? `${item.duration} min` : '-' }, { key: 'points', label: 'Points' }, { key: 'date', label: 'Date', render: (item) => item.date ? new Date(item.date).toLocaleDateString() : '-' }]} />
}
import ResourceList from './ResourceList.jsx'

export default function Teams() {
  return <ResourceList endpoint="/api/teams/" title="Teams" description="Build a crew that keeps every workout moving forward." emptyMessage="No teams created yet." columns={[{ key: 'name', label: 'Team' }, { key: 'description', label: 'Description' }, { key: 'points', label: 'Points' }]} />
}
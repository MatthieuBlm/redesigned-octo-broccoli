import ResourceList from './ResourceList.jsx'

export default function Leaderboard() {
  return <ResourceList endpoint="/api/leaderboard/" title="Leaderboard" description="See who is setting the pace this season." emptyMessage="The leaderboard is waiting for its first entries." columns={[{ key: 'name', label: 'Athlete', render: (item) => item.name || item.username || '-' }, { key: 'team', label: 'Team' }, { key: 'score', label: 'Score' }, { key: 'points', label: 'Points' }]} />
}
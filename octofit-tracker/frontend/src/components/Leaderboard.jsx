import ResourceList from './ResourceList.jsx'
import { apiOrigin } from '../api.js'

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : `${apiOrigin}/api/leaderboard/`

export default function Leaderboard() {
  return <ResourceList endpoint={leaderboardEndpoint} title="Leaderboard" description="See who is setting the pace this season." emptyMessage="The leaderboard is waiting for its first entries." columns={[{ key: 'name', label: 'Athlete', render: (item) => item.name || item.username || '-' }, { key: 'team', label: 'Team' }, { key: 'score', label: 'Score' }, { key: 'points', label: 'Points' }]} />
}
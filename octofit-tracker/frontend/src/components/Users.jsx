import ResourceList from './ResourceList.jsx'

export default function Users() {
  return <ResourceList resource="users" title="Users" description="Your community of athletes, ready to make progress." emptyMessage="No users registered yet." columns={[{ key: 'name', label: 'Name' }, { key: 'username', label: 'Username' }, { key: 'email', label: 'Email' }, { key: 'team', label: 'Team' }]} />
}
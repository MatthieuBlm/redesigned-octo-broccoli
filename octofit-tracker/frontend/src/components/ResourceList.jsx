import { useEffect, useState } from 'react'
import { fetchResource } from '../api.js'

export default function ResourceList({ resource, title, description, columns, emptyMessage }) {
  const [records, setRecords] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    fetchResource(resource).then((items) => {
      if (active) { setRecords(items); setStatus('ready') }
    }).catch((requestError) => {
      if (active) { setError(requestError.message); setStatus('error') }
    })
    return () => { active = false }
  }, [resource])

  return (
    <section className="resource-page">
      <div className="page-heading">
        <div><p className="eyebrow">OctoFit Tracker</p><h1>{title}</h1><p className="page-description">{description}</p></div>
        <span className="record-count">{status === 'ready' ? `${records.length} records` : 'Loading'}</span>
      </div>
      {status === 'loading' && <p className="state-message">Loading {title.toLowerCase()}...</p>}
      {status === 'error' && <p className="state-message error-message">{error}</p>}
      {status === 'ready' && records.length === 0 && <p className="state-message">{emptyMessage}</p>}
      {status === 'ready' && records.length > 0 && <div className="table-wrap"><table><thead><tr>{columns.map(({ key, label }) => <th key={key}>{label}</th>)}</tr></thead><tbody>{records.map((record, index) => <tr key={record._id || record.id || index}>{columns.map(({ key, render }) => <td key={key}>{render ? render(record) : record[key] || '-'}</td>)}</tr>)}</tbody></table></div>}
    </section>
  )
}
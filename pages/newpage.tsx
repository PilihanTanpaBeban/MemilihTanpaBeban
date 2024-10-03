import { useState } from "react"

export default function SearchPage() {
  const [province, setProvince] = useState('')
  const [type, setType] = useState<number>(0)
  const [result, setResult] = useState([])

  const handler = async () => {
    const res = await fetch('/api/v1/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ province, type })
    })
    const data = await res.json()
    setResult(data)
  }

  return (
    <div>
      <h1>Search Page</h1>
      <input type="text" value={province} onChange={e => setProvince(e.target.value)} />
      <select value={type} onChange={e => setType(+e.target.value)}>
        <option value={0}>All</option>
        <option value={1}>Hospital</option>
        <option value={2}>Clinic</option>
      </select>
      <button onClick={handler}>Search</button>
      {result.map((item: any) => (
        <div key={item.pejabat_id}>
          {item.pejabat_name}
        </div>
      ))}
    </div>
  )
}


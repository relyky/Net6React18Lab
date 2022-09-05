import React, { useState } from 'react'
import PageTitle from 'widgets/PageTitle'
import { usePostData } from 'hooks/useHttp'

export default function AppForm(props) {
  const [args, setArgs] = useState({ rowCount: 15 })

  return (
    <div>
      <PageTitle>我是抬頭 of Hello Page</PageTitle>

      <InputNumber name="rowCount" value={args.rowCount} onChange={(name, value) => setArgs({ ...args, [name]: value })} />

      <WeatherForecastTable args={args} />
    </div>
  )
}

//-----------------------------------------------
const InputNumber = (props) => {
  return (
    <input type="number" name={props.name} value={props.value}
      onChange={e => {
        const { name, value } = e.target
        const newValue = parseInt(value, 10)
        props.onChange && props.onChange(name, newValue === NaN ? 0 : newValue);
      }}
    />
  )
}

//-----------------------------------------------
const WeatherForecastTable = (props) => {
  const [dataList, loading, error, refetch] = usePostData('api/WeatherForecast/QryDataList', props.args)

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <pre>{JSON.stringify(error, null, '  ')}</pre>}
      <button onClick={_ => refetch()}>刷新資料</button>
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((item, index) =>
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.temperatureC}</td>
              <td>{item.temperatureF}</td>
              <td>{item.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

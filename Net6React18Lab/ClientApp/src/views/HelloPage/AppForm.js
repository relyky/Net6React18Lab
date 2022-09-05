import React from 'react'
import PageTitle from 'widgets/PageTitle'
import { usePostData } from 'hooks/useHttp'

export default function AppForm(props) {
  return (
    <div>
      <PageTitle>我是抬頭 of Hello Page</PageTitle>

      <p>我是 Hello Page XXXX。</p>

      <WeatherForecastTable />
    </div>
  )
}

//-----------------------------------------------
const WeatherForecastTable = () => {
  const [dataList, loading, error, refetch] = usePostData('api/WeatherForecast/QryDataList')

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

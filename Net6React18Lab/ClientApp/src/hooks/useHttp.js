import { useState, useEffect } from 'react'

///## post data with JSON only.
///# ref→[Using Fetch](https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch)
export function postData(url, data) {
  return fetch(url, {
    body: JSON.stringify(data),
    cache: 'no-cache',
    method: 'POST',
    referrer: 'no-referrer',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(response => response.json()) // 輸出成 json
}

//============================================================================
const defaultOption = {
  initData: [],
  initially: true,
};

export function usePostData(url, args = null, option = null) {
  const [attrs] = useState(_ => ({ ...defaultOption, ...option }))
  const [data, setData] = useState(attrs.initData)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const refetch = () => {
    setLoading(true)
    postData(url, args)
      .then(data => {
        setData(data)
        setError(null)
      })
      .catch(error => {
        setData(attrs.initData)
        setError(error)
      })
      .finally(_ => setLoading(false))
  }

  //# DidMount/DidUpdate
  useEffect(() => {
    if (attrs.initially) refetch();
  }, [url, args]);

  return [data, loading, error, refetch];
}

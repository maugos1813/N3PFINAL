import React, { useEffect, useState } from 'react'

export const API = (url) => {
    const [data, setData] = useState([])

    const getData = async () => {
        const rs = await fetch(url)
        const jsonRs = await rs.json()
        setData(jsonRs)
        console.log(jsonRs);
    }

    useEffect(() => {
        getData()
    }, [])

  return {data}
}

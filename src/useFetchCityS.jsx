import React, { useEffect, useState } from 'react'

export const CityS = (url) => {
    const [dataS , setDataS] = useState([])

    const getData = async () => {
        const rs = await fetch(url)
        const jsonRs = await rs.json()
        setDataS(jsonRs)
    }

    useEffect(() => {
        getData()
    }, [])

  return {dataS}
}
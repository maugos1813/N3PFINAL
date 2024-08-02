import React, { useEffect, useState } from 'react'

export const City = (url) => {
    const [dataC , setDataC] = useState([])

    const getData = async () => {
        const rs = await fetch(url)
        const jsonRs = await rs.json()
        setDataC(jsonRs)
    }

    useEffect(() => {
        getData()
    }, [])

  return {dataC}
}

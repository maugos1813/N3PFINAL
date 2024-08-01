import React, { useEffect, useState } from 'react'

export const APIs = (url) => {
    const [datas, setDatas] = useState([])

    const getData = async () => {
        const rs = await fetch(url)
        const jsonRs = await rs.json()
        setDatas(jsonRs)
    }

    useEffect(() => {
        getData()
    }, [])

  return {datas}
}
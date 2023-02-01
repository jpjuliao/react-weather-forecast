import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

  const [locations, setLocations] = useState([])
  const client = axios.create({
    baseURL: 'https://geocoding.geo.census.gov/geocoder/locations/onelineaddress'
  });

  useEffect(() => {
    try {
      client.get('?address=4600+Silver+Hill+Rd%2C+Washington%2C+DC+20233&benchmark=2020&format=json').then((res) => {
        setLocations(res.data.json())
        console.log(res.data)
        return res.data.json()
      }).then((data) => {
        console.log(data)
      })
    } catch (err) {
      console.error(err)
    }
  }, [client, locations]);

  return (
    <div>home</div>
  )
}
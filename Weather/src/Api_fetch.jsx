import { useEffect, useState } from "react"
import Card from "./Card"

export default function Api_fetch() {
  const [card,setCard] = useState([])
    const fetched = async (url)=>{
        let res = await fetch(url)
        const data = await res.json()
        setCard(data)
        console.log(data)
    }
    useEffect(()=>{
        fetched("https://fakestoreapi.com/products/")
    },[])
  return (
    <>
    <div className="container flex flex-wrap justify-center m-2 gap-2">
      {card.map((e)=>{
        return <Card key={e.id} title={e.title} desc={e.description} />
      })}
      </div>
    </>
  )
}

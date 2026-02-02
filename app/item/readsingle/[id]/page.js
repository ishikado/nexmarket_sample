import Image from "next/image"

const getSingleItem = async(id) => {
  const response = await fetch(`http://localhost:3000/api/item/readsingle/${id}`, {cache:"no-store"})
  const jsonData = await response.json()
  const singleItem = jsonData.singleItem
  return singleItem
}

const ReadSingleItem = async(context) => {
  const unwrapParams = await context.params
  const item = await getSingleItem(unwrapParams.id)
  return (
      <div>
        <div>
        <Image src={item.image} width={750} height={500} alt="item-image" priority/>
        </div>
        <div>
          <h1>{item.title}</h1>
          <h2>\{item.price}</h2>
          <hr/>
          <p>{item.description}</p>
        </div>
      </div>
  )
}

export default ReadSingleItem

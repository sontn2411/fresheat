const getSettings = async () => {
  const res = await fetch('http://localhost:3000/api/settings')
  const data = await res.json()
  return data
}

const getHomeData = async () => {
  const res = await fetch('http://localhost:3000/api/home')
  const data = await res.json()

  return data
}

export { getSettings, getHomeData }

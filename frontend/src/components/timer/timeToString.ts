export const timeToString = (time: number) => {
  const hours   = Math.floor(time / 3600)
  const minutes = Math.floor((time-hours*3600) / 60)
  const seconds = time - (hours*3600) - (minutes*60)

  const addZero = (x: number) => x < 10 ? `0${x}` : `${x}`

  return `${addZero(hours)} : ${addZero(minutes)} : ${addZero(seconds)}`
}

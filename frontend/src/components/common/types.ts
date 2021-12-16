export interface Player {
  wallet:  string
  betSize: number
  name:    string
}

export interface PlayerWithColor extends Player{
  color: string
}

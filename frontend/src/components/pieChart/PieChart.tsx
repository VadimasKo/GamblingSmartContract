import { Pie }             from "@visx/shape"
import { Group }           from "@visx/group"
import { Text }            from "@visx/text"

import { PlayerWithColor } from "../common/types"
import useTimer            from "../timer/useTimer"

interface Props {
  active:        PlayerWithColor | null
  data:          PlayerWithColor[]
  onZero:        () => void
  poolSize:      number
  remainingTime: number
  setActive:     (x: PlayerWithColor | null) => void
}


const PieChart = ({ data, active, onZero, poolSize, remainingTime, setActive}: Props) => {
  const timer = useTimer(remainingTime, onZero)

  return (
    <svg width={400} height={400}>
      <Group top={200} left={200}>
        <Pie
          data={data}
          pieValue={data => data.betSize}
          outerRadius={200}  
          innerRadius={({data}) => {
            const size = (active && active.wallet === data.wallet) ? 16 : 12
            return 200 - size
          }}
          padAngle={0.02}
        >
          {pie => {
            return pie.arcs.map(arc => {
              return (
                <g
                  key={arc.index}
                  onMouseEnter={() => setActive(arc.data)}
                  onMouseLeave={() => setActive(null)}
                >
                  <path d={pie.path(arc) || undefined} fill={arc.data.color}/>
                </g>
              )
            })
          }}
        </Pie>
        {active ? (
          <>
            <Text textAnchor='middle' fill='white' fontSize={20} dy={-30}>
              {`player: ${active.name}`}
            </Text>
            <Text textAnchor='middle' fill='white' dy={30} fontSize={53}>
              {`${active.betSize}$`}
            </Text>
          </>
          ) : (
            <>
              <Text textAnchor='middle' fill='white' fontSize={53}>
                {timer}
              </Text>
              <Text textAnchor='middle' fill='white' fontSize={30} dy={40}>
                {`${poolSize}$`}
              </Text>
            </>
          )
        }
      </Group>
    </svg>
  )
}

export default PieChart

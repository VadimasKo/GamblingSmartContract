import { Pie }      from "@visx/shape"
import { Group }    from "@visx/group"
import { Text }     from "@visx/text"

import { Player, PlayerWithColor }   from "../common/types"
import useTimer     from "../timer/useTimer"

interface Props {
  active:        Player | null
  data:          PlayerWithColor[]
  remainingTime: number
  setActive:     (x: Player | null) => void
}


const PieChart = ({ data, active, remainingTime, setActive }: Props) => {
  const timer = useTimer(remainingTime)

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
                  key={arc.data.wallet}
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
              {`player: ${active.wallet}`}
            </Text>
            <Text textAnchor='middle' fill='white' dy={30} fontSize={53}>
              {`$${active.betSize}`}
            </Text>
          </>
          ) : (
            <>
              <Text textAnchor='middle' fill='white' fontSize={53}>
                {timer}
              </Text>
              <Text textAnchor='middle' fill='white' fontSize={30} dy={40}>
                25000$
              </Text>
            </>
          )
        }
      </Group>
    </svg>
  )
}

export default PieChart

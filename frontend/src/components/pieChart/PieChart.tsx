import { Pie }      from "@visx/shape"
import { Group }    from "@visx/group"
import { Text }     from "@visx/text"

import { Player }   from "../common/types"
import useTimer     from "../timer/useTimer"

interface Props {
  data:      Player[]
  active:    Player | null
  setActive: (x: Player | null) => void
}


const PieChart = ({ data, active, setActive }: Props) => {
  const timer = useTimer(3610)

  return (
    <svg width={400} height={400}>
      <Group top={200} left={200}>
        <Pie
          data={data}
          pieValue={data => data.amount}
          outerRadius={200}  
          innerRadius={({data}) => {
            const size = (active && active.id === data.id) ? 16 : 12
            return 200 - size
          }}
          padAngle={0.02}
        >
          {pie => {
            return pie.arcs.map(arc => {
              return (
                <g
                  key={arc.data.id}
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
              {`player: ${active.id}`}
            </Text>
            <Text textAnchor='middle' fill='white' dy={30} fontSize={53}>
              {`$${active.amount}`}
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

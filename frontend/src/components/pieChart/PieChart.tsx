import { useState } from "react"
import { Pie }      from "@visx/shape"
import { Group }    from "@visx/group"
import { Text }     from "@visx/text"

const coins = [
    { symbol: "ADA", amount: 200, color: "#0033ad", inUSD: 1.48 },
    { symbol: "SQL", amount: 5, color: "#00ffbd", inUSD: 37.6 },
    { symbol: "Kar", amount: 0.005, color: "#F7931A", inUSD: 37363 },

]



export const PieChart = () => {
  const [active, setActive] = useState<any>(null)

  const width = 400
  const half = width / 2

  return (
    <div>
      <svg width={width} height={width}>
          <Group top={half} left={half}>
            <Pie
              data={coins}
              pieValue={data => data.amount * data.inUSD}
              outerRadius={half}  
              innerRadius={({data}) => {
                const size = active && active.symbol === data.symbol ? 12 : 8
                return half - size
              }}
              padAngle={0.01}
            >
             {pie => {
               return pie.arcs.map(arc => {
                 return (
                   <g
                     key={arc.data.symbol}
                     onMouseEnter={() => setActive(arc.data)}
                     onMouseLeave={() => setActive(null)}
                    >
                      <path d={pie.path(arc) || undefined} fill={arc.data.color}></path>
                    </g>
                 )
               })
             }}
            </Pie>

             {active && (
               <>
                  <Text textAnchor='middle' fill='FFF' dy={-20}>
                    {`$${active.amount * active.inUSD}`}
                  </Text>
                  <Text textAnchor='middle' fill='FFF' fontSize={20} dy={20}>
                    {`$${coins.length} Assets`}
                  </Text>
                </>
             )}

          </Group>
      </svg>
    </div>
  )
}

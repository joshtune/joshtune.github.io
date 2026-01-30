import { ResponsivePie, type PieArcDatum } from '@nivo/pie'
import { darkTheme, chartColors } from './theme'

interface PieChartDatum {
  id: string
  label: string
  value: number
  color?: string
}

interface PieChartProps {
  data: PieChartDatum[]
  height?: number
  showLegend?: boolean
  innerRadius?: number
  padAngle?: number
  cornerRadius?: number
  activeOuterRadiusOffset?: number
}

export default function PieChart({
  data,
  height = 400,
  showLegend = true,
  innerRadius = 0.5,
  padAngle = 0.7,
  cornerRadius = 3,
  activeOuterRadiusOffset = 8,
}: PieChartProps) {
  return (
    <div style={{ height }}>
      <ResponsivePie
        data={data}
        theme={darkTheme}
        colors={chartColors}
        margin={{ top: 40, right: showLegend ? 120 : 40, bottom: 40, left: 40 }}
        innerRadius={innerRadius}
        padAngle={padAngle}
        cornerRadius={cornerRadius}
        activeOuterRadiusOffset={activeOuterRadiusOffset}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#f0f6fc"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 3]] }}
        legends={
          showLegend
            ? [
                {
                  anchor: 'right',
                  direction: 'column',
                  translateX: 80,
                  itemWidth: 60,
                  itemHeight: 20,
                  itemsSpacing: 4,
                  symbolSize: 12,
                  symbolShape: 'circle',
                },
              ]
            : []
        }
        animate={true}
        motionConfig="gentle"
      />
    </div>
  )
}

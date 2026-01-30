import { ResponsiveRadar } from '@nivo/radar'
import { darkTheme, chartColors } from './theme'

interface RadarChartProps {
  data: Record<string, unknown>[]
  keys: string[]
  indexBy: string
  height?: number
  showLegend?: boolean
  fillOpacity?: number
  borderWidth?: number
  dotSize?: number
}

export default function RadarChart({
  data,
  keys,
  indexBy,
  height = 400,
  showLegend = true,
  fillOpacity = 0.25,
  borderWidth = 2,
  dotSize = 8,
}: RadarChartProps) {
  return (
    <div style={{ height }}>
      <ResponsiveRadar
        data={data}
        keys={keys}
        indexBy={indexBy}
        theme={darkTheme}
        colors={chartColors}
        margin={{ top: 40, right: showLegend ? 120 : 40, bottom: 40, left: 40 }}
        fillOpacity={fillOpacity}
        borderWidth={borderWidth}
        borderColor={{ from: 'color' }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={16}
        dotSize={dotSize}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color' }}
        enableDotLabel={false}
        legends={
          showLegend
            ? [
                {
                  anchor: 'top-right',
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

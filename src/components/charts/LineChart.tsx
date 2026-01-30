import { ResponsiveLine, type Serie } from '@nivo/line'
import { darkTheme, chartColors } from './theme'

interface LineChartProps {
  data: Serie[]
  height?: number
  showLegend?: boolean
  enableArea?: boolean
  curve?: 'linear' | 'monotoneX' | 'step' | 'stepBefore' | 'stepAfter' | 'natural'
  axisBottomLabel?: string
  axisLeftLabel?: string
  enablePoints?: boolean
}

export default function LineChart({
  data,
  height = 400,
  showLegend = true,
  enableArea = false,
  curve = 'monotoneX',
  axisBottomLabel,
  axisLeftLabel,
  enablePoints = true,
}: LineChartProps) {
  return (
    <div style={{ height }}>
      <ResponsiveLine
        data={data}
        theme={darkTheme}
        colors={chartColors}
        margin={{ top: 20, right: showLegend ? 130 : 20, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false }}
        curve={curve}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: axisBottomLabel,
          legendOffset: 40,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: axisLeftLabel,
          legendOffset: -50,
          legendPosition: 'middle',
        }}
        enablePoints={enablePoints}
        pointSize={8}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        enableArea={enableArea}
        areaOpacity={0.15}
        useMesh={true}
        legends={
          showLegend
            ? [
                {
                  anchor: 'bottom-right',
                  direction: 'column',
                  translateX: 120,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemsSpacing: 2,
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

import { ResponsiveBar, type BarDatum } from '@nivo/bar'
import { darkTheme, chartColors } from './theme'

interface BarChartProps {
  data: BarDatum[]
  keys: string[]
  indexBy: string
  height?: number
  layout?: 'vertical' | 'horizontal'
  groupMode?: 'grouped' | 'stacked'
  showLegend?: boolean
  axisBottomLabel?: string
  axisLeftLabel?: string
}

export default function BarChart({
  data,
  keys,
  indexBy,
  height = 400,
  layout = 'vertical',
  groupMode = 'grouped',
  showLegend = true,
  axisBottomLabel,
  axisLeftLabel,
}: BarChartProps) {
  return (
    <div style={{ height }}>
      <ResponsiveBar
        data={data}
        keys={keys}
        indexBy={indexBy}
        theme={darkTheme}
        colors={chartColors}
        layout={layout}
        groupMode={groupMode}
        margin={{ top: 20, right: showLegend ? 130 : 20, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        borderRadius={2}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: axisBottomLabel,
          legendPosition: 'middle',
          legendOffset: 40,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: axisLeftLabel,
          legendPosition: 'middle',
          legendOffset: -50,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 3]] }}
        legends={
          showLegend
            ? [
                {
                  dataFrom: 'keys',
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

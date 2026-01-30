import { ResponsiveTimeRange } from '@nivo/calendar'
import { darkTheme } from './theme'

interface CalendarDatum {
  day: string // format: YYYY-MM-DD
  value: number
}

interface CalendarChartProps {
  data: CalendarDatum[]
  from: string // start date YYYY-MM-DD
  to: string // end date YYYY-MM-DD
  height?: number
  emptyColor?: string
  colors?: string[]
}

export default function CalendarChart({
  data,
  from,
  to,
  height = 180,
  emptyColor = '#161b22',
  colors = ['#1a3a4a', '#1e5a7a', '#3a8cc2', '#58a6ff'],
}: CalendarChartProps) {
  return (
    <div style={{ height }}>
      <ResponsiveTimeRange
        data={data}
        from={from}
        to={to}
        theme={darkTheme}
        emptyColor={emptyColor}
        colors={colors}
        margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
        dayBorderWidth={2}
        dayBorderColor="#0a0c10"
        dayRadius={5}
        daySpacing={1}
        weekdayTicks={[]}
        weekdayLegendOffset={0}
        firstWeekday="sunday"
        square={true}
      />
    </div>
  )
}

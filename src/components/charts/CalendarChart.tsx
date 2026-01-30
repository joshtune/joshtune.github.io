import { ResponsiveCalendar } from '@nivo/calendar'
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
  minValue?: number | 'auto'
  maxValue?: number | 'auto'
  direction?: 'horizontal' | 'vertical'
}

export default function CalendarChart({
  data,
  from,
  to,
  height = 200,
  emptyColor = '#161b22',
  colors = ['#0e4429', '#006d32', '#26a641', '#39d353'],
  minValue = 'auto',
  maxValue = 'auto',
  direction = 'horizontal',
}: CalendarChartProps) {
  return (
    <div style={{ height }}>
      <ResponsiveCalendar
        data={data}
        from={from}
        to={to}
        theme={darkTheme}
        emptyColor={emptyColor}
        colors={colors}
        minValue={minValue}
        maxValue={maxValue}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        yearSpacing={40}
        monthBorderColor="#0a0c10"
        dayBorderWidth={2}
        dayBorderColor="#0a0c10"
        direction={direction}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left',
          },
        ]}
      />
    </div>
  )
}

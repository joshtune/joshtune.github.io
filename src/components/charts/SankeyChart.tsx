import { ResponsiveSankey } from '@nivo/sankey'
import { darkTheme, chartColors } from './theme'

interface SankeyNode {
  id: string
  nodeColor?: string
}

interface SankeyLink {
  source: string
  target: string
  value: number
}

interface SankeyData {
  nodes: SankeyNode[]
  links: SankeyLink[]
}

interface SankeyChartProps {
  data: SankeyData
  height?: number
  showLegend?: boolean
  nodeOpacity?: number
  nodeThickness?: number
  nodeSpacing?: number
  linkOpacity?: number
}

export default function SankeyChart({
  data,
  height = 400,
  nodeOpacity = 1,
  nodeThickness = 18,
  nodeSpacing = 24,
  linkOpacity = 0.5,
}: SankeyChartProps) {
  return (
    <div style={{ height }}>
      <ResponsiveSankey
        data={data}
        theme={darkTheme}
        colors={chartColors}
        margin={{ top: 20, right: 160, bottom: 20, left: 20 }}
        align="justify"
        sort="auto"
        nodeOpacity={nodeOpacity}
        nodeThickness={nodeThickness}
        nodeInnerPadding={3}
        nodeSpacing={nodeSpacing}
        nodeBorderWidth={0}
        nodeBorderRadius={3}
        linkOpacity={linkOpacity}
        linkHoverOpacity={0.8}
        linkHoverOthersOpacity={0.1}
        linkContract={3}
        enableLinkGradient={true}
        labelPosition="outside"
        labelOrientation="horizontal"
        labelPadding={16}
        labelTextColor="#f0f6fc"
        animate={true}
        motionConfig="gentle"
      />
    </div>
  )
}

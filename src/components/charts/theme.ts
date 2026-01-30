import type { Theme } from '@nivo/core'

// Dark theme matching github-dark-high-contrast
export const darkTheme: Theme = {
  background: 'transparent',
  text: {
    fontSize: 12,
    fill: '#f0f6fc',
    outlineWidth: 0,
    outlineColor: 'transparent',
  },
  axis: {
    domain: {
      line: {
        stroke: '#3d444d',
        strokeWidth: 1,
      },
    },
    legend: {
      text: {
        fontSize: 12,
        fill: '#f0f6fc',
        outlineWidth: 0,
        outlineColor: 'transparent',
      },
    },
    ticks: {
      line: {
        stroke: '#3d444d',
        strokeWidth: 1,
      },
      text: {
        fontSize: 11,
        fill: '#9198a1',
        outlineWidth: 0,
        outlineColor: 'transparent',
      },
    },
  },
  grid: {
    line: {
      stroke: '#3d444d',
      strokeWidth: 1,
    },
  },
  legends: {
    title: {
      text: {
        fontSize: 11,
        fill: '#f0f6fc',
        outlineWidth: 0,
        outlineColor: 'transparent',
      },
    },
    text: {
      fontSize: 11,
      fill: '#f0f6fc',
      outlineWidth: 0,
      outlineColor: 'transparent',
    },
    ticks: {
      line: {},
      text: {
        fontSize: 10,
        fill: '#9198a1',
        outlineWidth: 0,
        outlineColor: 'transparent',
      },
    },
  },
  annotations: {
    text: {
      fontSize: 13,
      fill: '#f0f6fc',
      outlineWidth: 2,
      outlineColor: '#0a0c10',
      outlineOpacity: 1,
    },
    link: {
      stroke: '#9198a1',
      strokeWidth: 1,
      outlineWidth: 2,
      outlineColor: '#0a0c10',
      outlineOpacity: 1,
    },
    outline: {
      stroke: '#9198a1',
      strokeWidth: 2,
      outlineWidth: 2,
      outlineColor: '#0a0c10',
      outlineOpacity: 1,
    },
    symbol: {
      fill: '#9198a1',
      outlineWidth: 2,
      outlineColor: '#0a0c10',
      outlineOpacity: 1,
    },
  },
  tooltip: {
    container: {
      background: '#1c2128',
      color: '#f0f6fc',
      fontSize: 12,
      borderRadius: 4,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
    },
  },
}

// Light theme for future use
export const lightTheme: Theme = {
  background: 'transparent',
  text: {
    fontSize: 12,
    fill: '#1f2328',
    outlineWidth: 0,
    outlineColor: 'transparent',
  },
  axis: {
    domain: {
      line: {
        stroke: '#d1d9e0',
        strokeWidth: 1,
      },
    },
    legend: {
      text: {
        fontSize: 12,
        fill: '#1f2328',
        outlineWidth: 0,
        outlineColor: 'transparent',
      },
    },
    ticks: {
      line: {
        stroke: '#d1d9e0',
        strokeWidth: 1,
      },
      text: {
        fontSize: 11,
        fill: '#59636e',
        outlineWidth: 0,
        outlineColor: 'transparent',
      },
    },
  },
  grid: {
    line: {
      stroke: '#d1d9e0',
      strokeWidth: 1,
    },
  },
  legends: {
    title: {
      text: {
        fontSize: 11,
        fill: '#1f2328',
        outlineWidth: 0,
        outlineColor: 'transparent',
      },
    },
    text: {
      fontSize: 11,
      fill: '#1f2328',
      outlineWidth: 0,
      outlineColor: 'transparent',
    },
    ticks: {
      line: {},
      text: {
        fontSize: 10,
        fill: '#59636e',
        outlineWidth: 0,
        outlineColor: 'transparent',
      },
    },
  },
  tooltip: {
    container: {
      background: '#ffffff',
      color: '#1f2328',
      fontSize: 12,
      borderRadius: 4,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    },
  },
}

// Color palette for charts - vibrant colors that work on dark backgrounds
export const chartColors = [
  '#58a6ff', // blue
  '#3fb950', // green
  '#f78166', // orange
  '#d2a8ff', // purple
  '#ff7b72', // red
  '#79c0ff', // light blue
  '#7ee787', // light green
  '#ffa657', // light orange
  '#a5d6ff', // pale blue
  '#56d364', // bright green
]

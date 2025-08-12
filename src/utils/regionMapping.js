export const getRegionDisplayName = (regionCode) => {
  const regionMap = {
    'us-east-1-start-iA': 'North Virginia',
    'us-east-1-end': 'North Virginia',
    'us-east-2-start-iA': 'North Virginia',
    'us-east-2-end-iA': 'North Virginia',
    'eu-west-2-node-iA': 'London',
    'ap-northeast-1-node-iA': 'Tokyo'
  }
  return regionMap[regionCode] || regionCode
}

export const REGION_COLORS = [
  { region: 'N. Virginia', color: '#0891b2' },
  { region: 'London', color: '#0284c7' },
  { region: 'Tokyo', color: '#0369a1' }
]

export const SUMMARY_COLORS = [
  { region: 'N. Virginia', color: 'from-blue-500 to-cyan-500' },
  { region: 'London', color: 'from-blue-600 to-blue-700' },
  { region: 'Tokyo', color: 'from-blue-700 to-blue-800' }
]

export const DEFAULT_REGION_DATA = [
  { region: 'N. Virginia', avgTime: 120000 },
  { region: 'London', avgTime: 180000 },
  { region: 'Tokyo', avgTime: 250000 }
]
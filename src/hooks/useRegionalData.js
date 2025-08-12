import { useMemo } from 'react'
import { filterRegionData, filterByRegion, calculateAverageTime } from '../utils/dataFilters'
import { DEFAULT_REGION_DATA, SUMMARY_COLORS } from '../utils/regionMapping'

export const useRegionalData = (regionData, selectedCloud, selectedLanguage) => {
  const chartData = useMemo(() => {
    if (!regionData || regionData.length === 0) {
      return DEFAULT_REGION_DATA.map(item => ({
        ...item,
        minTime: 100000,
        maxTime: 300000
      }))
    }

    const filteredData = filterRegionData(regionData, selectedCloud, selectedLanguage)

    const virginiaData = filterByRegion(filteredData, 'us-east')
    const londonData = filterByRegion(filteredData, 'eu-west-2')
    const tokyoData = filterByRegion(filteredData, 'ap-northeast-1')


    const calculateMinMax = (data) => {
      if (data.length === 0) return { min: 100000, max: 300000 }
      return {
        min: Math.min(...data.map(item => item.min_time_microseconds || 0)),
        max: Math.max(...data.map(item => item.max_time_microseconds || 0))
      }
    }

    const virginiaMinMax = calculateMinMax(virginiaData)
    const londonMinMax = calculateMinMax(londonData)
    const tokyoMinMax = calculateMinMax(tokyoData)

    return [
      {
        region: 'N. Virginia',
        avgTime: virginiaData.length > 0 ? calculateAverageTime(virginiaData) : 120000,
        minTime: virginiaMinMax.min,
        maxTime: virginiaMinMax.max
      },
      {
        region: 'London',
        avgTime: londonData.length > 0 ? calculateAverageTime(londonData) : 180000,
        minTime: londonMinMax.min,
        maxTime: londonMinMax.max
      },
      {
        region: 'Tokyo',
        avgTime: tokyoData.length > 0 ? calculateAverageTime(tokyoData) : 250000,
        minTime: tokyoMinMax.min,
        maxTime: tokyoMinMax.max
      }
    ]
  }, [regionData, selectedCloud, selectedLanguage])

  const summaryData = useMemo(() => {
    if (!regionData || regionData.length === 0) {
      return SUMMARY_COLORS.map((item, index) => ({
        ...item,
        avgTime: DEFAULT_REGION_DATA[index].avgTime
      }))
    }

    const filteredData = filterRegionData(regionData, selectedCloud, selectedLanguage)

    const virginiaData = filterByRegion(filteredData, 'us-east')
    const londonData = filterByRegion(filteredData, 'eu-west-2')
    const tokyoData = filterByRegion(filteredData, 'ap-northeast-1')

    return [
      {
        region: 'N. Virginia',
        avgTime: virginiaData.length > 0 ? calculateAverageTime(virginiaData) : 120000,
        color: 'from-blue-500 to-cyan-500'
      },
      {
        region: 'London',
        avgTime: londonData.length > 0 ? calculateAverageTime(londonData) : 180000,
        color: 'from-blue-600 to-blue-700'
      },
      {
        region: 'Tokyo',
        avgTime: tokyoData.length > 0 ? calculateAverageTime(tokyoData) : 250000,
        color: 'from-blue-700 to-blue-800'
      }
    ]
  }, [regionData, selectedCloud, selectedLanguage])

  return { chartData, summaryData }
}
export const filterRegionData = (regionData, selectedCloud, selectedLanguage) => {
  if (!regionData || regionData.length === 0) return []
  
  return regionData.filter(item => {
    const cloudMatch = item.cloud === selectedCloud
    const languageMatch = item.language === selectedLanguage || 
      (selectedLanguage === 'py' && item.language === 'python')
    return cloudMatch && languageMatch
  })
}

export const filterByRegion = (data, regionFilter) => {
  return data.filter(item => item.source_region && item.source_region.includes(regionFilter))
}

export const calculateAverageTime = (data) => {
  if (data.length === 0) return 0
  return Math.round(data.reduce((sum, item) => sum + item.avg_time_microseconds, 0) / data.length)
}
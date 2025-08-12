
function RegionalChart({ chartData }) {
  const getRegionData = (regionName) => {
    return chartData.find(item => item.region === regionName) || { avgTime: 0, minTime: 0, maxTime: 0 }
  }

  // Define the 3 actual route segments
  const routes = [
    { 
      from: 'N. Virginia', 
      to: 'London', 
      data: getRegionData('N. Virginia'), 
      color: 'bg-blue-50 border-blue-200' 
    },
    { 
      from: 'London', 
      to: 'Tokyo', 
      data: getRegionData('London'), 
      color: 'bg-green-50 border-green-200' 
    },
    { 
      from: 'Tokyo', 
      to: 'N. Virginia', 
      data: getRegionData('Tokyo'), 
      color: 'bg-purple-50 border-purple-200' 
    }
  ]

  const formatDisplayTime = (avgTime) => {
    if (avgTime === 0) return '0μs'
    return `${avgTime.toLocaleString()}μs`
  }

  return (
    <div className="mb-2">
      <h4 className="text-sm font-semibold mb-2 text-gray-700">Region Route Performance:</h4>
      
      {/* Route Banners */}
      <div className="space-y-4">
        {routes.map((route, index) => (
          <div key={index} className={`border-2 ${route.color} p-4 rounded-lg`}>
            {/* Route Header */}
            <div className="flex items-center justify-between mb-1">
              <h5 className="font-semibold text-base text-gray-800">
                {route.from} → {route.to}
              </h5>
            </div>
            
            {/* Performance Data */}
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center p-2 bg-white rounded border">
                <div className="text-gray-500 mb-1">Avg</div>
                <div className="font-semibold text-gray-800">{formatDisplayTime(route.data.avgTime)}</div>
              </div>
              <div className="text-center p-2 bg-white rounded border">
                <div className="text-gray-500 mb-1">Min</div>
                <div className="font-semibold text-green-600">{formatDisplayTime(route.data.minTime)}</div>
              </div>
              <div className="text-center p-2 bg-white rounded border">
                <div className="text-gray-500 mb-1">Max</div>
                <div className="font-semibold text-red-600">{formatDisplayTime(route.data.maxTime)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RegionalChart

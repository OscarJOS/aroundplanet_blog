import { useState } from 'react'

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)
  
  const blogPosts = [
    {
      id: 1,
      title: "How is this possible?",
      summary: "Discover how Around Planet measures execution times across multiple cloud providers and programming languages with microsecond precision, providing insights into performance characteristics and infrastructure optimization.",
      date: "July 28, 2025",
      content: `
        Around Planet measures execution times across AWS, Azure, and GCP by running code in three regions: N. Virginia, London, and Tokyo. Each execution follows the same path around the world, creating consistent performance data.
        
        **🌐 How It Works**
        
        The system runs on three major cloud providers:
        
        • **AWS** - N. Virginia, London, Tokyo regions
        • **Azure** - Corresponding regions with matching configurations  
        • **GCP** - Same regional setup for fair comparison
        
        Every test follows the same route: N. Virginia → London → Tokyo → N. Virginia. This ensures all measurements are comparable across different cloud providers and programming languages.
        
        **⚡ Timing Precision**
        
        All measurements use microsecond precision to capture small performance differences:
        
        • High-precision timestamps at each regional checkpoint
        • Consistent measurement methodology
        
        **📊 Data Collection**
        
        Each test execution gets a unique identifier (UUID) that tracks it through all four steps of the global journey. The system records:
        
        • When data arrives at each region
        • Network travel time between regions
        • Total execution time
      `
    },
    {
      id: 2,
      title: "Understanding Time Measurements",
      summary: "This system uses microsecond-level measurements to analyze execution times across cloud providers and languages, helping identify performance trends, optimize deployments, and guide infrastructure decisions.",
      date: "July 28, 2025",
      content: `
        **📏 Time Units**
        
        All times are measured in **microseconds (μs)**:
        
        • 1 millisecond = 1,000 microseconds
        • 1 second = 1,000,000 microseconds
        
        **📊 What You'll See**
        
        • **Average Time:** The typical execution time across all tests for each cloud-language combination.

        • **Fastest Times:** The 3 best performance results, showing optimal conditions.

        • **Slowest Times:** The 3 worst performance results, revealing potential issues.

        • **Regional Segments:** How long each part of the journey takes (N. Virginia → London → Tokyo → N. Virginia).

        **🎯 How to Use This Data**
        
        • Compare cloud providers for your specific programming language
        • Identify which regions might cause delays
      `
    },
    {
      id: 3,
      title: "Reading the Color-Coded Performance Data",
      summary: "Learn how to interpret the green and red color indicators that show performance relative to averages, helping you make quick infrastructure decisions based on over 1 million data points.",
      date: "July 30, 2025",
      content: `
        **🎨 Color System**
        
        The app uses colors to show performance compared to averages:
        
        • **Green** - Better than average performance (faster)
        • **Red** - Worse than average performance (slower)
        
        **📊 How Colors Are Assigned**
        
        Each measurement is compared to the average for that specific cloud provider and programming language combination. If an execution is faster than average, it gets green. If slower, it gets red.
        
        **🗺️ Regional Color Patterns**
        
        Each part of the journey gets its own color based on how it performed:
        
        • **N. Virginia → London** - Transatlantic performance
        • **London → Tokyo** - Trans-Asian performance  
        • **Tokyo → N. Virginia** - Transpacific performance
      `
    },
    {
      id: 4,
      title: "Understanding the Three Main App Sections",
      summary: "Complete guide to navigating Around Planet's three main sections: Regional Performance Overview, Fastest Executions, and Slowest Executions, plus how to use them together for comprehensive analysis.",
      date: "July 30, 2025",
      content: `
        The app has three main sections that work together to give you a complete picture of performance:
        
        **🗺️ Regional Overview (Left/Center)**
        
        Shows the global journey visually with three colored segments:
        
        • **Route sections** - N. Virginia → London → Tokyo → N. Virginia
        • **Color coding** - Green for fast, red for slow segments
        • **Average times** - Summary statistics for the selected combination
        • **Controls** - Button menu to pick cloud provider and programming language
        
        **🚀 Fastest Executions (Top Right)**
        
        Shows the 3 best performance results:
        
        • **Best times** - The fastest executions recorded
        • **Breakdown** - How long each segment took in the best cases
        • **Comparison bars** - Visual representation of segment performance
        • **UUIDs** - Unique identifiers for each execution
        
        **🐌 Slowest Executions (Bottom Right)**
        
        Shows the 3 worst performance results:
        
        • **Worst times** - The slowest executions recorded
        • **Problem areas** - Which segments caused the delays
        • **Comparison** - How much slower than average these were
        • **Patterns** - Common characteristics of slow executions
        
        **🔄 How to Use All Three Together**
        
        1. Start with the regional overview to see general performance patterns.
        2. Check fastest executions to see what's possible under ideal conditions.
        3. Review slowest executions to understand potential problems.
        4. Compare different cloud providers and languages using the Button menus.
      `
    },
    {
      id: 5,
      title: "Understanding UUID Track Identification",
      summary: "Explore how UUID tracking ensures data integrity by uniquely identifying each journey around the planet, enabling precise performance measurement and verification across all regional segments.",
      date: "July 30, 2025",
      content: `
        **🔗 What is a UUID?**
        
        A UUID (Universally Unique Identifier) is a unique code assigned to each test execution. It looks like this: a1b2c3d4-e5f6-7890-1234-567890abcdef
        
        **🎯 Why Use UUIDs?**
        
        UUIDs ensure that measurements from different regions can be linked to the same test:
        
        • **Unique tracking** - Each test gets its own identifier that won't be reused
        • **Data integrity** - Confirms all timing data comes from the same execution
        • **Error detection** - Helps identify incomplete or corrupted test runs
        
        **⚙️ How It Works**
        
        Each test follows this process:
        
        1. **Start** - A UUID is generated in N. Virginia
        2. **Travel** - The UUID travels with the test through London and Tokyo
        3. **Return** - The UUID comes back to N. Virginia
        4. **Verification** - All four timestamps are matched using the UUID
        
        **📊 What This Means for You**
        
        • **Reliable data** - You can trust that fastest/slowest times represent real complete journeys
        • **Complete picture** - Every measurement includes all four regional segments
        • **Quality assurance** - Incomplete or corrupted tests are automatically excluded
        
        **🏗️ Practical Benefits**
        
        The UUID system ensures you're seeing accurate, complete performance data rather than partial measurements or timing errors.
      `
    }
  ]

  const renderPost = (post) => (
    <article key={post.id} className="border p-8 mx-auto">
      <header className="mb-2">
        <h2 className="text-3xl font-bold mb-2 text-black">{post.title}</h2>
        <time className="text-sm text-gray-500">{post.date}</time>
      </header>
      
      <div className="prose max-w-none">
        {post.content.trim().split('\n').map((line, lineIndex) => {
          const trimmedLine = line.trim()
          
          // Skip empty lines
          if (!trimmedLine) {
            return <div key={lineIndex} className="mb-2"></div>
          }
          
          // Handle section headers (lines starting with ** and ending with **)
          if (trimmedLine.startsWith('**') && (trimmedLine.endsWith('**') || trimmedLine.includes('** -'))) {
            const headerText = trimmedLine.replace(/\*\*/g, '').replace(/^- /, '')
            return (
              <h3 key={lineIndex} className="text-xl font-semibold text-black mb-3 mt-6">
                {headerText}
              </h3>
            )
          }
          
          // Handle bullet points
          if (trimmedLine.startsWith('• ')) {
            const bulletText = trimmedLine.substring(2)
            return (
              <ul key={lineIndex} className="mb-2">
                <li className="text-black ml-6 list-disc">
                  {bulletText.split('**').map((part, partIndex) => 
                    partIndex % 2 === 1 ? (
                      <strong key={partIndex} className="font-semibold text-black">{part}</strong>
                    ) : (
                      part
                    )
                  )}
                </li>
              </ul>
            )
          }
          
          // Handle dash bullet points
          if (trimmedLine.startsWith('- ')) {
            const bulletText = trimmedLine.substring(2)
            return (
              <ul key={lineIndex} className="mb-2">
                <li className="text-black ml-6 list-disc">
                  {bulletText}
                </li>
              </ul>
            )
          }
          
          // Handle regular paragraphs (non-empty lines that aren't headers or bullets)
          if (trimmedLine && !trimmedLine.startsWith('**') && !trimmedLine.startsWith('•') && !trimmedLine.startsWith('-')) {
            return (
              <p key={lineIndex} className="text-black mb-4 leading-relaxed">
                {trimmedLine.split('**').map((part, partIndex) => 
                  partIndex % 2 === 1 ? (
                    <strong key={partIndex} className="font-semibold text-gray-800">{part}</strong>
                  ) : (
                    part
                  )
                )}
              </p>
            )
          }
          
          return null
        }).filter(item => item !== null)}
      </div>
    </article>
  )

  return (
    <div className="p-8">
      <div className="">
        {/* AI Disclaimer */}
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>This blog was AI-generated and human checked for quality. It’s concise, so you can quickly gain a better understanding of the topic without wasting time.</strong>
          </p>
        </div>
        
        {/* Header */}

        {/* Show table of contents or selected post */}
        {selectedPost ? (
          <div>
            {/* Back button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-6 px-4 py-2 text-black rounded hover:bg-gray-200 transition-colors"
            >
              ← Back to All Posts
            </button>
            
            {/* Selected post */}
            {renderPost(selectedPost)}
          </div>
        ) : (
          /* Table of contents */
          <div>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="border p-6 rounded-lg cursor-pointer hover:border-gray-400 hover:shadow-md transition-all duration-200"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {post.title}
                  </h3>
                  <time className="text-sm text-gray-500">{post.date}</time>
                  {post.summary && (
                    <p className="text-black mt-3 text-sm leading-relaxed">
                      {post.summary}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog
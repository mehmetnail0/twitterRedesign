import React from 'react'
import "./RightSection.css"

export default function RightSection() {
  return (
    <div className='rightSectionContainer'>
      <div className="rightSectionContainer_trendsForYou">
        <h2>Trends For You</h2>
        <div className="rightSectionContainer_trendsForYouAContent">
          <div className="rightSectionContainer_trendsForYouAContent_trendingTab">
            <h3>Trending in United States</h3>
            <ul>
              <li>#Elon Musk <p>
                (83.6k Tweets)</p></li>
              <li>#Elon Musk <p>
                (83.6k Tweets)</p></li>

            </ul>
          </div>
        </div>
        <hr />
        <div className="rightSectionContainer_trendsForYouAContent">
          <div className="rightSectionContainer_trendsForYouAContent_trendingTab">
            <h3>NFT • Trendings</h3>
            <ul>
              <li>#Elon Musk <p>
                (83.6k Tweets)</p></li>
              <li>#Elon Musk <p>
                (83.6k Tweets)</p></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="rightSectionContainer_trendsForYouAContent">
          <div className="rightSectionContainer_trendsForYouAContent_trendingTab">
            <h3>Football • Trendings</h3>
            <ul>
              <li>#Elon Musk <p>
                (83.6k Tweets)</p></li>
              <li>#Elon Musk <p>
                (83.6k Tweets)</p></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

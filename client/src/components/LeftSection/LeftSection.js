import React from 'react'
import "./LeftSection.css"

export default function LeftSection() {
  return (
    <div className='leftSectionContainer'>
      <img className='leftSection_MyProfile_backProfileImage' src="https://i.pinimg.com/originals/71/c8/32/71c832687739ec0e9a5d6f738317c75f.jpg" alt="leftSection_MyProfile_backProfilePhoto" />

      <div className="leftSection_MyProfile">
        <img className='leftSection_MyProfile_profileImage' src="https://media.licdn.com/dms/image/C4D03AQEBJlgYXKNZQA/profile-displayphoto-shrink_800_800/0/1645980997002?e=2147483647&v=beta&t=8A5iqgsmCL0LFwrhT1vXaDGBTFon_eJHf8x6qyUVghk" alt="leftSection_MyProfile_profilePhoto" />
        <h3>Mehmet Nail Mutlu</h3>
        <h5>@mehmetnail0</h5>
        <p>Junior Web Developer</p>
        <hr />
        <div className="leftSection_MyProfile_followInfos">
          <div className="leftSection_MyProfile_following">
            <h4>341</h4>
            <h5>Following</h5>
          </div>

          <hr />
          <div className="leftSection_MyProfile_followers">
            <h4>1.485</h4>
            <h5>Followers</h5>
          </div>
        </div>
        <hr />
        <div className='leftSection_showProfileLink'>
          <a href="">Show Profile</a>

        </div>
      </div>


      <div className="leftSection_peopleYouMayKnow">



        <h3>People you may know</h3>

        <div className="leftSection_peopleYouMayKnow_Profile">
          <div className="leftSection_peopleYouMayKnow_ProfileImage">
            <img src="https://media.licdn.com/dms/image/C4D03AQEBJlgYXKNZQA/profile-displayphoto-shrink_800_800/0/1645980997002?e=2147483647&v=beta&t=8A5iqgsmCL0LFwrhT1vXaDGBTFon_eJHf8x6qyUVghk" alt="leftSection_profileImage" />

          </div>
          <div className="leftSection_peopleYouMayKnow_nameOfProfile">
            <h3>Milli Smith</h3>
            <p>
              @mehmetnail0
            </p>
          </div>
          <div className="leftSection_peopleYouMayKnow_followButton">
            <button>follow</button>

          </div>

        </div>
         <div className="leftSection_peopleYouMayKnow_Profile">
          <div className="leftSection_peopleYouMayKnow_ProfileImage">
            <img src="https://media.licdn.com/dms/image/C4D03AQEBJlgYXKNZQA/profile-displayphoto-shrink_800_800/0/1645980997002?e=2147483647&v=beta&t=8A5iqgsmCL0LFwrhT1vXaDGBTFon_eJHf8x6qyUVghk" alt="leftSection_profileImage" />

          </div>
          <div className="leftSection_peopleYouMayKnow_nameOfProfile">
            <h3>Milli Smith</h3>
            <p>
              @mehmetnail0
            </p>
          </div>
          <div className="leftSection_peopleYouMayKnow_followButton">
            <button>follow</button>

          </div>

        </div> <div className="leftSection_peopleYouMayKnow_Profile">
          <div className="leftSection_peopleYouMayKnow_ProfileImage">
            <img src="https://media.licdn.com/dms/image/C4D03AQEBJlgYXKNZQA/profile-displayphoto-shrink_800_800/0/1645980997002?e=2147483647&v=beta&t=8A5iqgsmCL0LFwrhT1vXaDGBTFon_eJHf8x6qyUVghk" alt="leftSection_profileImage" />

          </div>
          <div className="leftSection_peopleYouMayKnow_nameOfProfile">
            <h3>Milli Smith</h3>
            <p>
              @mehmetnail0
            </p>
          </div>
          <div className="leftSection_peopleYouMayKnow_followButton">
            <button>follow</button>

          </div>
        </div>
      <h4>Show More</h4>
      </div>
    </div>
  )
}

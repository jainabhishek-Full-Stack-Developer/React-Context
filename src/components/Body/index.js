import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="bodyContainer">
          {showLeftNavbar ? (
            <div className="leftNavbar">
              <h1 className="leftHeading">Left Navbar Menu</h1>
              <ul className="listItems">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content">
              <h1 className="contentHeading">Content</h1>
              <p className="contentPara">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="rightNavbar">
              <h1 className="rightHeading">Right Navbar</h1>
              <div className="rightAdBox">
                <p className="adBox">Ad 1 </p>
                <p className="adBox">Ad 2 </p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body

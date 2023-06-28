import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configContainer">
          <div className="responsiveContainer">
            <div className="leftSide">
              <h1 className="layoutHeading">Layout</h1>
              <div className="checkboxGroup">
                <div className="checkboxContainer">
                  <input
                    checked={showContent}
                    onChange={onChangeContent}
                    type="checkbox"
                    id="Content"
                  />
                  <label className="labelText" htmlFor="Content">
                    Content
                  </label>
                </div>
                <div className="checkboxContainer">
                  <input
                    checked={showLeftNavbar}
                    onChange={onChangeLeftNavbar}
                    type="checkbox"
                    id="leftNavbar"
                  />
                  <label className="labelText" htmlFor="leftNavbar">
                    Left Navbar
                  </label>
                </div>

                <div className="checkboxContainer">
                  <input
                    checked={showRightNavbar}
                    onChange={onChangeRightNavbar}
                    type="checkbox"
                    id="rightNavbar"
                  />
                  <label className="labelText" htmlFor="rightNavbar">
                    Right Navbar
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

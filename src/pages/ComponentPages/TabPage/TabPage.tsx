import { Tab, Tabs } from 'ui-kit'
import './TabPage.scss'

const TabPage = () => {
  return (
    <div className='concise-component-tabs-container'>
      <div className='concise-component-tabs-title'>Tabs</div>
      <div className='concise-component-tabs-subtitle'>
        Tabs organize related content and allow navigation between the groups of content within a
        container on the same page.
      </div>
      <div>
        <div className='concise-component-tabs-subsubtitle'>Button Group</div>
        <div className='concise-component-tabs-desc'>Description text go here</div>
        <div className='concise-component-tabs-bg-grey'>
          <Tabs>
            <Tab title='Tabs' leftIcon='Cross'>
              Content 1
            </Tab>
            <Tab title='Tabs' leftIcon='Cross'>
              Content 2
            </Tab>
            <Tab title='Tabs' leftIcon='Cross'>
              Content 3
            </Tab>
          </Tabs>
        </div>
        <div className='concise-component-tabs-desc-sec'>
          Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in
        </div>
      </div>
      <div className='concise-component-tabs-variations'>Variations</div>
      <div className='concise-component-tabs-variants'>Variants</div>
      <div className='concise-component-tabs-bg-grey'>
        <div>
          <div className='concise-component-tabs-desc'>Button Group</div>
          <div className='concise-component-tabs-bg-white'>
            <Tabs tabsType='button'>
              <Tab title='Tabs' leftIcon='Eye'>
                Content 1
              </Tab>
              <Tab title='Tabs' leftIcon='Envelope'>
                Content 2
              </Tab>
              <Tab title='Tabs' leftIcon='Grid'>
                Content 3
              </Tab>
            </Tabs>
          </div>
        </div>
        <div>
          <div className='concise-component-tabs-desc'>Page Number</div>
          <div className='concise-component-tabs-bg-white'>
            <Tabs tabsType='number'>
              <Tab>Content 1</Tab>
              <Tab>Content 2</Tab>
              <Tab>Content 3</Tab>
            </Tabs>
          </div>
        </div>
        <div>
          <div className='concise-component-tabs-desc'>Navigation</div>
          <div className='concise-component-tabs-bg-white'>
            <Tabs tabsType='navigation'>
              <Tab title='Tabs' leftIcon='Add'>
                Content 1
              </Tab>
              <Tab title='Tabs' leftIcon='Add'>
                Content 2
              </Tab>
              <Tab title='Tabs' leftIcon='Add'>
                Content 3
              </Tab>
            </Tabs>
          </div>
        </div>
        <div>
          <div className='concise-component-tabs-desc'>Default Tabs</div>
          <div className='concise-component-tabs-bg-white'>
            <Tabs>
              <Tab title='Tabs' leftIcon='Add'>
                Content 1
              </Tab>
              <Tab title='Tabs' leftIcon='Add'>
                Content 2
              </Tab>
              <Tab title='Tabs' leftIcon='Add'>
                Content 3
              </Tab>
            </Tabs>
          </div>
        </div>
        <div>
          <div className='concise-component-tabs-desc'>Icon Only Tabs</div>
          <div className='concise-component-tabs-bg-white'>
            <Tabs>
              <Tab leftIcon='Add'>Content 1</Tab>
              <Tab leftIcon='Add'>Content 2</Tab>
              <Tab leftIcon='Add'>Content 3</Tab>
            </Tabs>
          </div>
        </div>
        <div>
          <div className='concise-component-tabs-desc'>Text Only Tabs</div>
          <div className='concise-component-tabs-bg-white'>
            <Tabs>
              <Tab title='Tabs'>Content 1</Tab>
              <Tab title='Tabs'>Content 2</Tab>
              <Tab title='Tabs'>Content 3</Tab>
            </Tabs>
          </div>
        </div>
      </div>
      <div className='concise-component-tabs-variants'>Orientation</div>
      <div className='concise-component-tabs-bg-orientation'>
        <div>
          <div>Inline Horizontal Group</div>
          <div className='concise-component-tabs-bg-white'>
            <Tabs>
              <Tab title='Tabs' leftIcon='Add'>
                Content 1
              </Tab>
              <Tab title='Tabs' leftIcon='Add'>
                Content 2
              </Tab>
              <Tab title='Tabs' leftIcon='Add'>
                Content 3
              </Tab>
            </Tabs>
          </div>
        </div>
        <div>
          <div className='concise-component-tabs-desc'>Stacked Vertical Group</div>
          <div className='concise-component-tabs-bg-white'>
            <Tabs tabsOrientation='vertical'>
              <Tab title='Tabs'>Content 1</Tab>
              <Tab title='Tabs'>Content 2</Tab>
              <Tab title='Tabs'>Content 3</Tab>
            </Tabs>
          </div>
        </div>
      </div>
      <div className='concise-component-tabs-desc-sec'>
        Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in
      </div>
      <div className='concise-component-tabs-variations'>Size</div>
      <div className='concise-component-tabs-desc-sec'>Description text go here</div>
      <div className='concise-component-tabs-bg-orientation'>
        <div>
          <div>Small</div>
          <Tabs tabsSize='small'>
            <Tab title='Tabs' leftIcon='Add'>
              Content 1
            </Tab>
            <Tab title='Tabs' leftIcon='Add'>
              Content 2
            </Tab>
            <Tab title='Tabs' leftIcon='Add'>
              Content 3
            </Tab>
          </Tabs>
        </div>
        <div>
          <div>Medium</div>
          <Tabs>
            <Tab title='Tabs' leftIcon='Add'>
              Content 1
            </Tab>
            <Tab title='Tabs' leftIcon='Add'>
              Content 2
            </Tab>
            <Tab title='Tabs' leftIcon='Add'>
              Content 3
            </Tab>
          </Tabs>
        </div>
        <div>
          <div>Large</div>
          <Tabs tabsSize='large'>
            <Tab title='Tabs' leftIcon='Add' rightIcon='Add'>
              Content 1
            </Tab>
            <Tab title='Tabs' leftIcon='Add' rightIcon='Add'>
              Content 2
            </Tab>
            <Tab title='Tabs' leftIcon='Add' rightIcon='Add'>
              Content 3
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default TabPage

import { Table } from 'ui-kit'
import './TablePage.scss'
import { ColumnProps } from 'types'

const TablePage = () => {
  const columnsLeave: Array<ColumnProps<any>> = [
    {
      key: 'first_name',
      title: 'Firstname',
    },
    {
      key: 'lastname',
      title: 'Lastname',
    },
    {
      key: 'email',
      title: 'Email',
    },
    {
      key: 'phone',
      title: 'Phone',
    },
  ]

  const data = [
    {
      first_name: 'Jane',
      lastname: 'Sample',
      email: 'Jsample@gmail.com',
      phone: '08123456789',
    },
    {
      first_name: 'Jane',
      lastname: 'Sample',
      email: 'Jsample@gmail.com',
      phone: '08123456789',
    },
    {
      first_name: 'Jane',
      lastname: 'Sample',
      email: 'Jsample@gmail.com',
      phone: '08123456789',
    },
    {
      first_name: 'Jane',
      lastname: 'Sample',
      email: 'Jsample@gmail.com',
      phone: '08123456789',
    },
  ]

  return (
    <>
      <div className='concise-component-table-container'>
        <div className='concise-component-table-title'>Table</div>
        <div className='concise-component-table-text'>
          Table is used to display simple datasets that do not need to be filtered or edited.
        </div>
        <div>
          <div className='concise-component-table-subtitle'>Anatomy</div>
          <div className='concise-component-table-desc'>Description text go here</div>
          <div className='concise-component-table-bg-grey'>
            <div className='concise-component-table-bg-white'>
              <Table
                useFilter={false}
                useFooter={false}
                columns={columnsLeave}
                data={data}
                columnBorder={false}
                isCompact={false}
              />
            </div>
          </div>
          <div className='concise-component-table-desc-sec'>
            Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in
          </div>
        </div>
        <div>
          <div className='concise-component-table-heading'>Appearance</div>
          <div className='concise-component-table-subtitle'>Borders</div>
          <div className='concise-component-table-desc'>The header can have two variations – title only or title with subtitle.</div>
          <div className='concise-component-table-bg-grey'>
            <div>
              <div className='concise-component-table-border'>Row Border</div>
              <div className='concise-component-table-bg-white'>
                <Table
                  useFilter={false}
                  useFooter={false}
                  columns={columnsLeave}
                  data={data}
                  columnBorder={false}
                  isCompact={false}
                />
              </div>
            </div>
            <div>
              <div className='concise-component-table-border'>Row Border with Stripping</div>
              <div className='concise-component-table-bg-white'>
                <Table
                  useFilter={false}
                  useFooter={false}
                  columns={columnsLeave}
                  data={data}
                  columnBorder={false}
                  isCompact={false}
                  rowStriping={true}
                />
              </div>
            </div>
            <div>
              <div className='concise-component-table-border'>Column Border</div>
              <div className='concise-component-table-bg-white'>
                <Table
                  useFilter={false}
                  useFooter={false}
                  columns={columnsLeave}
                  data={data}
                  isCompact={false}
                />
              </div>
            </div>
            <div>
              <div className='concise-component-table-border'>Column Border with Stripping</div>
              <div className='concise-component-table-bg-white'>
                <Table
                  useFilter={false}
                  useFooter={false}
                  columns={columnsLeave}
                  data={data}
                  isCompact={false}
                  rowStriping={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='concise-component-table-density'>Density</div>
          <div className='concise-component-table-desc'>The footer can vary depending on the number of actions that need to be shown to the user.</div>
          <div className='concise-component-table-bg-grey'>
            <div>
              <div className='concise-component-table-border'>Standard</div>
              <div className='concise-component-table-bg-white'>
                <Table
                  useFilter={false}
                  useFooter={false}
                  columns={columnsLeave}
                  data={data}
                  columnBorder={false}
                  isCompact={false}
                />
              </div>
            </div>
            <div>
              <div className='concise-component-table-border'>Compact</div>
              <div className='concise-component-table-bg-white'>
                <Table
                  useFilter={false}
                  useFooter={false}
                  columns={columnsLeave}
                  data={data}
                  columnBorder={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TablePage

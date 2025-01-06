import { useEffect, useState } from 'react'
import { Headline, Icon } from 'ui-kit'
import './Dashboard.scss'
import { useScaleLoader } from 'utils/getScaleLoader'
import { getDataDashboard } from 'services/global.services'
import { useErrorHandler } from 'utils/useErrorHandler'
import { TChurchStatus } from 'types'

const Dashboard = () => {
  const [showLoader, hideLoader] = useScaleLoader()
  const handleErrorResponse = useErrorHandler()
  const [statusData, setStatusData] = useState({ active: 0, inactive: 0 })
  const [detailStatusData, setDetailStatusData] = useState<TChurchStatus[]>([])

  const fetchDataDashboard = async () => {
    showLoader()
    getDataDashboard()
      .then((res) => {
        if (res.status === 200) {
          const resData = res.data.data
          setStatusData({
            active: resData.active,
            inactive: resData.non_active,
          })
          setDetailStatusData(resData.detail)
        } else handleErrorResponse(res)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        hideLoader()
      })
  }

  useEffect(() => {
    fetchDataDashboard()
  }, [])

  const statusSummary = detailStatusData.map((item, index) => (
    <div key={index} className='item dashboard-item dashboard-item-status'>
      <div className='church-status'>{item.status}</div>
      <div className='church-total-prodiakon'>{item.count} orang</div>
    </div>
  ))

  return (
    <div className='frame'>
      <Headline headlineText={'Dashboard'} headlineSize='big' />
      <div className='data dashboard-data'>
        <div className='content dashboard-content'>
          <div className='title dashboard-title'>Jumlah Prodiakon</div>
          <div className='items dashboard-items'>
            <div className='item dashboard-item'>
              <div className='church-name'>
                <Icon type='Church' />
                <span>Prodiakon Aktif</span>
              </div>
              <div className='church-parish'>
                <span>Paroki Alam Sutera</span>
              </div>
              <div className='dashboard-item-body'>
                <div className='church-total-prodiakon'>{statusData.active} orang</div>
              </div>
            </div>
            <div className='item dashboard-item'>
              <div className='church-name'>
                <Icon type='Church' />
                <span>Prodiakon Non-Aktif</span>
              </div>
              <div className='church-parish'>
                <span>Paroki Alam Sutera</span>
              </div>
              <div className='dashboard-item-body'>
                <div className='church-total-prodiakon'>{statusData.inactive} orang</div>
              </div>
            </div>
          </div>
          <div className='title dashboard-title'>Status Prodiakon</div>
          <div className='subtitle dashboard-subtitle'>Paroki Alam Sutera</div>
          <div className='items dashboard-items'>{statusSummary}</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

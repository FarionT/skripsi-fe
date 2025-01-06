import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Headline, Icon } from 'ui-kit'
import './GerejaList.scss'
import { useScaleLoader } from 'utils/getScaleLoader'
import { getAllChurches } from 'services/church.services'
import { useErrorHandler } from 'utils/useErrorHandler'
import { TChurch } from 'types'

const GerejaList = () => {
  const navigate = useNavigate()
  const handleErrorResponse = useErrorHandler()

  const [showLoader, hideLoader] = useScaleLoader()

  const [churchData, setChurchData] = useState<TChurch[]>([])

  const handleGerejaDetail = (item: any) => {
    navigate(`/dashboard/master-data-church/${item.slug}`, { state: { id: item.id } })
  }

  const fetchAllChurches = async () => {
    showLoader()

    getAllChurches()
      .then((res) => {
        if (res.status === 200) {
          const resData = res.data.data
          setChurchData(resData)
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
    fetchAllChurches()
  }, [])

  const churchSummary = churchData.map((item, index) => (
    <div key={index} className='item church-item' onClick={() => handleGerejaDetail(item)}>
      <div className='church-name'>
        <Icon type='Church' />
        <span>{item.name}</span>
      </div>
      <div className='church-detail'>
        <div className='church-parish'>{item.parish}</div>
      </div>
    </div>
  ))

  return (
    <div className='frame'>
      <Headline headlineText={'Gereja'} headlineSize='big' />
      <div className='data church-data'>
        <div className='content church-content'>
          <div className='header church-header'>
            <div className='title church-title'>Daftar Gereja</div>
          </div>
          <div className='items church-items'>{churchSummary}</div>
        </div>
      </div>
    </div>
  )
}

export default GerejaList

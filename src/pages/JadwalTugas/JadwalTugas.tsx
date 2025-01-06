import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Headline, Icon } from 'ui-kit'
import './JadwalTugas.scss'
import { useScaleLoader } from 'utils/getScaleLoader'
import { getAllChurches } from 'services/church.services'
import { useErrorHandler } from 'utils/useErrorHandler'

type TChurch = {
  id?: string
  name: string
  parish: string
  slug: string
}[]

const JadwalTugas = () => {
  const navigate = useNavigate()
  const handleErrorResponse = useErrorHandler()

  const [showLoader, hideLoader] = useScaleLoader()

  const [churchData, setChurchData] = useState<TChurch>([])

  const handleGerejaDetail = (id: any, slug: any) => {
    navigate(`/dashboard/prodeacon-scheduling/${slug}`, { state: { id: id } })
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
    <div
      key={index}
      className='item prodeacon-scheduling-item'
      onClick={() => handleGerejaDetail(item.id, item.slug)}
    >
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
      <Headline headlineText={'Jadwal Tugas Prodiakon'} headlineSize='big' />
      <div className='data prodeacon-scheduling-data'>
        <div className='content prodeacon-scheduling-content'>
          <div className='header church-header'>
            <div className='title church-title'>Daftar Gereja</div>
          </div>
          <div className='items prodeacon-scheduling-items'>{churchSummary}</div>
        </div>
      </div>
    </div>
  )
}

export default JadwalTugas

import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ColumnProps, TProdeacon } from 'types'
import {
  Button,
  FormField,
  FilterDropdown,
  Headline,
  Icon,
  Modal,
  Search,
  Table,
  Toast,
} from 'ui-kit'
import './ProdiakonList.scss'
import { useScaleLoader } from 'utils/getScaleLoader'
import { useErrorHandler } from 'utils/useErrorHandler'
import { deleteProdeacon, getAllProdeacon } from 'services/prodeacon.services'
import { IFilterDropdownOptions } from 'ui-kit/FilterDropdown'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'utils/redux'
import { getDropdownChurch, getDropdownCoordType, getDropdownStatus } from 'utils/getDropdownOpt'

const ProdiakonList = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleErrorResponse = useErrorHandler()
  const [showLoader, hideLoader] = useScaleLoader()

  const [prodeaconData, setProdeaconData] = useState<TProdeacon[]>([])
  const [deleted, setDeleted] = useState(false)
  const [search, setSearch] = useState('')
  const [isDisabledSearch, setIsDisabledSearch] = useState(false)
  const [debouncedInputValue, setDebouncedInputValue] = useState('')
  const [sortProdeacon, setSortProdeacon] = useState('')
  const [filters, setFilters] = useState<{ [key: string]: Set<string> }>({})
  const [filterCount, setFilterCount] = useState(0)
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    getDropdownStatus(dispatch, navigate)
    getDropdownChurch(dispatch, navigate)
    getDropdownCoordType(dispatch, navigate)
  }, [])

  // Redux selectors
  const status = useSelector((state: RootState) => state.dropdown.statuses)
  const church = useSelector((state: RootState) => state.dropdown.churches)

  // Filter options for FilterDropdown
  const [filterOption, setFilterOption] = useState<IFilterDropdownOptions[]>([
    {
      id: '1',
      title: 'Status',
      content: status,
      isRadio: false,
    },
    {
      id: '2',
      title: 'Gereja',
      content: church,
      isRadio: true,
    },
  ])

  // Pagination handlers
  const handlePageChange = useCallback((newPage: number) => setPage(newPage), [])
  const handleLimitChange = useCallback((newLimit: number) => setLimit(newLimit), [])

  // Helper: Reset search params, page, and limit
  const resetParams = () => {
    handlePageChange(1)
    handleLimitChange(10)
    setSearchParams((prevParams) => {
      prevParams.delete('page')
      prevParams.delete('limit')
      return prevParams
    })
  }

  // Helper: Reset filters
  const handleReset = () => {
    setFilterCount(0)
    setFilters({})
    resetParams()
  }

  const onChangeSelectSortBy = (value: string) => setSortProdeacon(value)

  // Helper: Get sorting params
  const getSortParams = () => {
    switch (sortProdeacon) {
      case 'A-Z Name':
        return ['full_name', 'ASC']
      case 'Z-A Name':
        return ['full_name', 'DESC']
      case 'Ascending No. Registrasi':
        return ['user_registration_number', 'ASC']
      case 'Descending No. Registrasi':
        return ['user_registration_number', 'DESC']
      default:
        return ['', '']
    }
  }

  const fetchAllProdeacons = async () => {
    const [sortBy, sortType] = getSortParams()

    const params: any = {
      search: debouncedInputValue || '',
      sort_by: sortBy || '',
      sort_type: sortType || '',
      statuses: Array.from(filters['1'] || []),
      churches: Array.from(filters['2'] || []),
      page,
      row: limit,
      pagination: 'true',
    }

    showLoader()

    getAllProdeacon(params)
      .then((res) => {
        if (res.status === 200) {
          const resCount = res.data.count
          const resData = res.data.data

          setCount(resCount)
          setProdeaconData(resData)
        } else handleErrorResponse(res)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        hideLoader()
        setIsDisabledSearch(false)
      })
  }

  useEffect(() => {
    fetchAllProdeacons()
    if(debouncedInputValue) {
      setIsDisabledSearch(true)
    }
  }, [deleted, debouncedInputValue, filters, sortProdeacon, page, limit])

  useEffect(() => {
    if (search.length > 2 || search.length === 0) {
      const delayInputTimeoutId = setTimeout(() => {
        console.log(search)
        setDebouncedInputValue(search)
        resetParams()
      }, 1000)
      return () => clearTimeout(delayInputTimeoutId)
    }
  }, [search])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleCheck = (filterId: string, itemId: string, isChecked: boolean) => {
    resetParams()
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters }
      if (!newFilters[filterId]) {
        newFilters[filterId] = new Set()
      }

      if (isChecked) {
        setFilterCount(filterCount + 1)
        newFilters[filterId].add(itemId)
      } else {
        setFilterCount(filterCount - 1)
        newFilters[filterId].delete(itemId)
      }

      if (newFilters[filterId].size === 0) {
        delete newFilters[filterId]
      }

      return newFilters
    })
  }

  const handleRadio = (filterId: string, itemId: string, isChecked: boolean) => {
    resetParams()
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters }
      if (!newFilters[filterId]) {
        setFilterCount(filterCount + 1)
        newFilters[filterId] = new Set()
      }

      if (isChecked) {
        newFilters[filterId].clear()
        newFilters[filterId].add(itemId)
      } else {
        newFilters[filterId].delete(itemId)
      }

      return newFilters
    })

    resetParams()
  }

  const handleEditProdeacon = (value: TProdeacon) => {
    navigate(`/dashboard/master-data-prodeacon/${value.id}`, {
      state: { id: value.id },
    })
  }

  const [dataToDelete, setDataToDelete] = useState({
    id: '',
    has_schedule: false,
  })
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const submitDeleteProdeacon = (valueDelete: any) => {
    showLoader()

    deleteProdeacon(valueDelete.id)
      .then((res) => {
        if (res.status === 200) {
          Toast('Hapus Prodiakon Sukses', 'success', res.data.message)
          fetchAllProdeacons()
        } else handleErrorResponse(res)
      })
      .catch((err) => {
        console.log(err)
        Toast('Hapus Prodiakon Gagal', 'danger', err.data.message)
      })
      .finally(() => {
        hideLoader()
      })

    setShowDeleteModal(false)
  }

  const handleDeleteProdeacon = (value: any) => {
    setDataToDelete(value)
    setShowDeleteModal(true)
  }

  const columns: Array<ColumnProps<TProdeacon>> = [
    {
      key: 'user_registration_number',
      title: 'No. Registrasi',
      render: (_, value) => {
        return <span>{value.user_registration_number.toString().padStart(3, '0')}</span>
      },
    },
    {
      key: 'full_name',
      title: 'Nama',
    },
    {
      key: 'church',
      title: 'Preferensi Lokasi Gereja',
      render: (_, value) => {
        return <span>{value.preferential_church ?? '-'}</span>
      },
    },
    {
      key: 'status',
      title: 'Status',
      render: (_, value) => {
        return <span>{value.formatted_status ?? '-'}</span>
      },
    },
    {
      key: 'action',
      title: 'Action',
      render: (_, value) => (
        <div className='action-td'>
          <div title='Ubah'>
            <Icon
              type='PencilAlt'
              size='big'
              className='action-edit'
              onClick={() => handleEditProdeacon(value)}
            />
          </div>
          <div title='Hapus'>
            <Icon
              type='TrashAlt'
              size='big'
              className='action-delete'
              onClick={() => handleDeleteProdeacon(value)}
            />
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className='ProdiakonList'>
      <Modal
        headerText='Hapus Prodiakon'
        isShown={showDeleteModal}
        hide={() => setShowDeleteModal(false)}
        staticBackdrop={false}
      >
        <div>
          <div className='gereja-detail-modal-container'>
            <div className='gereja-detail-modal-subtitle subtitle'>
              {dataToDelete?.has_schedule ? (
                <span>
                  <strong>Tidak dapat menghapus Prodiakon</strong> yang masih memiliki <strong>jadwal aktif</strong>.
                  Harap <strong>alihkan</strong> atau <strong>hapus jadwal terlebih dahulu</strong>.
                </span>
              ) : (
                <span>
                  Apakah Anda yakin menghapus data <strong>Prodiakon</strong> ?
                </span>
              )}
            </div>
          </div>
          <div className='form'>
            {dataToDelete?.has_schedule ? (
              <div className='form-button'>
                <Button
                  buttonType='outline'
                  buttonAppearance='secondary'
                  onClick={() => setShowDeleteModal(false)}
                >
                  Ok
                </Button>
              </div>
            ) : (
              <div className='form-button'>
                <Button
                  buttonType='outline'
                  buttonAppearance='secondary'
                  onClick={() => setShowDeleteModal(false)}
                >
                  Batal
                </Button>
                <Button
                  buttonAppearance='destructive'
                  onClick={() => submitDeleteProdeacon(dataToDelete)}
                >
                  Hapus
                </Button>
              </div>
            )}
          </div>
        </div>
      </Modal>
      <div className='frame'>
        <Headline headlineText={'Prodiakon'} headlineSize='big' />
        <div className='data prodeacon-data'>
          <div className='content prodeacon-content'>
            <div className='header prodeacon-header'>
              <div className='title prodeacon-title'>Daftar Prodiakon</div>
            </div>
            <div className='subheader prodeacon-subheader'>
              <div className='filter prodeacon-filter form'>
                <div className='filter-item'>
                  <Search
                    searchedKeyword={search}
                    name='searchProdeacon'
                    onSearchChange={(event) => handleSearchChange(event)}
                    searchedPlaceholder='Nama, No. Registrasi'
                    isDisabled={isDisabledSearch}
                  />
                </div>
                <div className='filter-item'>
                  <FilterDropdown
                    options={filterOption}
                    functionReset={handleReset}
                    functionChecked={handleCheck}
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    functionRadio={handleRadio}
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    handleDateChange={() => {}}
                    filterCount={filterCount}
                    filterText={'Status, Church'}
                    isShowMoreEnable={false}
                  />
                </div>
                <div className='filter-item'>
                  <FormField
                    name={'sortMerchant'}
                    placeholder={'Sort by'}
                    value={sortProdeacon}
                    type='select'
                    options={[
                      {
                        idx: '1',
                        name: 'A-Z Name',
                      },
                      {
                        idx: '2',
                        name: 'Z-A Name',
                      },
                      {
                        idx: '3',
                        name: 'Ascending No. Registrasi',
                      },
                      {
                        idx: '4',
                        name: 'Descending No. Registrasi',
                      },
                    ]}
                    isClear={false}
                    onChangeSelect={onChangeSelectSortBy}
                    getOptionLabel={'name'}
                    getOptionValue={'name'}
                    trailingIcon={'SortDesc'}
                  />
                </div>
              </div>
              <Button
                buttonSize='big'
                typeIcon='PlusAlt'
                onClick={() => navigate('/dashboard/master-data-prodeacon/add')}
              >
                Prodiakon Baru
              </Button>
            </div>
            <div className='items prodeacon-items'>
              <Table
                className='jadwal-misa-table'
                data={prodeaconData}
                columns={columns}
                columnBorder={false}
                useFooter={true}
                useFilter={false}
                useApi
                datalength={count}
                pages={page}
                limits={limit}
                onPageChange={handlePageChange}
                onLimitChange={handleLimitChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProdiakonList

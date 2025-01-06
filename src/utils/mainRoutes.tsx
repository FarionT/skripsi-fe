import { Routes, Route, Navigate } from 'react-router-dom'
import {
  Login,
  SetupPassword,

  Dashboard,
  GerejaList,
  GerejaManagement,

  ProdiakonMobile
} from 'pages'
import PrivateRoutes from 'utils/privateRoutes'
import ProdiakonRoutes from 'utils/prodiakonRoutes'
import CustomRoutes from './customRoutes'
import { ProdiakonList } from 'pages/ProdiakonList'
import { JadwalTugas } from 'pages/JadwalTugas'
import { JadwalTugasDetail } from 'pages/JadwalTugasDetail'
import { ProdiakonManagement } from 'pages/ProdiakonManagement'

const MainRoutes = () => (
  <Routes>
    <Route element={<PrivateRoutes />}>
      <Route element={<Dashboard />} path='/dashboard' />
      <Route element={<GerejaList />} path='/dashboard/master-data-church' />
      <Route element={<GerejaManagement />} path='/dashboard/master-data-church/:slug' />
      <Route element={<ProdiakonList />} path='/dashboard/master-data-prodeacon' />
      <Route element={<ProdiakonManagement />} path='/dashboard/master-data-prodeacon/add' />
      <Route element={<ProdiakonManagement />} path='/dashboard/master-data-prodeacon/:id' />
      <Route element={<JadwalTugas />} path='/dashboard/prodeacon-scheduling' />
      <Route element={<JadwalTugasDetail />} path='/dashboard/prodeacon-scheduling/:slug' />
    </Route>

    <Route element={<ProdiakonRoutes />}>
      <Route element={<ProdiakonMobile />} path='/' />
    </Route>

    <Route element={<CustomRoutes />}>
      <Route element={<Login />} path='/login' />
      <Route element={<SetupPassword />} path='/setup-password' />
    </Route>
  </Routes>
)

export default MainRoutes

import { newGuid } from 'utils/guid'
import { ReactComponent as Add } from '../assets/icons/Add.svg'
import { ReactComponent as Address } from '../assets/icons/Address.svg'
import { ReactComponent as Alert } from '../assets/icons/Alert.svg'
import { ReactComponent as AngleDown } from '../assets/icons/AngleDown.svg'
import { ReactComponent as AngleLeft } from '../assets/icons/AngleLeft.svg'
import { ReactComponent as AngleRight } from '../assets/icons/AngleRight.svg'
import { ReactComponent as AngleUp } from '../assets/icons/AngleUp.svg'
import { ReactComponent as ArrowUp } from '../assets/icons/ArrowUp.svg'
import { ReactComponent as Avatar } from '../assets/icons/Avatar.svg'
import { ReactComponent as Bell } from '../assets/icons/Bell.svg'
import { ReactComponent as Bookmark } from '../assets/icons/Bookmark.svg'
import { ReactComponent as Calendar } from '../assets/icons/Calendar.svg'
import { ReactComponent as CalendarAlt } from '../assets/icons/CalendarAlt.svg'
import { ReactComponent as CaretDown } from '../assets/icons/CaretDown.svg'
import { ReactComponent as CaretLeft } from '../assets/icons/CaretLeft.svg'
import { ReactComponent as CaretRight } from '../assets/icons/CaretRight.svg'
import { ReactComponent as CaretUp } from '../assets/icons/CaretUp.svg'
import { ReactComponent as Cart } from '../assets/icons/Cart.svg'
import { ReactComponent as Check } from '../assets/icons/Check.svg'
import { ReactComponent as ChevronDouble } from '../assets/icons/ChevronDouble.svg'
import { ReactComponent as ChevronDoubleRight } from '../assets/icons/ChevronDoubleRight.svg'
import { ReactComponent as ChevronDown } from '../assets/icons/ChevronDown.svg'
import { ReactComponent as ChevronUp } from '../assets/icons/ChevronUp.svg'
import { ReactComponent as Church } from '../assets/icons/Church.svg'
import { ReactComponent as ClipboardList } from '../assets/icons/ClipboardList.svg'
import { ReactComponent as Clock } from '../assets/icons/Clock.svg'
import { ReactComponent as ClockAlt } from '../assets/icons/ClockAlt.svg'
import { ReactComponent as Cog } from '../assets/icons/Cog.svg'
import { ReactComponent as Collection } from '../assets/icons/Collection.svg'
import { ReactComponent as Comment } from '../assets/icons/Comment.svg'
import { ReactComponent as Cross } from '../assets/icons/Cross.svg'
import { ReactComponent as CrossAlt } from '../assets/icons/CrossAlt.svg'
import { ReactComponent as Download } from '../assets/icons/Download.svg'
import { ReactComponent as Danger } from '../assets/icons/Danger.svg'
import { ReactComponent as Dashboard } from '../assets/icons/Dashboard.svg'
import { ReactComponent as Dropdown } from '../assets/icons/Dropdown.svg'
import { ReactComponent as Envelope } from '../assets/icons/Envelope.svg'
import { ReactComponent as Exclamation } from '../assets/icons/Exclamation.svg'
import { ReactComponent as Eye } from '../assets/icons/Eye.svg'
import { ReactComponent as EyeCrossed } from '../assets/icons/EyeCrossed.svg'
import { ReactComponent as FileAlt } from '../assets/icons/FileAlt.svg'
import { ReactComponent as Filter } from '../assets/icons/Filter.svg'
import { ReactComponent as Fingerprint } from '../assets/icons/Fingerprint.svg'
import { ReactComponent as FolderRemove } from '../assets/icons/FolderRemove.svg'
import { ReactComponent as Grid } from '../assets/icons/Grid.svg'
import { ReactComponent as Heart } from '../assets/icons/Heart.svg'
import { ReactComponent as Home } from '../assets/icons/Home.svg'
import { ReactComponent as Info } from '../assets/icons/Info.svg'
import { ReactComponent as InformationCircle } from '../assets/icons/InformationCircle.svg'
import { ReactComponent as InfoBlue } from '../assets/icons/InfoBlue.svg'
import { ReactComponent as Interrogation } from '../assets/icons/Interrogation.svg'
import { ReactComponent as Loading } from '../assets/icons/Loading.svg'
import { ReactComponent as Location } from '../assets/icons/Location.svg'
import { ReactComponent as Logout } from '../assets/icons/Logout.svg'
import { ReactComponent as LogoutAlt } from '../assets/icons/LogoutAlt.svg'
import { ReactComponent as Marker } from '../assets/icons/Marker.svg'
import { ReactComponent as MasterData } from '../assets/icons/MasterData.svg'
import { ReactComponent as MenuBurger } from '../assets/icons/MenuBurger.svg'
import { ReactComponent as MenuDots } from '../assets/icons/MenuDots.svg'
import { ReactComponent as MenuDotsVertical } from '../assets/icons/MenuDotsVertical.svg'
import { ReactComponent as Minus } from '../assets/icons/Minus.svg'
import { ReactComponent as Moon } from '../assets/icons/Moon.svg'
import { ReactComponent as Picture } from '../assets/icons/Picture.svg'
import { ReactComponent as PencilAlt } from '../assets/icons/PencilAlt.svg'
import { ReactComponent as Plus } from '../assets/icons/Plus.svg'
import { ReactComponent as PlusAlt } from '../assets/icons/PlusAlt.svg'
import { ReactComponent as Refresh } from '../assets/icons/Refresh.svg'
import { ReactComponent as Reload } from '../assets/icons/Reload.svg'
import { ReactComponent as Search } from '../assets/icons/Search.svg'
import { ReactComponent as Server } from '../assets/icons/Server.svg'
import { ReactComponent as Setting } from '../assets/icons/Setting.svg'
import { ReactComponent as Share } from '../assets/icons/Share.svg'
import { ReactComponent as Signin } from '../assets/icons/Signin.svg'
import { ReactComponent as Signout } from '../assets/icons/Signout.svg'
import { ReactComponent as Spinner } from '../assets/icons/Spinner.svg'
import { ReactComponent as SortAsc } from '../assets/icons/SortAsc.svg'
import { ReactComponent as SortDesc } from '../assets/icons/SortDesc.svg'
import { ReactComponent as Success } from '../assets/icons/Success.svg'
import { ReactComponent as Sun } from '../assets/icons/Sun.svg'
import { ReactComponent as Support } from '../assets/icons/Support.svg'
import { ReactComponent as SwitchHorizontal } from '../assets/icons/SwitchHorizontal.svg'
import { ReactComponent as Trash } from '../assets/icons/Trash.svg'
import { ReactComponent as TrashAlt } from '../assets/icons/TrashAlt.svg'
import { ReactComponent as User } from '../assets/icons/User.svg'
import { ReactComponent as UserAlt } from '../assets/icons/UserAlt.svg'
import { ReactComponent as Warning } from '../assets/icons/Warning.svg'
import { ReactComponent as ZoomIn } from '../assets/icons/ZoomIn.svg'
import { ReactComponent as ZoomOut } from '../assets/icons/ZoomOut.svg'

export type IconType =
| 'Add'
| 'Address'
| 'Alert'
| 'AngleDown'
| 'AngleLeft'
| 'AngleRight'
| 'AngleUp'
| 'ArrowUp'
| 'Avatar'
| 'Bell'
| 'Bookmark'
| 'Calendar'
| 'CalendarAlt'
| 'CaretDown'
| 'CaretLeft'
| 'CaretRight'
| 'CaretUp' 
| 'Cart'
| 'Check'
| 'ChevronDouble'
| 'ChevronDoubleRight'
| 'ChevronDown'
| 'ChevronUp'
| 'Church'
| 'ClipboardList'
| 'Clock'
| 'ClockAlt'
| 'Cog'
| 'Collection'
| 'Comment'
| 'Cross'
| 'CrossAlt'
| 'Danger'
| 'Dashboard'
| 'Download'
| 'Dropdown'
| 'Envelope'
| 'Exclamation'
| 'Eye'
| 'EyeCrossed'
| 'FileAlt'
| 'Filter'
| 'Fingerprint'
| 'FolderRemove'
| 'Grid'
| 'Heart'
| 'Home'
| 'Info'
| 'InformationCircle'
| 'InfoBlue'
| 'Interrogation'
| 'Loading'
| 'Location'
| 'Logout'
| 'LogoutAlt'
| 'Marker'
| 'MasterData'
| 'MenuBurger'
| 'MenuDots'
| 'MenuDotsVertical'
| 'Minus'
| 'Moon'
| 'Picture'
| 'PencilAlt'
| 'Plus'
| 'PlusAlt'
| 'Refresh'
| 'Reload'
| 'Search'
| 'Server'
| 'Setting'
| 'Share'
| 'Signin'
| 'Signout'
| 'SortAsc'
| 'SortDesc'
| 'Spinner'
| 'Success'
| 'SwitchHorizontal'
| 'Sun'
| 'Support'
| 'Trash'
| 'TrashAlt'
| 'User'
| 'UserAlt'
| 'Warning'
| 'ZoomIn'
| 'ZoomOut'

export const iconTypes = new Map([
  ['Add', <Add key={newGuid()} />],
  ['Address', <Address key={newGuid()} />],
  ['Alert', <Alert key={newGuid()} />],
  ['AngleDown', <AngleDown key={newGuid()} />],
  ['AngleLeft', <AngleLeft key={newGuid()} />],
  ['AngleRight', <AngleRight key={newGuid()} />],
  ['AngleUp', <AngleUp key={newGuid()} />],
  ['ArrowUp', <ArrowUp key={newGuid()} />],
  ['Avatar', <Avatar key={newGuid()} />],
  ['Bell', <Bell key={newGuid()} />],
  ['Bookmark', <Bookmark key={newGuid()} />],
  ['Calendar', <Calendar key={newGuid()} className='isStroke' />],
  ['CalendarAlt', <CalendarAlt key={newGuid()} />],
  ['CaretDown', <CaretDown key={newGuid()} />],
  ['CaretLeft', <CaretLeft key={newGuid()} />],
  ['CaretRight', <CaretRight key={newGuid()} />],
  ['CaretUp', <CaretUp key={newGuid()} />],
  ['Cart', <Cart key={newGuid()} />],
  ['Check', <Check key={newGuid()} />],
  ['ChevronDouble', <ChevronDouble key={newGuid()} />],
  ['ChevronDoubleRight', <ChevronDoubleRight key={newGuid()} />],
  ['ChevronDown', <ChevronDown key={newGuid()} className='isStroke' />],
  ['ChevronUp', <ChevronUp key={newGuid()} />],
  ['Church', <Church key={newGuid()} />],
  ['ClipboardList', <ClipboardList key={newGuid()} />],
  ['Clock', <Clock key={newGuid()} />],
  ['ClockAlt', <ClockAlt key={newGuid()} className='isStroke' />],
  ['Cog', <Cog key={newGuid()} />],
  ['Collection', <Collection key={newGuid()} />],
  ['Comment', <Comment key={newGuid()} />],
  ['Cross', <Cross key={newGuid()} />],
  ['CrossAlt', <CrossAlt key={newGuid()} />],
  ['Download', <Download key={newGuid()} />],
  ['Danger', <Danger key={newGuid()} />],
  ['Dashboard', <Dashboard key={newGuid()} />],
  ['Dropdown', <Dropdown key={newGuid()} />],
  ['Envelope', <Envelope key={newGuid()} />],
  ['Exclamation', <Exclamation key={newGuid()} />],
  ['Eye', <Eye key={newGuid()} />],
  ['EyeCrossed', <EyeCrossed key={newGuid()} />],
  ['FileAlt', <FileAlt key={newGuid()} className='isStroke'/>],
  ['Filter', <Filter key={newGuid()} />],
  ['Fingerprint', <Fingerprint key={newGuid()} />],
  ['FolderRemove', <FolderRemove key={newGuid()} />],
  ['Grid', <Grid key={newGuid()} />],
  ['Heart', <Heart key={newGuid()} />],
  ['Home', <Home key={newGuid()} />],
  ['Info', <Info key={newGuid()} />],
  ['InformationCircle', <InformationCircle key={newGuid()} />],
  ['InfoBlue', <InfoBlue key={newGuid()} />],
  ['Interrogation', <Interrogation key={newGuid()} />],
  ['Loading', <Loading key={newGuid()} />],
  ['Location', <Location key={newGuid()} />],
  ['Logout', <Logout key={newGuid()} />],
  ['LogoutAlt', <LogoutAlt key={newGuid()} />],
  ['Marker', <Marker key={newGuid()} />],
  ['MasterData', <MasterData key={newGuid()} />],
  ['MenuBurger', <MenuBurger key={newGuid()} />],
  ['MenuDots', <MenuDots key={newGuid()} />],
  ['MenuDotsVertical', <MenuDotsVertical key={newGuid()} />],
  ['Minus', <Minus key={newGuid()} />],
  ['Moon', <Moon key={newGuid()} />],
  ['Picture', <Picture key={newGuid()} />],
  ['PencilAlt', <PencilAlt key={newGuid()} className='isStroke' />],
  ['Plus', <Plus key={newGuid()} />],
  ['PlusAlt', <PlusAlt key={newGuid()} className='isStroke' />],
  ['Refresh', <Refresh key={newGuid()} className='isStroke'/>],
  ['Reload', <Reload key={newGuid()} />],
  ['Search', <Search key={newGuid()} />],
  ['Server', <Server key={newGuid()} />],
  ['Setting', <Setting key={newGuid()} />],
  ['Share', <Share key={newGuid()} />],
  ['Signin', <Signin key={newGuid()} />],
  ['Signout', <Signout key={newGuid()} />],
  ['SortAsc', <SortAsc key={newGuid()} className='isStroke' />],
  ['SortDesc', <SortDesc key={newGuid()} className='isStroke' />],
  ['Spinner', <Spinner key={newGuid()} />],
  ['Success', <Success key={newGuid()} />],
  ['Sun', <Sun key={newGuid()} />],
  ['Support', <Support key={newGuid()} />],
  ['SwitchHorizontal', <SwitchHorizontal key={newGuid()} />],  
  ['Trash', <Trash key={newGuid()} />],
  ['TrashAlt', <TrashAlt key={newGuid()} className='isStroke' />],
  ['User', <User key={newGuid()} />],
  ['UserAlt', <UserAlt key={newGuid()} className='isStroke' />],
  ['Warning', <Warning key={newGuid()} />],
  ['ZoomIn', <ZoomIn key={newGuid()} />],
  ['ZoomOut', <ZoomOut key={newGuid()} />],
])

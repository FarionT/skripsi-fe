import classNames from 'classnames'
import './Stat.scss'

export type TStatTypes = 'centered' | 'figure'

type TStatProps = {
  heroType?: TStatTypes
  className?: string
}

export const Stat = ({ heroType, className }: TStatProps) => {
  return (
    <div className={classNames('conciseStat', className)}>
      <div className='conciseStatItem'>
        {/* <div className='conciseStat__title'>Downloads</div> */}
        <div className='conciseStat__value'>100+</div>
        <div className='conciseStat__desc'>number of clients</div>
      </div>

      <div className='conciseStatItem'>
        {/* <div className='conciseStat__title'>Users</div> */}
        <div className='conciseStat__value'>250+</div>
        <div className='conciseStat__desc'>projects</div>
      </div>

      <div className='conciseStatItem'>
        {/* <div className='conciseStat__title'>New Registers</div> */}
        <div className='conciseStat__value'>300K+</div>
        <div className='conciseStat__desc'>line of codes</div>
      </div>

      <div className='conciseStatItem'>
        {/* <div className='conciseStat__title'>New Registers</div> */}
        <div className='conciseStat__value'>4000+</div>
        <div className='conciseStat__desc'>hours of work</div>
      </div>
    </div>
  )
}

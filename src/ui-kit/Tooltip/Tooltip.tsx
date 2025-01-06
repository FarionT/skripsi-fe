import { useState, useRef } from 'react'
import './Tooltip.scss'
import classNames from 'classnames'

type TTooltipProps = {
  className?: string
  placement?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
  theme?: 'light' | 'dark' | 'primary' | 'destructive' | 'secondary'
  delay?: number
  distanceFromChild?: number
  content: string
  children: React.ReactNode
  style?: any
}

type ISpace = {
  top: number
  bottom: number
  left: number
  right: number
}

type ITooltipSize = {
  width: number
  height: number
}

export const Tooltip = ({
  className,
  placement = 'bottom',
  theme = 'dark',
  delay = 200,
  distanceFromChild = 12,
  content,
  children,
  style = {},
}: TTooltipProps) => {
  const [active, setActive] = useState(false)
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined)
  const targetRef = useRef<HTMLDivElement>(null)

  const showTip = () => {
    const id = window.setTimeout(() => {
      setActive(true)
    }, delay)
    setTimeoutId(id)
  }

  const hideTip = () => {
    if (timeoutId) {
      window.clearTimeout(timeoutId)
      setTimeoutId(undefined)
    }
    setActive(false)
  }

  /**
   * * NOTE: When there is a changes related to size of the tooltip, update this function to adjust dummy tooltip
   */
  const measureTooltipSize = (): ITooltipSize => {
    const dummyTooltip = document.createElement('div')
    dummyTooltip.classList.add('Tooltip', placement)
    dummyTooltip.textContent = content
    document.body.appendChild(dummyTooltip)

    const tooltipRect = dummyTooltip.getBoundingClientRect()
    const tooltipSize = { width: tooltipRect.width, height: tooltipRect.height }

    document.body.removeChild(dummyTooltip)

    return tooltipSize
  }

  /**
   * Calculate tooltip distance from children node
   */
  const determineOffset = () => {
    if (targetRef.current) {
      const targetRect = targetRef.current.getBoundingClientRect()
      if (placement.startsWith('top')) {
        return { bottom: `${targetRect.height + distanceFromChild}px` }
      } else if (placement.startsWith('bottom')) {
        return { top: `${targetRect.height + distanceFromChild}px` }
      } else if (placement.startsWith('right')) {
        return { left: `${targetRect.width + distanceFromChild}px` }
      } else if (placement.startsWith('left')) {
        return { right: `${targetRect.width + distanceFromChild}px` }
      }
    }
  }

  /**
   * Checking whether placement is suitable base on avaiable space around children node
   */
  const determinePlacement = () => {
    if (targetRef.current) {
      const targetRect = targetRef.current.getBoundingClientRect()
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const navbarHeight = 64
      const sidebarWidth = 102

      const availableSpace = {
        top: targetRect.top - navbarHeight,
        bottom: windowHeight - targetRect.bottom,
        left: targetRect.left - sidebarWidth,
        right: windowWidth - targetRect.right,
      }

      const hasEnoughSpace = (space: ISpace, tooltipSize: ITooltipSize) => {
        return (
          space.top > tooltipSize.height &&
          space.bottom > tooltipSize.height &&
          space.left > tooltipSize.width &&
          space.right > tooltipSize.width
        )
      }

      const tooltipSize = measureTooltipSize()

      if (hasEnoughSpace(availableSpace, tooltipSize)) {
        return placement
      }

      const horizontalCenterOffset = tooltipSize.width / 2 - targetRect.width / 2
      const horizontalSpaceLeft = tooltipSize.width - targetRect.width
      const verticalCenterOffset = tooltipSize.height / 2 - targetRect.height / 2

      switch (placement) {
        case 'top':
          if (availableSpace.top < tooltipSize.height + distanceFromChild) {
            if (availableSpace.left < horizontalSpaceLeft) placement = 'bottom-left'
            else if (availableSpace.right < horizontalSpaceLeft) placement = 'bottom-right'
            else placement = 'bottom'
          } else if (availableSpace.left < horizontalCenterOffset) placement = 'top-left'
          else if (availableSpace.right < horizontalCenterOffset) placement = 'top-right'
          break
        case 'bottom':
          if (availableSpace.bottom < tooltipSize.height + distanceFromChild) {
            if (availableSpace.left < horizontalSpaceLeft) placement = 'top-left'
            else if (availableSpace.right < horizontalSpaceLeft) placement = 'top-right'
            else placement = 'top'
          } else if (availableSpace.left < horizontalCenterOffset) placement = 'bottom-left'
          else if (availableSpace.right < horizontalCenterOffset) placement = 'bottom-right'
          break
        case 'left':
          if (availableSpace.left < tooltipSize.width + distanceFromChild) {
            if (availableSpace.top < tooltipSize.height + distanceFromChild)
              placement = 'bottom-left'
            else if (availableSpace.bottom < tooltipSize.height + distanceFromChild)
              placement = 'top-left'
            else placement = 'right'
          } else {
            if (availableSpace.top < verticalCenterOffset) {
              if (
                availableSpace.left > horizontalCenterOffset &&
                availableSpace.right > horizontalCenterOffset
              )
                placement = 'bottom'
              else placement = 'bottom-right'
            } else if (availableSpace.bottom < verticalCenterOffset) {
              if (
                availableSpace.left > horizontalCenterOffset &&
                availableSpace.right > horizontalCenterOffset
              )
                placement = 'top'
              else placement = 'top-right'
            }
          }
          break
        case 'right':
          if (availableSpace.right < tooltipSize.width + distanceFromChild) {
            if (availableSpace.top < tooltipSize.height + distanceFromChild)
              placement = 'bottom-right'
            else if (availableSpace.bottom < tooltipSize.height) placement = 'top-right'
            else placement = 'left'
          } else {
            if (availableSpace.top < verticalCenterOffset) {
              if (
                availableSpace.left > horizontalCenterOffset &&
                availableSpace.right > horizontalCenterOffset
              )
                placement = 'bottom'
              else placement = 'bottom-left'
            } else if (availableSpace.bottom < verticalCenterOffset) {
              if (
                availableSpace.left > horizontalCenterOffset &&
                availableSpace.right > horizontalCenterOffset
              )
                placement = 'top'
              else placement = 'top-left'
            }
          }
          break
        case 'top-left':
          if (availableSpace.top < tooltipSize.height + distanceFromChild) {
            if (availableSpace.right < horizontalSpaceLeft) placement = 'bottom-right'
            else if (availableSpace.left < horizontalSpaceLeft) placement = 'bottom-left'
            else placement = 'bottom'
          } else if (availableSpace.right < horizontalSpaceLeft) {
            if (availableSpace.right < horizontalCenterOffset) placement = 'top-right'
            else placement = 'top'
          }
          break
        case 'top-right':
          if (availableSpace.top < tooltipSize.height + distanceFromChild) {
            if (availableSpace.left < horizontalSpaceLeft) placement = 'bottom-left'
            else if (availableSpace.right < horizontalSpaceLeft) placement = 'bottom-right'
            else placement = 'bottom'
          } else if (availableSpace.left < horizontalSpaceLeft) {
            if (availableSpace.left < horizontalCenterOffset) placement = 'top-left'
            else placement = 'top'
          }
          break
        case 'bottom-left':
          if (availableSpace.bottom < tooltipSize.height + distanceFromChild) {
            if (availableSpace.right < horizontalSpaceLeft) placement = 'top-right'
            else if (availableSpace.left < horizontalSpaceLeft) placement = 'top-left'
            else placement = 'top'
          } else if (availableSpace.right < horizontalSpaceLeft) {
            if (availableSpace.right < horizontalCenterOffset) placement = 'bottom-right'
            else placement = 'bottom'
          }
          break
        case 'bottom-right':
          if (availableSpace.bottom < tooltipSize.height + distanceFromChild) {
            if (availableSpace.left < horizontalSpaceLeft) placement = 'top-left'
            else if (availableSpace.right < horizontalSpaceLeft) placement = 'top-right'
            else placement = 'top'
          } else if (availableSpace.left < horizontalSpaceLeft) {
            if (availableSpace.left < horizontalCenterOffset) placement = 'bottom-left'
            else placement = 'bottom'
          }
          break
      }
    }
    return placement
  }

  return (
    <div
      className={classNames('Tooltip_wrapper')}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      ref={targetRef}
    >
      {children}
      {active && (
        <div
          className={classNames('Tooltip', className, {
            [`Tooltip__${determinePlacement()}`]: placement,
            [`Tooltip__${theme}`]: theme,
          })}
          style={{ ...determineOffset(), ...style }}
        >
          <p className={classNames('Tooltip_content')}>{content}</p>
        </div>
      )}
    </div>
  )
}

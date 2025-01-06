import { useState, useRef, useEffect, ReactElement } from 'react';
import './Popover.scss';
import classNames from 'classnames';
import Icon from 'ui-kit/Icon';
import { renderToString } from 'react-dom/server';
type TPopoverProps = {
  className?: string;
  placement?: 'top' | 'bottom' | 'left' | 'right'
  | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
  theme?: 'light' | 'dark' | 'primary' | 'destructive' | 'secondary';
  size?: 'small' | 'medium';
  activeMode?: 'hover' | 'click' | 'load';
  distanceFromChild?: number;
  header: React.ReactNode;
  content: React.ReactNode;
  children: React.ReactNode;
};

type ISpace = {
  top: number,
  bottom: number,
  left: number,
  right: number,
}

type IPopoverSize = {
  width: number,
  height: number,
}

export const Popover = ({
  className,
  placement = 'bottom',
  theme = 'dark',
  size = 'medium',
  activeMode = 'click',
  distanceFromChild = 12,
  header,
  content,
  children
}: TPopoverProps) => {
  const [active, setActive] = useState(activeMode === 'load' ? true : false);
  const targetRef = useRef<HTMLDivElement>(null);

  const showTip = () => {
    setActive(!active)
  };

  const hideTip = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.stopPropagation();
    setActive(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        targetRef.current &&
        !targetRef.current.contains(event.target as Node) &&
        active &&
        event.target !== document
      ) {
        setActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [active]);


  /**
   * * NOTE: When there is a changes related to size of the popover, update this function to adjust dummy popover
   */
  const measurePopoverSize = (): IPopoverSize => {
    const dummyPopover = document.createElement('div');
    dummyPopover.classList.add('Popover', `Popover__${placement}`, `Popover__${size}`);

    // Create dummy popover container
    const dummyContainer = document.createElement('div');
    dummyContainer.classList.add('Popover_text-container');

    // Create dummy header container
    const dummyHeaderContainer = document.createElement('div');
    dummyHeaderContainer.classList.add('Popover_header-container');

    // Create dummy header
    const dummyHeader = document.createElement('div');
    dummyHeader.innerHTML = renderToString(header as ReactElement);
    dummyHeader.classList.add('Popover_header', `Popover_header__${size}`);

    // Create dummy close button
    const dummyCloseButton = document.createElement('div');
    dummyCloseButton.classList.add('Popover_close');
    dummyCloseButton.innerHTML = `<Icon className={classNames('Popover_close', {
      [Popover_close__${theme}]: theme,
    })} type={'Cross'} size='superbig' />`

    // Create dummy content
    const dummyContent = document.createElement('div');
    dummyContent.innerHTML = renderToString(content as ReactElement);
    dummyContent.classList.add('Popover_content', `Popover_content__${size}`);

    dummyHeaderContainer.appendChild(dummyHeader);
    dummyHeaderContainer.appendChild(dummyCloseButton);
    dummyContainer.appendChild(dummyHeaderContainer);
    dummyContainer.appendChild(dummyContent);

    dummyPopover.appendChild(dummyContainer);

    document.body.appendChild(dummyPopover);

    const popoverRect = dummyPopover.getBoundingClientRect();
    const popoverSize = { width: popoverRect.width, height: popoverRect.height };
    document.body.removeChild(dummyPopover);
    return popoverSize;
  };

  /**
   * Calculate popover distance from children node
   */
  const determineOffset = () => {
    if (targetRef.current) {
      const targetRect = targetRef.current.getBoundingClientRect();
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
      const targetRect = targetRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const navbarHeight = 64;
      const sidebarWidth = 102;

      const availableSpace = {
        top: targetRect.top - navbarHeight,
        bottom: windowHeight - targetRect.bottom,
        left: targetRect.left - sidebarWidth,
        right: windowWidth - targetRect.right,
      };

      const hasEnoughSpace = (space: ISpace, popoverSize: IPopoverSize) => {
        return space.top > popoverSize.height &&
          space.bottom > popoverSize.height &&
          space.left > popoverSize.width &&
          space.right > popoverSize.width;
      };

      const popoverSize = measurePopoverSize();

      if (hasEnoughSpace(availableSpace, popoverSize)) {
        return placement;
      }

      // Difference between both of half popover and trigger size
      const horizontalCenterOffset = (popoverSize.width / 2) - (targetRect.width / 2);
      const verticalCenterOffset = (popoverSize.height / 2) - (targetRect.height / 2);

      // Difference between both of popover and trigger size
      const horizontalSpaceLeft = popoverSize.width - targetRect.width;
      const verticalSpaceLeft = popoverSize.height - targetRect.height;

      /** 
       * Function to check whether popover fit to the available space
       * If placement is top, then check top available space, if placement is left, then check left available space, and so on.
       * Example: If the placement is top, top-left, or top-right, 
       * but the available space at the top is insufficient, then the popover must not be placed in the top section.
       */
      const spaceChecking = (position: 'top' | 'bottom' | 'left' | 'right', isSmaller: boolean) => {
        const checker =
          position === 'top' || position === 'bottom' ? popoverSize.height + distanceFromChild :
            position === 'left' || position === 'right' ? popoverSize.width + distanceFromChild : false;
        if (!checker) return false;
        return isSmaller ? availableSpace[position] < checker : availableSpace[position] > checker;
      }

      /**
       * Function to check whether popover alignment fit to the assigned space.
       * Usually used if the placement is (or if you want to change the placement to)
       * 'top', 'bottom', 'left', 'right'
       * Example: if assigned placement is left, it can be change to left-top or left-bottom, even other placement with further checking.
       */
      const offsetChecking = (position: 'top' | 'bottom' | 'left' | 'right', isSmaller: boolean) => {
        const checker =
          position === 'top' || position === 'bottom' ? verticalCenterOffset :
            position === 'left' || position === 'right' ? horizontalCenterOffset : false
        if (!checker) return false;
        return isSmaller ? availableSpace[position] < checker : availableSpace[position] > checker;
      }

      /**
       * Similar to the offsetChecking function, the difference lies in the placement assigned (or that you want to change the placement to):
       * 'top-left', 'top-right', 'bottom-left', 'bottom-right',
       * 'left-top', 'left-bottom', 'right-top', 'right-bottom'
       */
      const remainingChecking = (position: 'top' | 'bottom' | 'left' | 'right') => {
        const checker =
          position === 'top' || position === 'bottom' ? verticalSpaceLeft :
            position === 'left' || position === 'right' ? horizontalSpaceLeft : false;
        if (!checker) return false
        return availableSpace[position] < checker
      }

      /**
       * * NOTE: always start checking with spaceChecking function
       */
      switch (placement) {
        case 'top':
          if (spaceChecking('top', true)) {
            if (availableSpace.top < 0) {
              if (offsetChecking('left', true)) placement = 'bottom-left'
              else if (offsetChecking('right', true)) placement = 'bottom-right'
              else placement = 'bottom'
            } else if (spaceChecking('right', false)) {
              if (offsetChecking('top', true)) placement = 'right-top'
              else placement = 'right'
            } else if (spaceChecking('left', false)) {
              if (offsetChecking('top', true)) placement = 'left-top'
              else placement = 'left'
            } else if (offsetChecking('left', true)) placement = 'bottom-left'
            else if (offsetChecking('right', true)) placement = 'bottom-right'
            else placement = 'bottom'
          } else if (offsetChecking('left', true)) placement = 'top-left'
          else if (offsetChecking('right', true)) placement = 'top-right'
          break;
        case 'bottom':
          if (spaceChecking('bottom', true)) {
            if (availableSpace.bottom < 0) {
              if (offsetChecking('left', true)) placement = 'top-left'
              else if (offsetChecking('right', true)) placement = 'top-right'
              else placement = 'top'
            } else if (spaceChecking('right', false)) {
              if (offsetChecking('bottom', true)) placement = 'right-bottom'
              else placement = 'right'
            } else if (spaceChecking('left', false)) {
              if (offsetChecking('bottom', true)) placement = 'left-bottom'
              else placement = 'left'
            } else if (offsetChecking('left', true)) placement = 'top-left'
            else if (offsetChecking('right', true)) placement = 'top-right'
            else placement = 'top'
          } else if (offsetChecking('left', true)) placement = 'bottom-left'
          else if (offsetChecking('right', true)) placement = 'bottom-right'
          break;
        case 'left':
          if (spaceChecking('left', true)) {
            if (spaceChecking('top', false)) placement = 'top-left'
            else if (spaceChecking('bottom', false)) placement = 'bottom-left'
            else placement = 'right'
          } else {
            if (availableSpace.top < 0) {
              if (offsetChecking('right', false)) placement = 'bottom'
              else placement = 'bottom-right'
            } else if (availableSpace.bottom < 0) {
              if (offsetChecking('right', false)) placement = 'top'
              else placement = 'top-right'
            } else if (remainingChecking('top')) placement = 'left-top'
            else if (remainingChecking('bottom')) placement = 'left-bottom'
          }
          break;
        case 'right':
          if (spaceChecking('right', true)) {
            if (spaceChecking('top', true)) placement = 'bottom-right'
            else if (spaceChecking('bottom', true)) placement = 'top-right'
            else placement = 'left'
          } else {
            if (availableSpace.top < 0) {
              if (offsetChecking('left', false)) placement = 'bottom'
              else placement = 'bottom-left'
            } else if (availableSpace.bottom < 0) {
              if (offsetChecking('left', false)) placement = 'top'
              else placement = 'top-left'
            } else if (remainingChecking('top')) placement = 'right-top'
            else if (remainingChecking('bottom')) placement = 'right-bottom'
          }
          break;
        case 'top-left':
          if (spaceChecking('top', true)) {
            if (availableSpace.top < 0) {
              if (remainingChecking('right')) placement = 'bottom-right'
              else placement = 'bottom-left'
            }
            else if (spaceChecking('right', false)) {
              if (offsetChecking('top', false) && offsetChecking('bottom', false))
                placement = 'right'
              else placement = 'right-top'
            } else if (spaceChecking('left', false)) {
              if (offsetChecking('top', false) && offsetChecking('bottom', false))
                placement = 'left'
              else placement = 'left-top'
            } else placement = 'bottom';
          } else {
            if (remainingChecking('right')) {
              if (offsetChecking('left', false) && offsetChecking('right', false))
                placement = 'top'
              else placement = 'top-right'
            }
          }
          break;
        case 'top-right':
          if (spaceChecking('top', true)) {
            if (availableSpace.top < 0) {
              if (remainingChecking('left')) placement = 'bottom-left'
              else placement = 'bottom-right'
            }
            else if (spaceChecking('left', false)) {
              if (offsetChecking('top', false) && offsetChecking('bottom', false))
                placement = 'left'
              else placement = 'left-top'
            } else if (spaceChecking('right', false)) {
              if (offsetChecking('top', false) && offsetChecking('bottom', false))
                placement = 'right'
              else placement = 'right-top'
            } else placement = 'bottom';
          } else {
            if (remainingChecking('left')) {
              if (offsetChecking('right', false) && offsetChecking('left', false))
                placement = 'top'
              else placement = 'top-left'
            }
          }
          break;
        case 'bottom-left':
          if (spaceChecking('bottom', true)) {
            if (availableSpace.bottom < 0) {
              if (remainingChecking('right')) placement = 'top-right'
              else placement = 'top-left'
            }
            else if (spaceChecking('right', false)) {
              if (offsetChecking('bottom', false) && offsetChecking('top', false))
                placement = 'right'
              else placement = 'right-bottom'
            } else if (spaceChecking('left', false)) {
              if (offsetChecking('bottom', false) && offsetChecking('top', false))
                placement = 'left'
              else placement = 'left-bottom'
            } else placement = 'top';
          } else {
            if (remainingChecking('right')) {
              if (offsetChecking('left', false) && offsetChecking('right', false))
                placement = 'bottom'
              else placement = 'bottom-right'
            }
          }
          break;
        case 'bottom-right':
          if (spaceChecking('bottom', true)) {
            if (availableSpace.bottom < 0) {
              if (remainingChecking('left')) placement = 'top-left'
              else placement = 'top-right'
            }
            else if (spaceChecking('left', false)) {
              if (offsetChecking('bottom', false) && offsetChecking('top', false))
                placement = 'left'
              else placement = 'left-bottom'
            } else if (spaceChecking('right', false)) {
              if (offsetChecking('bottom', false) && offsetChecking('top', false))
                placement = 'right'
              else placement = 'right-bottom'
            } else placement = 'top';
          } else {
            if (remainingChecking('left')) {
              if (offsetChecking('right', false) && offsetChecking('left', false))
                placement = 'bottom'
              else placement = 'bottom-left'
            }
          }
          break;
        case 'left-top':
          if (spaceChecking('left', true)) {
            if (spaceChecking('top', false)) placement = 'top-left'
            else if (spaceChecking('bottom', false)) placement = 'bottom-left'
            else placement = 'right'
          } else {
            if (availableSpace.top < 0) {
              if (offsetChecking('right', false)) placement = 'bottom';
              else placement = 'bottom-right'
            } else if (availableSpace.bottom < 0) {
              if (offsetChecking('right', false)) placement = 'top';
              else placement = 'top-right'
            } else if (remainingChecking('bottom')) placement = 'left-bottom'
          }
          break
        case 'left-bottom':
          if (spaceChecking('left', true)) {
            if (spaceChecking('bottom', false)) placement = 'bottom-left'
            else if (spaceChecking('top', false)) placement = 'top-left'
            else placement = 'right'
          } else {
            if (availableSpace.bottom < 0) {
              if (offsetChecking('right', false)) placement = 'top';
              else placement = 'top-right'
            } else if (availableSpace.top < 0) {
              if (offsetChecking('right', false)) placement = 'bottom';
              else placement = 'bottom-right'
            } else if (remainingChecking('top')) placement = 'left-top'
          }
          break
        case 'right-top':
          if (spaceChecking('right', true)) {
            if (spaceChecking('top', false)) placement = 'top-right'
            else if (spaceChecking('bottom', false)) placement = 'bottom-right'
            else placement = 'left'
          } else {
            if (availableSpace.top < 0) {
              if (offsetChecking('left', false)) placement = 'bottom';
              else placement = 'bottom-left'
            } else if (availableSpace.bottom < 0) {
              if (offsetChecking('left', false)) placement = 'top';
              else placement = 'top-left'
            } else if (remainingChecking('bottom')) placement = 'right-bottom'
          }
          break
        case 'right-bottom':
          if (spaceChecking('right', true)) {
            if (spaceChecking('bottom', false)) placement = 'bottom-right'
            else if (spaceChecking('top', false)) placement = 'top-right'
            else placement = 'left'
          } else {
            if (availableSpace.bottom < 0) {
              if (offsetChecking('left', false)) placement = 'top';
              else placement = 'top-left'
            } else if (availableSpace.top < 0) {
              if (offsetChecking('left', false)) placement = 'bottom';
              else placement = 'bottom-left'
            } else if (remainingChecking('top')) placement = 'right-top'
          }
          break
      }
    }
    return placement;
  };

  return (
    <div
      className={classNames('Popover_wrapper')}
      onMouseOver={activeMode === 'hover' ? showTip : undefined}
      onMouseLeave={activeMode === 'hover' ? hideTip : undefined}
      onMouseDown={activeMode === 'click' ? showTip : activeMode === 'load' ? hideTip : undefined}
      ref={targetRef}
    >
      {children}
      {active && (
        <div
          className={classNames('Popover', className, {
            [`Popover__${determinePlacement()}`]: placement,
            [`Popover__${theme}`]: theme,
            [`Popover__${size}`]: size
          })}
          style={determineOffset()}
        >
          <div className={classNames('Popover_text-container')}>
            <div className='Popover_header-container'>
              <div className={classNames('Popover_header', {
                [`Popover_header__${size}`]: size
              })}>{header}</div>
              <Icon className={classNames('Popover_close', {
                [`Popover_close__${theme}`]: theme,
              })} onMouseDown={(e) => hideTip(e)} type={'Cross'} size='superbig' />
            </div>
            <div className={classNames('Popover_content', {
              [`Popover_content__${size}`]: size
            })}>{content}</div>
          </div>
        </div>
      )}
    </div>
  );
};

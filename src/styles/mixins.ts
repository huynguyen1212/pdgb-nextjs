import { css } from 'styled-components';

export const mixinsFlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const mixinsFlexSpaceBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const mixinAbsolute = css`
  position: absolute;
  content: '';
  top: 0;
  left: 0;
`;

export const mixinAbsoluteCenter = css`
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const mixinsAbsolutFill = css`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
/**
 * Hidden scroll bar
 */

export const mixinsFlexColumnCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const mixinsScrollBarNone = css`
  /* width */
  ::-webkit-scrollbar {
    width: 0;
  }
`;

/**
 * Default scroll bar
 *
 * Can custom default like:
 *```
 *   styled(mixinsScrollBar).css`
 *    // some code css here
 * `
 * ```
 *
 */
export const mixinsScrollBarHeight = css`
  /* width */
  ::-webkit-scrollbar {
    height: 3px;
    width: 3px;
    border-radius: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
export const mixinsScrollBar = css`
  /* width */
  ::-webkit-scrollbar {
    width: 3px;
    border-radius: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

// text-overflow
export const mixinsTextOverflow = (line: number) => `
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
`;

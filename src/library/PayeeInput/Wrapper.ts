// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const Wrapper = styled.div<{ activeInput?: boolean }>`
  > .inner {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    border-bottom: 1.5px solid
      ${(props) =>
        props.activeInput
          ? 'var(--network-color-primary)'
          : 'var(--border-primary-color)'};
    padding: 0rem 0 0.4rem 0;
    transition: border var(--transition-duration);

    > h4 {
      color: var(--text-color-secondary);
      margin-bottom: 0.5rem;
    }

    > .account {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      margin-top: 0.2rem;

      > .emptyIcon {
        background: var(--background-list-item);
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
      }

      > .input {
        color: var(--text-color-secondary);
        display: flex;
        flex-flow: column nowrap;
        margin-left: 0.75rem;
        min-width: 150px;
        max-width: 100%;

        > input {
          color: var(--text-color-secondary);
          font-size: 1.25rem;
          z-index: 1;
          font-variation-settings: 'wght' 550;
          opacity: 1;

          &:disabled {
            opacity: 0.75;
          }
        }

        .hidden {
          font-size: 1.25rem;
          opacity: 0;
          position: absolute;
          top: -999px;
          font-variation-settings: 'wght' 550;
        }
      }
    }
  }

  .label {
    position: relative;
    max-width: 100%;
    overflow: hidden;
    height: 2rem;
    margin-top: 0.65rem;
    font-size: 0.85rem;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;

    h5 {
      color: var(--text-color-secondary);
      position: absolute;
      top: 0;
      left: 0;
      max-width: 100%;
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      > svg {
        margin-right: 0.4rem;
      }
    }
  }
`;

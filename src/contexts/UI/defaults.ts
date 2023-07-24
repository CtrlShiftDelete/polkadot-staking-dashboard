// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { UIContextInterface } from './types';

export const defaultUIContext: UIContextInterface = {
  // eslint-disable-next-line
  setSideMenu: (v) => {},
  // eslint-disable-next-line
  setUserSideMenuMinimised: (v) => {},
  // eslint-disable-next-line
  setContainerRefs: (v) => {},
  sideMenuOpen: false,
  userSideMenuMinimised: false,
  sideMenuMinimised: false,
  containerRefs: {},
  isSyncing: false,
  isNetworkSyncing: false,
  isPoolSyncing: false,
};

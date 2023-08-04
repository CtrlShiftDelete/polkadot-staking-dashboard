// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ModalContainer, ModalCard, ModalHeight } from '@polkadotcloud/core-ui';
import { useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallbackModal } from 'library/ErrorBoundary';
import { useModal } from 'contexts/Modal';
import { useHelp } from 'contexts/Help';
import { useCanvas } from 'contexts/Canvas';
import { AccountPoolRoles } from './AccountPoolRoles';
import { Accounts } from './Accounts';
import { Bio } from './Bio';
import { Bond } from './Bond';
import { ChangeNominations } from './ChangeNominations';
import { ChangePoolRoles } from './ChangePoolRoles';
import { ChooseLanguage } from './ChooseLanguage';
import { ClaimReward } from './ClaimReward';
import { Connect } from './Connect';
import { GoToFeedback } from './GoToFeedback';
import { ImportLedger } from './ImportLedger';
import { ImportVault } from './ImportVault';
import { JoinPool } from './JoinPool';
import { ManageFastUnstake } from './ManageFastUnstake';
import { ManagePool } from './ManagePool';
import { Networks } from './Networks';
import { Nominate } from './Nominate';
import { NominateFromFavorites } from './NominateFromFavorites';
import { NominatePool } from './NominatePool';
import { PoolNominations } from './PoolNominations';
import { SelectFavorites } from './SelectFavorites';
import { Settings } from './Settings';
import { Unbond } from './Unbond';
import { UnbondPoolMember } from './UnbondPoolMember';
import { UnlockChunks } from './UnlockChunks';
import { Unstake } from './Unstake';
import { UpdateController } from './UpdateController';
import { UpdatePayee } from './UpdatePayee';
import { UpdateReserve } from './UpdateReserve';
import { ValidatorMetrics } from './ValidatorMetrics';
import { WithdrawPoolMember } from './WithdrawPoolMember';
import { OtherBalances } from './OtherBalances';

export const Modal = () => {
  const {
    size,
    modal,
    status,
    height,
    resize,
    config,
    setStatus,
    modalMaxHeight,
    setModalHeight,
  } = useModal();
  const controls = useAnimation();
  const maxHeight = modalMaxHeight();
  const { status: helpStatus } = useHelp();
  const { status: canvasStatus } = useCanvas();
  const modalRef = useRef<HTMLDivElement>(null);

  const onFadeIn = async () => {
    await controls.start('visible');
  };
  const onFadeOut = async () => {
    await controls.start('hidden');
    setStatus(0);
  };

  const windowResize = () => {
    if (!config?.disableWindowResize) {
      window.addEventListener('resize', handleResize);
    }
  };

  const handleResize = () => {
    if (status !== 1 || config?.disableWindowResize) return;

    let h = modalRef.current?.clientHeight ?? 0;
    h = h > maxHeight ? maxHeight : h;
    setModalHeight(h);
  };

  useEffect(() => {
    // modal has been opened - fade in.
    if (status === 1) {
      onFadeIn();
    }
    // modal closure triggered - fade out.
    if (status === 2) {
      onFadeOut();
    }
  }, [status]);

  // resize modal on status or resize change
  useEffect(() => {
    handleResize();
  }, [resize]);

  useEffect(() => {
    windowResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  if (status === 0) {
    return <></>;
  }

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const transition = {
    duration: 0.15,
  };
  const initial = {
    opacity: 0,
  };

  return (
    <>
      {status !== 3 ? (
        <ModalContainer
          initial={initial}
          animate={controls}
          transition={transition}
          variants={variants}
        >
          <div>
            <ModalHeight
              size={size}
              style={{
                height,
                overflow:
                  height >= maxHeight && !config?.disableScroll
                    ? 'scroll'
                    : 'hidden',
              }}
            >
              <ModalCard
                ref={modalRef}
                className={
                  helpStatus === 1 || canvasStatus === 1 ? 'dimmed' : undefined
                }
              >
                <ErrorBoundary FallbackComponent={ErrorFallbackModal}>
                  {modal === 'AccountPoolRoles' && <AccountPoolRoles />}
                  {modal === 'Bio' && <Bio />}
                  {modal === 'Bond' && <Bond />}
                  {modal === 'ChangeNominations' && <ChangeNominations />}
                  {modal === 'ChangePoolRoles' && <ChangePoolRoles />}
                  {modal === 'ChooseLanguage' && <ChooseLanguage />}
                  {modal === 'ClaimReward' && <ClaimReward />}
                  {modal === 'Connect' && <Connect />}
                  {modal === 'Accounts' && <Accounts />}
                  {modal === 'GoToFeedback' && <GoToFeedback />}
                  {modal === 'JoinPool' && <JoinPool />}
                  {modal === 'ImportLedger' && <ImportLedger />}
                  {modal === 'ImportVault' && <ImportVault />}
                  {modal === 'ManagePool' && <ManagePool />}
                  {modal === 'ManageFastUnstake' && <ManageFastUnstake />}
                  {modal === 'Networks' && <Networks />}
                  {modal === 'Nominate' && <Nominate />}
                  {modal === 'NominateFromFavorites' && (
                    <NominateFromFavorites />
                  )}
                  {modal === 'NominatePool' && <NominatePool />}
                  {modal === 'OtherBalances' && <OtherBalances />}
                  {modal === 'PoolNominations' && <PoolNominations />}
                  {modal === 'SelectFavorites' && <SelectFavorites />}
                  {modal === 'Settings' && <Settings />}
                  {modal === 'ValidatorMetrics' && <ValidatorMetrics />}
                  {modal === 'UnbondPoolMember' && <UnbondPoolMember />}
                  {modal === 'UnlockChunks' && <UnlockChunks />}
                  {modal === 'Unstake' && <Unstake />}
                  {modal === 'UpdateController' && <UpdateController />}
                  {modal === 'Unbond' && <Unbond />}
                  {modal === 'UpdatePayee' && <UpdatePayee />}
                  {modal === 'UpdateReserve' && <UpdateReserve />}
                  {modal === 'WithdrawPoolMember' && <WithdrawPoolMember />}
                </ErrorBoundary>
              </ModalCard>
            </ModalHeight>
            <button
              type="button"
              className="close"
              onClick={() => {
                setStatus(2);
              }}
            >
              &nbsp;
            </button>
          </div>
        </ModalContainer>
      ) : null}
    </>
  );
};

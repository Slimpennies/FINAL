import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";

import { ethers } from "ethers";

import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";


const stakingContractAddress = "0x9c5B82d68C54fff9c615022B51dE17bc3Ee03aD2";

export default function Home() {
  const address = useAddress();
  const [amountToStake, setAmountToStake] = useState(0);

  // Initialize all the contracts
  const { contract: staking, isLoading: isStakingLoading } = useContract(
    stakingContractAddress,
    "custom"
  );

  // Get contract data from staking contract
  const { data: rewardTokenAddress } = useContractRead(staking, "rewardToken");
  const { data: stakingTokenAddress } = useContractRead(
    staking,
    "stakingToken"
  );

  // Initialize token contracts
  const { contract: stakingToken, isLoading: isStakingTokenLoading } =
    useContract(stakingTokenAddress, "token");
  const { contract: rewardToken, isLoading: isRewardTokenLoading } =
    useContract(rewardTokenAddress, "token");

  // Token balances
  const { data: stakingTokenBalance, refetch: refetchStakingTokenBalance } =
    useTokenBalance(stakingToken, address);
  const { data: rewardTokenBalance, refetch: refetchRewardTokenBalance } =
    useTokenBalance(rewardToken, address);

  // Get staking data
  const {
    data: stakeInfo,
    refetch: refetchStakingInfo,
    isLoading: isStakeInfoLoading,
  } = useContractRead(staking, "getStakeInfo", [address]);

  useEffect(() => {
    setInterval(() => {
      refetchData();
    }, 10000);
  }, []);

  const refetchData = () => {
    refetchRewardTokenBalance();
    refetchStakingTokenBalance();
    refetchStakingInfo();
  };

  const NewAmountToStake = amountToStake ? ethers.utils.parseUnits(amountToStake.toString(), 'gwei') : 0;


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Giraffe Staking</h1>

                <p className={styles.description}>
          Stake Giraffe Token to earn Baby Giraffe Token. <br />
          Stake tokens: Enter amount, approve, then stake. <br />
          Unstake tokens: Enter amount then unstake. <br />
          Claim Rewards: Click Claim Rewards. <br />
        </p>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div className={styles.stakeContainer}>
          <input
            className={styles.textbox}
            type="number"
            value={amountToStake}
            onChange={(e) => setAmountToStake(e.target.value)}
          />

          <Web3Button
            className={styles.button}
            contractAddress={stakingTokenAddress}
            action={(contract) => contract.call("approve", [stakingContractAddress, NewAmountToStake], {gasLimit: 200000})}
            onSuccess={(result) => window.alert("Giraffe Approved to Stake")}
          >
            Approve!
          </Web3Button>

          <Web3Button
            className={styles.button}
            contractAddress={stakingContractAddress}
            action={(contract) => contract.call("withdraw", [NewAmountToStake])}
            onSuccess={(result) => window.alert("Giraffe Staked")}
          >
            Stake!
          </Web3Button>

          <Web3Button
            className={styles.button}
            contractAddress={stakingContractAddress}
            action={(contract) => contract.call("withdraw", [NewAmountToStake])}
            onSuccess={(result) => window.alert("Giraffe Unstaked")}
          >
            Unstake!
          </Web3Button>

          <Web3Button
            className={styles.button}
            contractAddress={stakingContractAddress}
            action={(contract) => contract.call("claimRewards")}
            onSuccess={(result) => window.alert("Baby Giraffe Claimed")}
          >
            Claim rewards!
          </Web3Button>
        </div>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Giraffe Balance (Your Wallet)</h2>
            <p>{stakingTokenBalance?.displayValue}</p>
          </a>

          <a className={styles.card}>
            <h2>Baby Giraffe Balance (Your Wallet)</h2>
            <p>{rewardTokenBalance?.displayValue}</p>
          </a>

          <a className={styles.card}>
            <h2>Giraffe Tokens Staked</h2>
            <p>
              {stakeInfo && ethers.utils.formatUnits(stakeInfo[0].toString(), "gwei")}
            </p>
          </a>

          <a className={styles.card}>
            <h2> Claimable Baby Giraffe</h2>
            <p>
              {stakeInfo && ethers.utils.formatEther(stakeInfo[1].toString())}
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
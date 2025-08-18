// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title IERC20
 * @dev Interface for the ERC20 standard.
 */
interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @title TokenStaking
 * @dev A contract for staking a specific ERC20 token and earning rewards in the same token.
 */
contract TokenStaking {
    struct Stake {
        uint256 amount;
        uint256 startTime;
        uint256 lastClaimTime;
        uint256 totalReward;
        uint256 pendingReward;
    }

    mapping(address => Stake) public stakes;
    mapping(address => bool) public hasStaked;
    
    uint256 public totalUniqueStakers;
    uint256 public totalStaking;
    
    IERC20 public stakingToken;
    address public owner;

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event RewardClaimed(address indexed user, uint256 amount);

    // Default 14700 (14.7% daily rate scaled)
    uint256 public rewardRate = 14700; 
    uint256 public constant SCALE = 1e5;

    constructor(address _stakingTokenAddress) {
        owner = msg.sender;
        stakingToken = IERC20(_stakingTokenAddress);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function setRewardRate(uint256 newRewardRate) external onlyOwner {
        require(newRewardRate >= 0, "Reward rate must be non-negative");
        rewardRate = newRewardRate;
    }

    function stake(uint256 amount) external {
        require(amount > 0, "Amount should be greater than 0");

        Stake storage userStake = stakes[msg.sender];

        if (!hasStaked[msg.sender]) {
            hasStaked[msg.sender] = true;
            totalUniqueStakers++;
        }

        if (userStake.amount > 0) {
            uint256 reward = calculateReward(msg.sender);
            userStake.pendingReward += reward;
        }

        userStake.amount += amount;
        userStake.lastClaimTime = block.timestamp;

        if (userStake.startTime == 0) {
            userStake.startTime = block.timestamp;
        }

        totalStaking += amount;
        
        // Pull tokens from user to this contract
        require(stakingToken.transferFrom(msg.sender, address(this), amount), "Token transfer failed");

        emit Staked(msg.sender, amount);
    }

    function unstake() external {
        Stake storage userStake = stakes[msg.sender];
        require(userStake.amount > 0, "No active stake found");

        uint256 reward = calculateReward(msg.sender);
        userStake.pendingReward += reward;

        totalStaking -= userStake.amount;

        uint256 stakedAmount = userStake.amount;
        userStake.amount = 0;
        userStake.lastClaimTime = block.timestamp;
        
        require(stakingToken.transfer(msg.sender, stakedAmount), "Token transfer failed");

        emit Unstaked(msg.sender, stakedAmount);
    }

    function unstakePartial(uint256 amount) external {
        require(amount > 0, "Amount should be greater than 0");
        Stake storage userStake = stakes[msg.sender];
        require(userStake.amount >= amount, "Insufficient staked amount");

        uint256 reward = calculateReward(msg.sender);
        userStake.pendingReward += reward;

        userStake.amount -= amount;
        userStake.lastClaimTime = block.timestamp;

        totalStaking -= amount;

        require(stakingToken.transfer(msg.sender, amount), "Token transfer failed");

        emit Unstaked(msg.sender, amount);
    }

    function claimReward() external {
        Stake storage userStake = stakes[msg.sender];

        uint256 reward = calculateReward(msg.sender);
        uint256 totalRewardToClaim = userStake.pendingReward + reward;
        require(totalRewardToClaim > 0, "No reward available");

        userStake.pendingReward = 0;
        userStake.lastClaimTime = block.timestamp;
        userStake.totalReward += totalRewardToClaim;

        require(stakingToken.transfer(msg.sender, totalRewardToClaim), "Token transfer failed");

        emit RewardClaimed(msg.sender, totalRewardToClaim);
    }

    function calculateReward(address user) public view returns (uint256) {
        Stake storage userStake = stakes[user];

        if (userStake.amount == 0) {
            return 0;
        }

        uint256 stakingTime = block.timestamp - userStake.lastClaimTime;
        uint256 reward = (userStake.amount * stakingTime * rewardRate) / (100 * (1 days) * SCALE);

        return reward;
    }

    function getStakedAmount(address user) external view returns (uint256) {
        return stakes[user].amount;
    }

    function getTotalReward(address user) external view returns (uint256) {
        return stakes[user].totalReward;
    }

    function getPendingReward(address user) external view returns (uint256) {
        Stake storage userStake = stakes[user];
        uint256 reward = calculateReward(user);
        return userStake.pendingReward + reward;
    }

    function getTotalStaking() external view returns (uint256) {
        return totalStaking;
    }
    
    function getTotalUniqueStakers() external view returns (uint256) {
        return totalUniqueStakers;
    }
}

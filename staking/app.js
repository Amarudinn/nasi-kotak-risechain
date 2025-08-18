const addresses = {
    nativeStaking: '0xe8Ea0eC5dE1F93863f8Ea648aDf99Ea039C5ab5d',
    tokenStaking: '0x1e3aFA65BD1053a549AB3967ab6b72Bdd708cd32',
    nexiToken: '0xD4c305D3a92Ea196f0fA6F0905C6A6bc5fF569A8' //NASI
};

const nativeStakingAbi = [{ "inputs": [], "name": "claimReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newRewardRate", "type": "uint256" }], "name": "setRewardRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stake", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "RewardClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Staked", "type": "event" }, { "inputs": [], "name": "unstake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Unstaked", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "unstakePartial", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "calculateReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "getPendingReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "getStakedAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "getTotalReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getTotalStaking", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getTotalUniqueStakers", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "hasStaked", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rewardRate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SCALE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "stakes", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "lastClaimTime", "type": "uint256" }, { "internalType": "uint256", "name": "totalReward", "type": "uint256" }, { "internalType": "uint256", "name": "pendingReward", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalStaking", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalUniqueStakers", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }];
const tokenStakingAbi = [{ "inputs": [{ "internalType": "address", "name": "_stakingTokenAddress", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "RewardClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Staked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Unstaked", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "calculateReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "claimReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "getPendingReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "getStakedAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "getTotalReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getTotalStaking", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getTotalUniqueStakers", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "hasStaked", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rewardRate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SCALE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newRewardRate", "type": "uint256" }], "name": "setRewardRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "stake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "stakes", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "lastClaimTime", "type": "uint256" }, { "internalType": "uint256", "name": "totalReward", "type": "uint256" }, { "internalType": "uint256", "name": "pendingReward", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "stakingToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalStaking", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalUniqueStakers", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "unstake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "unstakePartial", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
const erc20Abi = ["function approve(address spender, uint256 amount) external returns (bool)", "function allowance(address owner, address spender) external view returns (uint256)", "function balanceOf(address account) external view returns (uint256)"];

// --- Network Configuration ---
const supportedNetworks = {
    '0xaa39db': {
        chainId: '0xaa39db',
        chainName: 'RISE Testnet',
        rpcUrls: ['https://testnet.riselabs.xyz'],
        nativeCurrency: { name: 'RISE Testnet', symbol: 'ETH', decimals: 18 },
        blockExplorerUrls: ['https://explorer.testnet.riselabs.xyz'],
        logoURI: '/images/rise.jpg'
    }
};

// --- Global State ---
let provider, signer, userAddress, nativeStakingContract, tokenStakingContract, nexiTokenContract;
let currentNetwork = supportedNetworks['0xaa39db'];
let currentStakingType = 'native';
let currentAction = null;
let rewardInterval;

// --- UI Elements ---
const connectButton = document.getElementById('connectButton');
const alertContainer = document.getElementById('alertContainer');
const networkButton = document.getElementById('networkButton');
const networkModal = document.getElementById('networkModal');
const closeNetworkModalButton = document.getElementById('closeNetworkModalButton');
const networkList = document.getElementById('networkList');

// Wallet Details Modal UI Elements
const walletDetailsModal = document.getElementById('walletDetailsModal');
const closeWalletDetailsModalButton = document.getElementById('closeWalletDetailsModalButton');
const walletAddress = document.getElementById('walletAddress');
const copyAddressButton = document.getElementById('copyAddressButton');
const disconnectButton = document.getElementById('disconnectButton');
const walletBalance = document.getElementById('walletBalance');
const recentTransactions = document.getElementById('recentTransactions');
const viewAllTxButton = document.getElementById('viewAllTxButton');

// Staking UI Elements
const stakingTitle = document.getElementById('stakingTitle');
const tvlNEXEl = document.getElementById('tvlNEX');
const tvlNEXIEl = document.getElementById('tvlNEXI');
const uniqueStakersEl = document.getElementById('uniqueStakers');
const userBalanceEl = document.getElementById('userBalance');
const apyEl = document.getElementById('apy');
const userStakedEl = document.getElementById('userStaked');
const userRewardsEl = document.getElementById('userRewards');
const actionButtonsContainer = document.getElementById('actionButtons');
const actionBox = document.getElementById('actionBox');
const actionBoxTitle = document.getElementById('actionBoxTitle');
const actionAmountInput = document.getElementById('actionAmount');
const maxBtn = document.getElementById('maxBtn');
const confirmActionBtn = document.getElementById('confirmActionBtn');
const nativeTab = document.getElementById('nativeTab');
const tokenTab = document.getElementById('tokenTab');


function showAlert(message, type = 'info', txHash = null) {
    const alertId = `alert-${Date.now()}`;
    const colors = {
        success: 'bg-white/10 border-green-400 text-gray-300',
        error: 'bg-white/10 border-red-400 text-red-300',
        info: 'bg-white/10 border-blue-400 text-blue-300',
    };
    const icon = {
        success: '<i class="fa-solid fa-check-circle text-green-500 text-lg"></i>',
        error: '<i class="fa-solid fa-circle-xmark text-red-500 text-lg"></i>',
        info: '<i class="fa-solid fa-circle-info text-blue-500 text-lg"></i>',
    };

    const explorerLink = txHash
        ? `<a href="${currentNetwork.blockExplorerUrls[0]}/tx/${txHash}" target="_blank" class="text-sm text-blue-400 hover:underline">View on Explorer</a>`
        : '';

    const alertElement = document.createElement('div');
    alertElement.id = alertId;
    alertElement.className = `
        alert-popup transform translate-x-full opacity-0
        max-w-sm w-full p-4 border-l-4 rounded-lg shadow-md
        flex items-center gap-3 transition-all duration-500 ease-out
        ${colors[type]}
    `;
    alertElement.innerHTML = `
        <div class="mt-0.5">${icon[type]}</div>
        <div class="flex-1">
            <p class="text-sm font-semibold">${message}</p>
            ${explorerLink}
        </div>
        <button onclick="document.getElementById('${alertId}').remove()" 
            class="ml-2 p-1 rounded-full hover:bg-black/10 transition-colors">
            <i class="fa-solid fa-xmark text-lg"></i>
        </button>
    `;

    alertContainer.appendChild(alertElement);

    setTimeout(() => {
        alertElement.classList.remove('translate-x-full', 'opacity-0');
    }, 50);

    setTimeout(() => {
        alertElement.classList.add('opacity-0', 'translate-x-full');
        setTimeout(() => alertElement.remove(), 500);
    }, 5000);
}

async function updateConnectButton() {
    if (!signer) {
        connectButton.innerHTML = `Connect Wallet`;
        connectButton.onclick = connectWallet;
        connectButton.classList.add('btn', 'btn-primary');
        connectButton.classList.remove('bg-white/5', 'text-gray-300', 'font-semibold', 'py-2', 'px-4', 'rounded-lg', 'cursor-pointer');
        return;
    };

    const balance = await provider.getBalance(userAddress);

    connectButton.innerHTML = `
                <div class="hidden md:flex items-center space-x-2">
                    <span class="font-semibold text-sm">${parseFloat(ethers.formatEther(balance)).toFixed(4)} ${currentNetwork.nativeCurrency.symbol}</span>
                    <span class="btn-primary text-gray-300 text-sm font-semibold px-3 py-1 rounded-lg">${userAddress.substring(0, 6)}...${userAddress.substring(userAddress.length - 4)}</span>
                </div>
                <div class="md:hidden">
                    <i class="fa-solid fa-wallet"></i>
                </div>
            `;

    connectButton.classList.remove('btn', 'btn-primary');
    connectButton.classList.add('bg-white/5', 'text-gray-300', 'font-semibold', 'py-2', 'px-2', 'md:px-4', 'rounded-lg', 'cursor-pointer');

    connectButton.onclick = () => {
        openModal('walletDetailsModal');
        updateWalletDetailsModal();
    };
}

async function connectWallet() {
    if (typeof window.ethereum === 'undefined') {
        showAlert('MetaMask is not installed!', 'error');
        return;
    }
    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (!accounts || accounts.length === 0) {
            showAlert('Please connect to MetaMask.', 'info');
            return;
        }

        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        handleChainChanged(chainId);

        if (chainId !== currentNetwork.chainId) {
            await switchNetwork(currentNetwork);
        }

        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        userAddress = await signer.getAddress();
        nativeStakingContract = new ethers.Contract(addresses.nativeStaking, nativeStakingAbi, signer);
        tokenStakingContract = new ethers.Contract(addresses.tokenStaking, tokenStakingAbi, signer);
        nexiTokenContract = new ethers.Contract(addresses.nexiToken, erc20Abi, signer);

        await updateConnectButton();

        showAlert('Wallet connected!', 'success');
        localStorage.setItem('walletConnected', 'true');

        loadData();
    } catch (error) {
        console.error("Failed to connect wallet:", error);
        showAlert('Failed to connect wallet.', 'error');
    }
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('hidden');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('hidden');
}

async function switchNetwork(network) {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: network.chainId }],
        });
    } catch (switchError) {
        if (switchError.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [network],
                });
            } catch (addError) {
                console.error("Failed to add network:", addError);
                showAlert(`Failed to add ${network.chainName}.`, 'error');
            }
        } else {
            console.error("Failed to switch network:", switchError);
            showAlert('Failed to switch network.', 'error');
        }
    }
}

function updateNetworkButton(network) {
    networkButton.innerHTML = `
                <img src="${network.logoURI}" class="w-6 h-6 mr-2 rounded-full">
                <span>${network.chainName}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 hidden md:block" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
            `;
}

function renderNetworkList() {
    networkList.innerHTML = '';
    for (const chainId in supportedNetworks) {
        const network = supportedNetworks[chainId];
        const networkElement = document.createElement('div');
        networkElement.className = 'w-full flex items-center p-3 rounded-lg text-left';
        networkElement.innerHTML = `
                    <img src="${network.logoURI}" class="w-8 h-8 mr-4 rounded-full">
                    <div>
                        <p class="font-bold text-gray-300">${network.chainName}</p>
                    </div>
                `;
        networkList.appendChild(networkElement);
    }
}

function handleChainChanged(chainId) {
    const network = supportedNetworks[chainId];
    if (network) {
        currentNetwork = network;
        updateNetworkButton(currentNetwork);
        if (signer) {
            updateConnectButton();
        }
    } else {
        networkButton.innerHTML = `
                    <i class="fa-solid fa-triangle-exclamation text-red-500 mr-2"></i>
                    <span>Unsupported Network</span>
                `;
    }
}

async function updateWalletDetailsModal() {
    if (!signer) return;

    const shortAddress = `${userAddress.substring(0, 6)}...${userAddress.substring(userAddress.length - 4)}`;
    walletAddress.textContent = shortAddress;

    walletBalance.innerHTML = `<span class="text-gray-500">Loading...</span>`;
    const balance = await provider.getBalance(userAddress);
    walletBalance.innerHTML = `Balance : ${parseFloat(ethers.formatEther(balance)).toFixed(4)} ${currentNetwork.nativeCurrency.symbol}`;

    viewAllTxButton.href = `${currentNetwork.blockExplorerUrls[0]}/address/${userAddress}`;

    fetchRecentTransactions();
}

async function fetchRecentTransactions() {
    recentTransactions.innerHTML = `<p class="text-gray-400 text-sm text-center">Loading transactions...</p>`;

    const nativeStakingInterface = new ethers.Interface(nativeStakingAbi);
    const tokenStakingInterface = new ethers.Interface(tokenStakingAbi);

    const explorerBaseUrl = new URL(currentNetwork.blockExplorerUrls[0]).origin;
    const apiUrl = `${explorerBaseUrl}/api?module=account&action=txlist&address=${userAddress}&startblock=0&endblock=99999999&page=1&offset=5&sort=desc`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        if (data.status === "1" && data.result.length > 0) {
            recentTransactions.innerHTML = '';
            data.result.forEach(tx => {
                let txDescription = 'Contract Interaction';
                let iconClass = 'fa-file-contract text-gray-600';
                let iconBg = 'bg-gray-300';

                try {
                    if (tx.to.toLowerCase() === addresses.nativeStaking.toLowerCase()) {
                        const parsedTx = nativeStakingInterface.parseTransaction({ data: tx.input });
                        if (parsedTx) {
                            if (parsedTx.name === 'stake') {
                                txDescription = `Stake ETH`;
                                iconClass = 'fa-plus text-blue-600'; iconBg = 'bg-blue-100';
                            } else if (parsedTx.name === 'unstakePartial' || parsedTx.name === 'unstake') {
                                txDescription = `Unstake ETH`;
                                iconClass = 'fa-minus text-red-600'; iconBg = 'bg-red-100';
                            } else if (parsedTx.name === 'claimReward') {
                                txDescription = `Claim ETH Rewards`;
                                iconClass = 'fa-gift text-green-600'; iconBg = 'bg-green-100';
                            }
                        }
                    } else if (tx.to.toLowerCase() === addresses.tokenStaking.toLowerCase()) {
                        const parsedTx = tokenStakingInterface.parseTransaction({ data: tx.input });
                        if (parsedTx) {
                            if (parsedTx.name === 'stake') {
                                txDescription = `Stake NASI`;
                                iconClass = 'fa-plus text-blue-600'; iconBg = 'bg-blue-100';
                            } else if (parsedTx.name === 'unstakePartial' || parsedTx.name === 'unstake') {
                                txDescription = `Unstake NASI`;
                                iconClass = 'fa-minus text-red-600'; iconBg = 'bg-red-100';
                            } else if (parsedTx.name === 'claimReward') {
                                txDescription = `Claim NASI Rewards`;
                                iconClass = 'fa-gift text-green-600'; iconBg = 'bg-green-100';
                            }
                        }
                    } else if (tx.input === '0x') {
                        const isOut = tx.from.toLowerCase() === userAddress.toLowerCase();
                        txDescription = `${isOut ? 'Send' : 'Receive'} ${currentNetwork.nativeCurrency.symbol}`;
                        iconClass = `fa-arrow-${isOut ? 'up text-yellow-600' : 'down text-green-600'}`;
                        iconBg = isOut ? 'bg-yellow-100' : 'bg-green-100';
                    }
                } catch (e) {
                    console.warn("Could not parse transaction:", e);
                }

                const txElement = document.createElement('div');
                txElement.className = 'p-2 rounded-lg hover:bg-white/5';
                txElement.innerHTML = `
                            <div class="flex justify-between items-center text-sm">
                                <div class="flex items-center">
                                    <div class="w-8 h-8 flex items-center justify-center rounded-full mr-3 ${iconBg}">
                                        <i class="fa-solid ${iconClass}"></i>
                                    </div>
                                    <div>
                                        <p class="font-semibold">${txDescription}</p>
                                        <p class="text-xs text-gray-400">${new Date(tx.timeStamp * 1000).toLocaleString()}</p>
                                    </div>
                                </div>
                                <a href="${currentNetwork.blockExplorerUrls[0]}/tx/${tx.hash}" target="_blank" class="text-blue-400 hover:underline">
                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                            </div>
                        `;
                recentTransactions.appendChild(txElement);
            });
        } else {
            recentTransactions.innerHTML = `<p class="text-gray-500 text-sm text-center">No transactions found.</p>`;
        }
    } catch (error) {
        console.error('Failed to fetch transactions:', error);
        recentTransactions.innerHTML = `<p class="text-red-500 text-sm text-center">Could not fetch transactions.</p>`;
    }
}

async function loadData() {
    if (currentStakingType === 'native') {
        await loadNativeStakingData();
    } else {
        await loadTokenStakingData();
    }
}

async function loadGlobalData() {
    const tempProvider = new ethers.JsonRpcProvider(currentNetwork.rpcUrls[0]);
    const tempNativeContract = new ethers.Contract(addresses.nativeStaking, nativeStakingAbi, tempProvider);
    const tempTokenContract = new ethers.Contract(addresses.tokenStaking, tokenStakingAbi, tempProvider);

    const totalNativeStaked = await tempNativeContract.getTotalStaking();
    const totalTokenStaked = await tempTokenContract.getTotalStaking();
    const totalNativeStakers = await tempNativeContract.getTotalUniqueStakers();
    const totalTokenStakers = await tempTokenContract.getTotalUniqueStakers();

    tvlNEXEl.textContent = `${parseFloat(ethers.formatEther(totalNativeStaked)).toFixed(3)} ETH`;
    tvlNEXIEl.textContent = `${parseFloat(ethers.formatEther(totalTokenStaked)).toFixed(0)} NASI`;
    uniqueStakersEl.innerHTML = `<i class="fa-solid fa-user mr-2"></i> ${totalNativeStakers + totalTokenStakers}`;
}

async function loadNativeStakingData() {
    stakingTitle.textContent = 'ETH Staking';
    apyEl.textContent = '1.72%';
    if (signer && userAddress) {
        const userBal = await provider.getBalance(userAddress);
        const userStaked = await nativeStakingContract.getStakedAmount(userAddress);

        userBalanceEl.textContent = `${parseFloat(ethers.formatEther(userBal)).toFixed(4)} ETH`;
        userStakedEl.textContent = `${parseFloat(ethers.formatEther(userStaked)).toFixed(4)} ETH`;

        if (rewardInterval) clearInterval(rewardInterval);
        const updateRewards = async () => {
            const pendingRewards = await nativeStakingContract.getPendingReward(userAddress);
            userRewardsEl.textContent = `${parseFloat(ethers.formatEther(pendingRewards)).toFixed(5)} ETH`;
        };
        updateRewards();
        rewardInterval = setInterval(updateRewards, 1000);
    }
    renderActionButtons();
}

async function loadTokenStakingData() {
    stakingTitle.textContent = 'NASI Staking';
    apyEl.textContent = '14.7%';
    if (signer && userAddress) {
        const userBal = await nexiTokenContract.balanceOf(userAddress);
        const userStaked = await tokenStakingContract.getStakedAmount(userAddress);

        userBalanceEl.textContent = `${parseFloat(ethers.formatEther(userBal)).toFixed(0)} NASI`;
        userStakedEl.textContent = `${parseFloat(ethers.formatEther(userStaked)).toFixed(0)} NASI`;

        if (rewardInterval) clearInterval(rewardInterval);
        const updateRewards = async () => {
            const pendingRewards = await tokenStakingContract.getPendingReward(userAddress);
            userRewardsEl.textContent = `${parseFloat(ethers.formatEther(pendingRewards)).toFixed(4)} NASI`;
        };
        updateRewards();
        rewardInterval = setInterval(updateRewards, 1000);
    }
    renderActionButtons();
}

function showActionBox(action) {
    if (!actionBox.classList.contains('hidden') && currentAction === action) {
        actionBox.classList.add('hidden');
        currentAction = null;
        return;
    }

    currentAction = action;
    actionBox.classList.remove('hidden');
    const tokenSymbol = currentStakingType === 'native' ? 'ETH' : 'NASI';
    if (action === 'stake') {
        actionBoxTitle.textContent = `Stake ${tokenSymbol}`;
        confirmActionBtn.textContent = 'Confirm Stake';
    } else {
        actionBoxTitle.textContent = `Unstake ${tokenSymbol}`;
        confirmActionBtn.textContent = 'Confirm Unstake';
    }
    actionAmountInput.value = '';
}

async function renderActionButtons() {
    actionButtonsContainer.innerHTML = '';

    if (!signer) {
        const connectMessage = document.createElement('div');
        connectMessage.className = 'text-center text-gray-400 w-full';
        connectMessage.textContent = 'Please connect your wallet to manage staking.';
        actionButtonsContainer.appendChild(connectMessage);
        return;
    }

    if (currentStakingType === 'token') {
        const allowance = await nexiTokenContract.allowance(userAddress, addresses.tokenStaking);
        if (allowance < ethers.parseEther('1')) {
            const approveBtn = document.createElement('button');
            approveBtn.id = 'approveBtn';
            approveBtn.className = 'btn btn-secondary';
            approveBtn.innerHTML = `Approve NASI`;
            approveBtn.onclick = handleApprove;
            actionButtonsContainer.appendChild(approveBtn);
        }
    }

    const stakeBtn = document.createElement('button');
    stakeBtn.className = 'btn btn-primary';
    stakeBtn.innerHTML = `<i class="fa-solid fa-plus mr-1"></i>Stake`;
    stakeBtn.onclick = () => showActionBox('stake');

    const unstakeBtn = document.createElement('button');
    unstakeBtn.className = 'btn btn-secondary';
    unstakeBtn.innerHTML = `<i class="fa-solid fa-minus mr-1"></i>Unstake`;
    unstakeBtn.onclick = () => showActionBox('unstake');

    const claimBtn = document.createElement('button');
    claimBtn.className = 'btn btn-secondary';
    claimBtn.innerHTML = `<i class="fa-solid fa-gift mr-1"></i>Claim`;
    claimBtn.onclick = handleClaim;

    actionButtonsContainer.appendChild(stakeBtn);
    actionButtonsContainer.appendChild(unstakeBtn);
    actionButtonsContainer.appendChild(claimBtn);
}

async function handleMaxClick() {
    if (!signer) return;
    if (currentAction === 'stake') {
        const balance = currentStakingType === 'native'
            ? await provider.getBalance(userAddress)
            : await nexiTokenContract.balanceOf(userAddress);
        actionAmountInput.value = ethers.formatEther(balance);
    } else if (currentAction === 'unstake') {
        const contract = currentStakingType === 'native' ? nativeStakingContract : tokenStakingContract;
        const stakedAmount = await contract.getStakedAmount(userAddress);
        actionAmountInput.value = ethers.formatEther(stakedAmount);
    }
}

async function handleConfirmAction() {
    const amount = actionAmountInput.value;
    if (!amount || parseFloat(amount) <= 0) {
        showAlert('Please enter a valid amount.', 'error');
        return;
    }
    const amountParsed = ethers.parseEther(amount);

    if (currentAction === 'stake') {
        const contract = currentStakingType === 'native' ? nativeStakingContract : tokenStakingContract;
        const balance = currentStakingType === 'native'
            ? await provider.getBalance(userAddress)
            : await nexiTokenContract.balanceOf(userAddress);
        if (amountParsed > balance) {
            showAlert('Insufficient balance.', 'error');
            return;
        }
        currentStakingType === 'native' ? await handleStake(amountParsed) : await handleTokenStake(amountParsed);
    } else if (currentAction === 'unstake') {
        await handleUnstake(amountParsed);
    }
}

async function handleStake(amount) {
    try {
        const tx = await nativeStakingContract.stake({ value: amount });
        showAlert('Staking transaction submitted...', 'info', tx.hash);
        await tx.wait();
        showAlert('Stake successful!', 'success', tx.hash);
        actionBox.classList.add('hidden');
        loadData();
        updateConnectButton();
    } catch (error) {
        console.error("Stake failed:", error);
        showAlert(error.reason || 'Stake failed.', 'error');
    }
}

async function handleTokenStake(amount) {
    try {
        const tx = await tokenStakingContract.stake(amount);
        showAlert('Staking transaction submitted...', 'info', tx.hash);
        await tx.wait();
        showAlert('Stake successful!', 'success', tx.hash);
        actionBox.classList.add('hidden');
        loadData();
    } catch (error) {
        console.error("Token Stake failed:", error);
        showAlert(error.reason || 'Token Stake failed.', 'error');
    }
}

async function handleUnstake(amount) {
    try {
        const contract = currentStakingType === 'native' ? nativeStakingContract : tokenStakingContract;
        const stakedAmount = await contract.getStakedAmount(userAddress);
        if (amount > stakedAmount) {
            showAlert('Amount exceeds staked balance.', 'error');
            return;
        }

        const tx = await contract.unstakePartial(amount);
        showAlert('Unstake transaction submitted...', 'info', tx.hash);
        await tx.wait();
        showAlert('Unstake successful!', 'success', tx.hash);
        actionBox.classList.add('hidden');
        loadData();
        updateConnectButton();
    } catch (error) {
        console.error("Unstake failed:", error);
        showAlert(error.reason || 'Unstake failed.', 'error');
    }
}

async function handleClaim() {
    try {
        const contract = currentStakingType === 'native' ? nativeStakingContract : tokenStakingContract;
        const tx = await contract.claimReward();
        showAlert('Claim transaction submitted...', 'info', tx.hash);
        await tx.wait();
        showAlert('Rewards claimed successfully!', 'success', tx.hash);
        loadData();
        updateConnectButton();
    } catch (error) {
        console.error("Claim failed:", error);
        showAlert(error.reason || 'No rewards to claim.', 'error');
    }
}

async function handleApprove() {
    try {
        const tx = await nexiTokenContract.approve(addresses.tokenStaking, ethers.MaxUint256);
        showAlert('Approval transaction submitted...', 'info', tx.hash);
        await tx.wait();
        showAlert('NASI Approved successfully!', 'success', tx.hash);
        renderActionButtons();
    } catch (error) {
        console.error("Approve failed:", error);
        showAlert(error.reason || 'Approve failed.', 'error');
    }
}

connectButton.addEventListener('click', connectWallet);

closeNetworkModalButton.addEventListener('click', () => closeModal('networkModal'));
networkButton.addEventListener('click', () => openModal('networkModal'));

maxBtn.addEventListener('click', handleMaxClick);
confirmActionBtn.addEventListener('click', handleConfirmAction);

nativeTab.addEventListener('click', () => {
    localStorage.setItem('stakingTab', 'native');
    switchTab('native');
});
tokenTab.addEventListener('click', () => {
    localStorage.setItem('stakingTab', 'token');
    switchTab('token');
});

function switchTab(tab) {
    currentStakingType = tab;
    if (tab === 'native') {
        nativeTab.classList.add('active');
        tokenTab.classList.remove('active');
    } else {
        tokenTab.classList.add('active');
        nativeTab.classList.remove('active');
    }
    actionBox.classList.add('hidden');
    currentAction = null;
    loadData();
}


// --- CLICK OUTSIDE TO CLOSE MODAL ---
['networkModal', 'walletDetailsModal'].forEach(modalId => {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal(modalId);
            }
        });
    }
});

closeWalletDetailsModalButton.addEventListener('click', () => closeModal('walletDetailsModal'));
copyAddressButton.addEventListener('click', () => {
    const addressToCopy = userAddress;
    const textArea = document.createElement('textarea');
    textArea.value = addressToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        showAlert('Address copied!', 'success');
    } catch (err) {
        console.error('Failed to copy text: ', err);
        showAlert('Failed to copy address.', 'error');
    }
    document.body.removeChild(textArea);
});

disconnectButton.addEventListener('click', () => {
    localStorage.removeItem('walletConnected');
    window.location.reload();
});


async function initializeApp() {
    renderNetworkList();
    loadGlobalData();

    const savedTab = localStorage.getItem('stakingTab') || 'native';
    switchTab(savedTab);

    if (window.ethereum) {
        try {
            const chainId = await window.ethereum.request({ method: 'eth_chainId' });
            handleChainChanged(chainId);

            if (localStorage.getItem('walletConnected') === 'true') {
                await connectWallet();
            } else {
                renderActionButtons();
            }

            window.ethereum.on('accountsChanged', (accounts) => {
                if (accounts.length === 0) {
                    localStorage.removeItem('walletConnected');
                }
                window.location.reload();
            });

            window.ethereum.on('chainChanged', () => window.location.reload());
        } catch (error) {
            console.error("Could not get chainId on init:", error);
            handleChainChanged(null);
        }
    } else {
        updateNetworkButton(currentNetwork);
        renderActionButtons();
    }
}

window.addEventListener('load', initializeApp);
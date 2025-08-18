const contractAddresses = {
    match1: '0x1C6165499816F666d89EE25e996f5932B917C4fc',
    match2: '0xFd55aaAe6AeC87186c3325f6983503D3D812d784',
    match3: '0xfCd04145cc426ECF75e85eEE6b91F855e37BC1b8',
    match4: '0x8d424f2f5eEC0c9e69308A48aED536C7CEa180bc',
    match5: '0xEAa3784f10D57964Ad01E5029d30C3b7ae3Eb669',
    match6: '0xCfea843cE49Ba603DE1dbC7815B52Fb694F4A469',
    match7: '0x03Fbd7751DB3446195aB7Da2cbE629965058B969',
    match8: '0x9E3a8C9fB6c5a6B9E50E76e977eB18c611c29707',
    match9: '0x81d39Faf0F5Ea4dd2f2507504555E2b48Bd69293',
    match10: '0x2Bc1e4165ee9205AD15745C3C6E648696517435D',
    match11: '0x8Ca74a1bd46957c4ce2FB672d1c1f987bDC98823',
    match12: '0x04db3807Cbe7C0E5fB3Ad468453032F0c5fA6CeC'
};

const matchDetails = {
    match1: { teamA: 'West Ham', teamB: 'Chelsea', draw: 'Draw' },
    match2: { teamA: 'Man City', teamB: 'Tottenham', draw: 'Draw' },
    match3: { teamA: 'Bournemouth', teamB: 'Wolves', draw: 'Draw' },
    match4: { teamA: 'Brentford', teamB: 'Aston Villa', draw: 'Draw' },
    match5: { teamA: 'Arsenal (-2.5)', teamB: 'Leeds (2.5)', draw: 'Draw' },
    match6: { teamA: 'Crystal Palace', teamB: 'Nottingham Forest', draw: 'Draw' },
    match7: { teamA: 'Everton', teamB: 'Brighton', draw: 'Draw' },
    match8: { teamA: 'Fulham', teamB: 'Man Utd', draw: 'Draw' },
    match9: { teamA: 'Newcastle', teamB: 'Liverpool', draw: 'Draw' },
    match10: { teamA: 'Mallorca', teamB: 'Celta Vigo', draw: 'Draw' },
    match11: { teamA: 'Levante (2.5)', teamB: 'Barcelona (-2.5)', draw: 'Draw' },
    match12: { teamA: 'Oviedo (1.5)', teamB: 'Madrid (-1.5)', draw: 'Draw' },
};

const sportBettingAbi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "teamABettors", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "teamBBettors", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "userBets", "outputs": [{ "internalType": "uint256", "name": "teamA", "type": "uint256" }, { "internalType": "uint256", "name": "teamB", "type": "uint256" }, { "internalType": "uint256", "name": "draw", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "bettingOpen", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "oddsTeamA", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "oddsTeamB", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "oddsDraw", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "getPendingReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "claimReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "betTeamA", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "betTeamB", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "betDraw", "outputs": [], "stateMutability": "payable", "type": "function" }];

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
let provider, signer, userAddress;
let currentNetwork = supportedNetworks['0xaa39db'];
let currentBet = {};

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

// New Buttons & Modals
const rewardsButton = document.getElementById('rewardsButton');
const historyButton = document.getElementById('historyButton');
const rewardsModal = document.getElementById('rewardsModal');
const historyModal = document.getElementById('historyModal');
const myBetsModal = document.getElementById('myBetsModal');
const closeRewardsModalButton = document.getElementById('closeRewardsModalButton');
const closeHistoryModalButton = document.getElementById('closeHistoryModalButton');
const closeMyBetsModalButton = document.getElementById('closeMyBetsModalButton');
const rewardsContainer = document.getElementById('rewardsContainer');
const historyContainer = document.getElementById('historyContainer');
const myBetsContainer = document.getElementById('myBetsContainer');

// Bet Modal UI Elements
const betModal = document.getElementById('betModal');
const betModalTitle = document.getElementById('betModalTitle');
const betModalSelection = document.getElementById('betModalSelection');
const betModalContract = document.getElementById('betModalContract');
const betAmountInput = document.getElementById('betAmount');
const betMaxButton = document.getElementById('betMaxButton');
const potentialWinEl = document.getElementById('potentialWin');
const cancelBetButton = document.getElementById('cancelBetButton');
const confirmBetButton = document.getElementById('confirmBetButton');


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

        await updateConnectButton();

        showAlert('Wallet connected!', 'success');
        localStorage.setItem('walletConnected', 'true');

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

    recentTransactions.innerHTML = `<p class="text-gray-400 text-sm text-center">Transaction history coming soon.</p>`;
}

async function loadMatchData() {
    const tempProvider = new ethers.JsonRpcProvider(currentNetwork.rpcUrls[0]);

    // Match 1
    const contract1 = new ethers.Contract(contractAddresses.match1, sportBettingAbi, tempProvider);
    const oddsA1 = await contract1.oddsTeamA();
    const oddsB1 = await contract1.oddsTeamB();
    const oddsDraw1 = await contract1.oddsDraw();
    document.getElementById('oddsA1').textContent = (Number(oddsA1) / 100).toFixed(2);
    document.getElementById('oddsB1').textContent = (Number(oddsB1) / 100).toFixed(2);
    document.getElementById('oddsDraw1').textContent = (Number(oddsDraw1) / 100).toFixed(2);

    // Match 2
    const contract2 = new ethers.Contract(contractAddresses.match2, sportBettingAbi, tempProvider);
    const oddsA2 = await contract2.oddsTeamA();
    const oddsB2 = await contract2.oddsTeamB();
    const oddsDraw2 = await contract2.oddsDraw();
    document.getElementById('oddsA2').textContent = (Number(oddsA2) / 100).toFixed(2);
    document.getElementById('oddsB2').textContent = (Number(oddsB2) / 100).toFixed(2);
    document.getElementById('oddsDraw2').textContent = (Number(oddsDraw2) / 100).toFixed(2);

    // Match 3
    const contract3 = new ethers.Contract(contractAddresses.match3, sportBettingAbi, tempProvider);
    const oddsA3 = await contract3.oddsTeamA();
    const oddsB3 = await contract3.oddsTeamB();
    const oddsDraw3 = await contract3.oddsDraw();
    document.getElementById('oddsA3').textContent = (Number(oddsA3) / 100).toFixed(2);
    document.getElementById('oddsB3').textContent = (Number(oddsB3) / 100).toFixed(2);
    document.getElementById('oddsDraw3').textContent = (Number(oddsDraw3) / 100).toFixed(2);

    // Match 4
    const contract4 = new ethers.Contract(contractAddresses.match4, sportBettingAbi, tempProvider);
    const oddsA4 = await contract4.oddsTeamA();
    const oddsB4 = await contract4.oddsTeamB();
    const oddsDraw4 = await contract4.oddsDraw();
    document.getElementById('oddsA4').textContent = (Number(oddsA4) / 100).toFixed(2);
    document.getElementById('oddsB4').textContent = (Number(oddsB4) / 100).toFixed(2);
    document.getElementById('oddsDraw4').textContent = (Number(oddsDraw4) / 100).toFixed(2);

    // Match 5
    const contract5 = new ethers.Contract(contractAddresses.match5, sportBettingAbi, tempProvider);
    const oddsA5 = await contract5.oddsTeamA();
    const oddsB5 = await contract5.oddsTeamB();
    const oddsDraw5 = await contract5.oddsDraw();
    document.getElementById('oddsA5').textContent = (Number(oddsA5) / 100).toFixed(2);
    document.getElementById('oddsB5').textContent = (Number(oddsB5) / 100).toFixed(2);
    document.getElementById('oddsDraw5').textContent = (Number(oddsDraw5) / 100).toFixed(2);

    // Match 6
    const contract6 = new ethers.Contract(contractAddresses.match6, sportBettingAbi, tempProvider);
    const oddsA6 = await contract6.oddsTeamA();
    const oddsB6 = await contract6.oddsTeamB();
    const oddsDraw6 = await contract6.oddsDraw();
    document.getElementById('oddsA6').textContent = (Number(oddsA6) / 100).toFixed(2);
    document.getElementById('oddsB6').textContent = (Number(oddsB6) / 100).toFixed(2);
    document.getElementById('oddsDraw6').textContent = (Number(oddsDraw6) / 100).toFixed(2);

    // Match 7
    const contract7 = new ethers.Contract(contractAddresses.match7, sportBettingAbi, tempProvider);
    const oddsA7 = await contract7.oddsTeamA();
    const oddsB7 = await contract7.oddsTeamB();
    const oddsDraw7 = await contract7.oddsDraw();
    document.getElementById('oddsA7').textContent = (Number(oddsA7) / 100).toFixed(2);
    document.getElementById('oddsB7').textContent = (Number(oddsB7) / 100).toFixed(2);
    document.getElementById('oddsDraw7').textContent = (Number(oddsDraw7) / 100).toFixed(2);

    // Match 8
    const contract8 = new ethers.Contract(contractAddresses.match8, sportBettingAbi, tempProvider);
    const oddsA8 = await contract8.oddsTeamA();
    const oddsB8 = await contract8.oddsTeamB();
    const oddsDraw8 = await contract8.oddsDraw();
    document.getElementById('oddsA8').textContent = (Number(oddsA8) / 100).toFixed(2);
    document.getElementById('oddsB8').textContent = (Number(oddsB8) / 100).toFixed(2);
    document.getElementById('oddsDraw8').textContent = (Number(oddsDraw8) / 100).toFixed(2);

    // Match 9
    const contract9 = new ethers.Contract(contractAddresses.match9, sportBettingAbi, tempProvider);
    const oddsA9 = await contract9.oddsTeamA();
    const oddsB9 = await contract9.oddsTeamB();
    const oddsDraw9 = await contract9.oddsDraw();
    document.getElementById('oddsA9').textContent = (Number(oddsA9) / 100).toFixed(2);
    document.getElementById('oddsB9').textContent = (Number(oddsB9) / 100).toFixed(2);
    document.getElementById('oddsDraw9').textContent = (Number(oddsDraw9) / 100).toFixed(2);

    // Match 10
    const contract10 = new ethers.Contract(contractAddresses.match10, sportBettingAbi, tempProvider);
    const oddsA10 = await contract10.oddsTeamA();
    const oddsB10 = await contract10.oddsTeamB();
    const oddsDraw10 = await contract10.oddsDraw();
    document.getElementById('oddsA10').textContent = (Number(oddsA10) / 100).toFixed(2);
    document.getElementById('oddsB10').textContent = (Number(oddsB10) / 100).toFixed(2);
    document.getElementById('oddsDraw10').textContent = (Number(oddsDraw10) / 100).toFixed(2);

    // Match 11
    const contract11 = new ethers.Contract(contractAddresses.match11, sportBettingAbi, tempProvider);
    const oddsA11 = await contract11.oddsTeamA();
    const oddsB11 = await contract11.oddsTeamB();
    const oddsDraw11 = await contract11.oddsDraw();
    document.getElementById('oddsA11').textContent = (Number(oddsA11) / 100).toFixed(2);
    document.getElementById('oddsB11').textContent = (Number(oddsB11) / 100).toFixed(2);
    document.getElementById('oddsDraw11').textContent = (Number(oddsDraw11) / 100).toFixed(2);

    // Match 12
    const contract12 = new ethers.Contract(contractAddresses.match12, sportBettingAbi, tempProvider);
    const oddsA12 = await contract12.oddsTeamA();
    const oddsB12 = await contract12.oddsTeamB();
    const oddsDraw12 = await contract12.oddsDraw();
    document.getElementById('oddsA12').textContent = (Number(oddsA12) / 100).toFixed(2);
    document.getElementById('oddsB12').textContent = (Number(oddsB12) / 100).toFixed(2);
    document.getElementById('oddsDraw12').textContent = (Number(oddsDraw12) / 100).toFixed(2);
}

async function fetchRewards() {
    if (!signer) {
        showAlert('Please connect your wallet to see rewards.', 'info');
        return;
    }
    openModal('rewardsModal');
    rewardsContainer.innerHTML = '<p class="text-center text-gray-400">Loading rewards...</p>';

    let totalRewards = 0;
    let rewardsHtml = '';

    for (const [matchKey, address] of Object.entries(contractAddresses)) {
        try {
            const contract = new ethers.Contract(address, sportBettingAbi, signer);
            const reward = await contract.getPendingReward(userAddress);
            const ethReward = parseFloat(ethers.formatEther(reward));

            if (ethReward > 0) {
                totalRewards += ethReward;
                rewardsHtml += `
                            <div class="bg-white/5 p-3 rounded-lg flex justify-between items-center">
                                <div>
                                    <p class="font-semibold text-gray-300">
                                        Contract: <a href="${currentNetwork.blockExplorerUrls[0]}/address/${address}" target="_blank" class="text-gray-300 hover:underline">${address.substring(0, 6)}...${address.substring(address.length - 4)}</a>
                                    </p>
                                    <p class="text-sm text-gray-300">Reward: <span class="font-bold text-blue-400">${ethReward.toFixed(4)} ETH</span></p>
                                </div>
                                <button onclick="claimReward('${address}')" class="btn btn-primary btn-sm w-auto px-4">Claim</button>
                            </div>
                        `;
            }
        } catch (error) {
            console.error(`Error fetching reward for ${matchKey}:`, error);
        }
    }

    if (totalRewards === 0) {
        rewardsContainer.innerHTML = '<p class="text-center text-gray-400">No rewards available to claim.</p>';
    } else {
        rewardsContainer.innerHTML = rewardsHtml;
    }
}

async function claimReward(contractAddress) {
    if (!signer) return;
    const contract = new ethers.Contract(contractAddress, sportBettingAbi, signer);
    try {
        const tx = await contract.claimReward();
        showAlert('Claim transaction submitted...', 'info', tx.hash);
        await tx.wait();
        showAlert('Reward claimed successfully!', 'success', tx.hash);
        fetchRewards();
    } catch (error) {
        console.error("Claim failed:", error);
        showAlert(error.reason || 'Claim failed.', 'error');
    }
}

function showHistory() {
    if (!userAddress) {
        showAlert('Please connect your wallet to see your history.', 'info');
        return;
    }
    openModal('historyModal');
    historyContainer.innerHTML = '<p class="text-center text-gray-400">Loading history...</p>';

    const userHistory = matches.filter(match =>
        Object.values(match.bets).some(teamBets =>
            teamBets.some(bet => bet.address.toLowerCase() === userAddress.toLowerCase())
        )
    );

    if (userHistory.length === 0) {
        historyContainer.innerHTML = '<p class="text-center text-gray-400">No betting history found.</p>';
        return;
    }

    let historyHtml = '';
    userHistory.forEach(match => {
        const [userTeam, teamBets] = Object.entries(match.bets).find(([team, bettors]) =>
            bettors.some(b => b.address.toLowerCase() === userAddress.toLowerCase())
        ) || [];

        const userBet = teamBets.find(b => b.address.toLowerCase() === userAddress.toLowerCase());
        const status = userTeam === match.winner ? "Win" : "Lost";
        const statusColor = status === "Win" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700";
        const odds = parseFloat(match.odds[userTeam]);
        const betAmount = parseFloat(userBet.bet);
        const payout = status === "Win" ? (betAmount * odds).toFixed(4) : "0.0000";

        historyHtml += `
                    <div class="bg-white/5 p-4 rounded-lg space-y-3">
                        <div class="flex justify-between items-center text-xs text-gray-400">
                            <a href="${currentNetwork.blockExplorerUrls[0]}/address/${match.contract}" target="_blank" class="font-mono hover:underline">${match.contract.substring(0, 6)}...${match.contract.substring(match.contract.length - 4)}</a>
                            <span class="date-display" data-date="${match.date}"></span>
                        </div>
                        <div>
                            <p class="font-semibold text-lg text-gray-300">${match.teamA} - ${match.teamB}</p>
                            <div class="flex justify-between items-center">
                                <p class="text-sm text-gray-400">Match Winner: <span class="font-bold text-blue-400">${match.winner}</span></p>
                                <span class="text-xs font-bold px-2 py-1 rounded-full ${statusColor}">${status}</span>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm pt-2 border-t border-gray-400">
                            <div class="text-left">
                                <p class="text-gray-400">Team</p>
                                <p class="font-semibold text-blue-400">${userTeam}</p>
                            </div>
                            <div class="text-right">
                                <p class="text-gray-400">Odd</p>
                                <p class="font-semibold text-gray-300">${odds.toFixed(4)}</p>
                            </div>
                            <div class="text-left">
                                <p class="text-gray-400">Bet</p>
                                <p class="font-semibold text-gray-300">${userBet.bet}</p>
                            </div>
                            <div class="text-right">
                                <p class="text-gray-400">Payout</p>
                                <p class="font-semibold text-green-500">${payout} ETH</p>
                            </div>
                        </div>
                    </div>
                `;
    });
    historyContainer.innerHTML = historyHtml;
    formatAllDates();
}

function openBetModal(selection, oddsId, matchKey, betFunction) {
    if (!signer) {
        showAlert('Please connect your wallet to place a bet.', 'info');
        return;
    }
    const odds = parseFloat(document.getElementById(oddsId).textContent);

    currentBet = {
        selection,
        odds,
        contractAddress: contractAddresses[matchKey],
        betFunction
    };

    betModalSelection.textContent = `Your Bet: ${selection} @ ${odds.toFixed(2)}`;
    betAmountInput.value = '';
    potentialWinEl.textContent = '0.0000 ETH';
    betModalContract.innerHTML = `Contract: <a href="${currentNetwork.blockExplorerUrls[0]}/address/${currentBet.contractAddress}" target="_blank" class="text-gray-400 hover:underline">${currentBet.contractAddress.substring(0, 6)}...${currentBet.contractAddress.substring(currentBet.contractAddress.length - 4)}</a>`;
    openModal('betModal');
}

function calculatePotentialWin() {
    const amount = parseFloat(betAmountInput.value) || 0;
    const winAmount = (amount * currentBet.odds).toFixed(4);
    potentialWinEl.textContent = `${winAmount} ETH`;
}

async function handleConfirmBet() {
    const amount = betAmountInput.value;
    if (!amount || parseFloat(amount) <= 0) {
        showAlert('Please enter a valid amount.', 'error');
        return;
    }
    if (parseFloat(amount) < 0.0001) {
        showAlert('Bet amount must be at least 0.0001 ETH.', 'error');
        return;
    }
    if (parseFloat(amount) > 10) {
        showAlert('Bet amount cannot exceed 10 ETH.', 'error');
        return;
    }

    const amountWei = ethers.parseEther(amount);
    const contract = new ethers.Contract(currentBet.contractAddress, sportBettingAbi, signer);

    try {
        const tx = await contract[currentBet.betFunction]({ value: amountWei });
        showAlert('Bet transaction submitted...', 'info', tx.hash);
        await tx.wait();
        showAlert('Bet placed successfully!', 'success', tx.hash);
        closeModal('betModal');
        updateConnectButton();
    } catch (error) {
        console.error("Bet failed:", error);
        showAlert(error.reason || 'Bet failed.', 'error');
    }
}

function formatAllDates() {
    document.querySelectorAll('.time-display').forEach(el => {
        const dt = new Date(el.dataset.datetime);
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        let dayString;
        if (dt.toDateString() === today.toDateString()) {
            dayString = 'Today';
        } else if (dt.toDateString() === tomorrow.toDateString()) {
            dayString = 'Tomorrow';
        } else {
            dayString = dt.toLocaleDateString(undefined, { day: '2-digit', month: '2-digit', year: 'numeric' });
        }

        const timeString = dt.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: false });
        el.textContent = `${dayString}, ${timeString}`;
    });

    document.querySelectorAll('.date-display').forEach(el => {
        const dt = new Date(el.dataset.date);
        el.textContent = dt.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    });
}

async function updateMatchStatus(contractAddress, statusElementId) {
    const tempProvider = new ethers.JsonRpcProvider(currentNetwork.rpcUrls[0]);
    const contract = new ethers.Contract(contractAddress, sportBettingAbi, tempProvider);
    const statusDot = document.getElementById(statusElementId);

    try {
        const isOpen = await contract.bettingOpen();
        statusDot.classList.remove('bg-gray-400', 'bg-green-500', 'bg-red-500');
        if (isOpen) {
            statusDot.classList.add('bg-green-500');
        } else {
            statusDot.classList.add('bg-red-500');
        }
    } catch (error) {
        console.error(`Could not get status for ${contractAddress}`, error);
        statusDot.classList.remove('bg-green-500', 'bg-red-500');
        statusDot.classList.add('bg-gray-400');
    }
}

function updateAllMatchStatuses() {
    updateMatchStatus(contractAddresses.match1, 'status-match1');
    updateMatchStatus(contractAddresses.match2, 'status-match2');
    updateMatchStatus(contractAddresses.match3, 'status-match3');
    updateMatchStatus(contractAddresses.match4, 'status-match4');
    updateMatchStatus(contractAddresses.match5, 'status-match5');
    updateMatchStatus(contractAddresses.match6, 'status-match6');
    updateMatchStatus(contractAddresses.match7, 'status-match7');
    updateMatchStatus(contractAddresses.match8, 'status-match8');
    updateMatchStatus(contractAddresses.match9, 'status-match9');
    updateMatchStatus(contractAddresses.match10, 'status-match10');
    updateMatchStatus(contractAddresses.match11, 'status-match11');
    updateMatchStatus(contractAddresses.match12, 'status-match12');
}

async function showMyBets() {
    if (!signer) {
        showAlert('Please connect your wallet to see your bets.', 'info');
        return;
    }
    openModal('myBetsModal');
    myBetsContainer.innerHTML = '<p class="text-center text-gray-400">Loading your bets...</p>';

    let activeBetsHtml = '';
    let hasActiveBets = false;

    for (const [matchKey, address] of Object.entries(contractAddresses)) {
        try {
            const contract = new ethers.Contract(address, sportBettingAbi, signer);
            const userBets = await contract.userBets(userAddress);

            let betOn = null;
            let betAmount = 0;
            let betOdds = 0;

            if (userBets.teamA > 0) {
                betOn = matchDetails[matchKey].teamA;
                betAmount = userBets.teamA;
                const odds = await contract.oddsTeamA();
                betOdds = Number(odds) / 100;
            } else if (userBets.teamB > 0) {
                betOn = matchDetails[matchKey].teamB;
                betAmount = userBets.teamB;
                const odds = await contract.oddsTeamB();
                betOdds = Number(odds) / 100;
            } else if (userBets.draw > 0) {
                betOn = matchDetails[matchKey].draw;
                betAmount = userBets.draw;
                const odds = await contract.oddsDraw();
                betOdds = Number(odds) / 100;
            }

            if (betOn) {
                hasActiveBets = true;
                const potentialWin = (parseFloat(ethers.formatEther(betAmount)) * betOdds).toFixed(5);
                activeBetsHtml += `
                            <div class="bg-white/5 p-3 rounded-lg">
                                <div>
                                <p class="font-semibold text-gray-300 pb-2">${matchDetails[matchKey].teamA} - ${matchDetails[matchKey].teamB}</p>
                            </div>
                            <div class="grid grid-cols-2 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm pt-2 border-t border-gray-400">
                                <div class="text-left">
                                    <p class="text-gray-400">Your Bet</p>
                                    <p class="font-semibold text-blue-400">${betOn}</p>
                                </div>
                                <div class="text-right">
                                    <p class="text-gray-400">Odd</p>
                                    <p class="font-semibold text-gray-300">${betOdds.toFixed(2)}</p>
                                </div>
                                <div class="text-left">
                                    <p class="text-gray-400">Amount</p>
                                    <p class="font-semibold text-gray-300">${ethers.formatEther(betAmount)} ETH</p>    
                                </div>
                                <div class="text-right">
                                    <p class="text-gray-400">Potential Win</p>
                                    <p class="font-semibold text-green-500">${potentialWin} ETH</p>    
                                </div>
                            </div>
                            </div>
                        `;
            }
        } catch (error) {
            console.error(`Error fetching bets for ${matchKey}:`, error);
        }
    }

    if (!hasActiveBets) {
        myBetsContainer.innerHTML = '<p class="text-center text-gray-500">You have no active bets.</p>';
    } else {
        myBetsContainer.innerHTML = activeBetsHtml;
    }
}


connectButton.addEventListener('click', connectWallet);

closeNetworkModalButton.addEventListener('click', () => closeModal('networkModal'));
networkButton.addEventListener('click', () => openModal('networkModal'));
rewardsButton.addEventListener('click', fetchRewards);
historyButton.addEventListener('click', showHistory);
myBetsButton.addEventListener('click', showMyBets);
closeRewardsModalButton.addEventListener('click', () => closeModal('rewardsModal'));
closeHistoryModalButton.addEventListener('click', () => closeModal('historyModal'));
closeMyBetsModalButton.addEventListener('click', () => closeModal('myBetsModal'));
cancelBetButton.addEventListener('click', () => closeModal('betModal'));
confirmBetButton.addEventListener('click', handleConfirmBet);
betAmountInput.addEventListener('input', calculatePotentialWin);
betMaxButton.addEventListener('click', async () => {
    const balance = await provider.getBalance(userAddress);
    betAmountInput.value = ethers.formatEther(balance);
    calculatePotentialWin();
});

// --- CLICK OUTSIDE TO CLOSE MODAL ---
['networkModal', 'walletDetailsModal', 'rewardsModal', 'historyModal', 'betModal', 'myBetsModal'].forEach(modalId => {
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
    loadMatchData();
    formatAllDates();
    updateAllMatchStatuses();
    setInterval(updateAllMatchStatuses, 10000); // Update status every 10 seconds

    if (window.ethereum) {
        try {
            const chainId = await window.ethereum.request({ method: 'eth_chainId' });
            handleChainChanged(chainId);

            if (localStorage.getItem('walletConnected') === 'true') {
                await connectWallet();
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
    }
}

window.addEventListener('load', initializeApp);
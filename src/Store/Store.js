import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}

export const store = new Vuex.Store({
    state: {
        wallets: [
            { id: '2e52113d-d36e-4293-b62d-93bfdd156736', coin: 'Bitcoin', alias: 'Ламба', address: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX', ballance: 1.02, walletType: 'Address', group: 'Another', groupName: '123', isActive: true },
            { id: '6cf4d6a6-fdc9-4b0c-82ac-a875ad9db5da', coin: 'Bitcoin', alias: 'Шлюхи', address: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xwX', ballance: 0.37, walletType: 'Ballance', group: 'Same', groupName: '', isActive: false },
            { id: 'd9efc904-0fcd-4e11-8cb6-adcf0f547001', coin: 'Ethereum', alias: 'Инвестиции', address: '0x32Be343B94f860124dC4fEe278FDCBD38C102D88', ballance: 56.37, walletType: 'Address', group: 'None', groupName: '', isActive: true },
        ],
        coins: [
            { id: '402d5087-5248-4398-a934-5e8970d4ef64', coin: 'Bitcoin', token: 'BTC', api: '', upTime: '1000' },
            { id: '491ff6aa-ab61-45a3-9683-a4da71ab374c', coin: 'Ethereum', token: 'ETH', api: '', upTime: '1000' }
        ],
        wallGroups: [
            { id: '476ffca6-9ca2-4127-a886-660f33736350', name: '' },
            { id: '47f6aa26-63ab-4010-bafa-26026be9dfdf', name: '' }
        ],
        exchanges: [
            { id: '31c28766-0923-45ed-9eed-6f4d0f4ca287' },
            { id: '523948ad-5be9-403a-9db1-c728ea9024e8' }
        ],
        rigs: [
            { id: '5cc8d44d-c7f6-402e-b73c-c4288600e205', pool: 'https://ethermine.org/miners/', alias: 'first', wallet: '0xa5d097a49f7b529abfebe74a3b44fa69f133ed41', upTime: '5' },
            { id: '3c3e5752-b054-4afb-b817-d8ed05118865', pool: 'https://ethermine.org/miners/', alias: 'second', wallet: '0xa5d097a49f7b529abfebe74a3b44fa69f133ed41', upTime: '5' },
            { id: '2b1a9ad3-67ed-4726-9877-8ff117fc17a0', pool: 'https://ethermine.org/miners/', alias: '42', wallet: '0xa5d097a49f7b529abfebe74a3b44fa69f133ed41', upTime: '5' }
        ]
    },
    mutations: {
        setWallet(state, wallet) {
            if (wallet.id !== '') {
                // Exist wallet
                var index = state.wallets.findIndex(x => x.id == wallet.id)
            } else {
                // New wallet
                wallet.id = uuidv4() // TODO: check id in DB
                index = state.wallets.length
            }
            Vue.set(state.wallets, index, wallet)
        },
        deleteWallet(state, wallet) {
            var index = state.wallets.findIndex(x => x.id == wallet.id)
            state.wallets.splice(index, 1);
        },
        setCoin(state, coin) {
            if (coin.id !== '') {
                // Exist coin
                var index = state.coins.findIndex(x => x.id == coin.id)
            } else {
                // New coin
                coin.id = uuidv4() // TODO: check id in DB
                index = state.coins.length
            }
            Vue.set(state.coins, index, coin)
        },
        deleteCoin(state, coin) {
            var index = state.coins.findIndex(x => x.id == coin.id)
            state.coins.splice(index, 1);
        },
        setRig(state, rig) {
            if (rig.id !== '') {
                // Exist rig
                var index = state.rigs.findIndex(x => x.id == rig.id)
            } else {
                // New rig
                rig.id = uuidv4() // TODO: check id in DB
                index = state.rigs.length
            }
            Vue.set(state.rigs, index, rig)
        },
        deleteRig(state, rig) {
            var index = state.rigs.findIndex(x => x.id == rig.id)
            state.rigs.splice(index, 1);
        }
    }
});
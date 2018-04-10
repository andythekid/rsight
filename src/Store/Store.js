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
            { id: '402d5087-5248-4398-a934-5e8970d4ef64', coin: 'Bitcoin', token: 'BTC', api: '' }
        ],
        wallGroups: [],
        exchanges: [],
        rigs: []
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
        }
    }
});
import { http, createConfig } from 'wagmi'
import { mainnet, polygonAmoy } from 'wagmi/chains'
import { injected, metaMask, safe } from 'wagmi/connectors'

export const config = createConfig({
    chains: [mainnet, polygonAmoy],
    connectors: [
        injected(),
        metaMask(),
        safe(),
    ],
    transports: {
        [mainnet.id]: http(),
        [polygonAmoy.id]: http(),
    },
})

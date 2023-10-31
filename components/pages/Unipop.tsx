"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'




// We recommend you pass your own JSON-RPC endpoints.
const jsonRpcUrlMap = { 
  // 1: ['https://rpc.mevblocker.io/fast']
  1: ['https://go.getblock.io/3fb7f98b060e4fa882d8f4718dd84f35']
  // 3: ['https://ropsten.infura.io/v3/<YOUR_INFURA_PROJECT_ID>']
}
  
// You can also pass a token list as JSON, as long as it matches the schema
const MY_TOKEN_LIST = [
  {
  "name": "Dai Stablecoin",
  "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  "symbol": "DAI",
  "decimals": 18,
  "chainId": 1,
  "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
},
  {
  "name": "Tether USD",
  "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  "symbol": "USDT",
  "decimals": 6,
  "chainId": 1,
  "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
},
{
  "name": "USD Coin",
  "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  "symbol": "USDC",
  "decimals": 6,
  "chainId": 1,
  "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
},
{
  "name": "Mickey Meme",
  "address": "0x7391a131cCb43a571a34e09f986080D117b4313C",
  "symbol": "MICKEY",
  "decimals": 18,
  "chainId": 1,
  "logoURI": "https://raw.githubusercontent.com/MickeyMemeCoin/mickeymemecoin.github.io/main/public/images/mickeymeme.png"
},
]
// Default token list from Uniswap
const UNISWAP_TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org'

// Use the native token of the connected chain as the default input token
const NATIVE = 'NATIVE' // Special address for native token

// WBTC as the default output token
const MICKEY = '0x7391a131cCb43a571a34e09f986080D117b4313C'

  export function Unipop() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="default">Buy On Uniswap!</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Acquire $MICKEY using this Uniswap Widget!</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="Uniswap">
    <SwapWidget 
          // provider={publicClient} 
          jsonRpcUrlMap={jsonRpcUrlMap}
          tokenList={MY_TOKEN_LIST}
          defaultInputTokenAddress={NATIVE}
          defaultInputAmount={2}
          defaultOutputTokenAddress={MICKEY}
    />
  </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  
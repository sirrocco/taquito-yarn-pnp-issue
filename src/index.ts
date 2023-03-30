import { importKey } from "@taquito/signer";
import { TezosToolkit } from "@taquito/taquito";

const fundWallet = {
  pkh: "tz1WgKeoZLuGntp6ZpWVKTBTXcLWKCgBsdPn",
  mnemonic: [
    "wage",
    "refuse",
    "lucky",
    "trigger",
    "hunt",
    "gold",
    "trash",
    "relax",
    "limb",
    "sunny",
    "inject",
    "modify",
    "property",
    "swear",
    "tip",
  ],
  email: "zefklflt.wtnzugmr@teztnets.xyz",
  password: "s9iPRlkruo",
  amount: "13230302906",
  activation_code: "759f51485da86bfe72c4b28a57409eed7ba2e3a4",
};

async function run() {
  console.log('\x1b[33m Start! \x1b[0m');

  try {
    const tezos = new TezosToolkit("https://rpc.ghostnet.teztnets.xyz");

    await importKey(
      tezos,
      fundWallet.email,
      fundWallet.password,
      fundWallet.mnemonic.join(" "),
      fundWallet.activation_code
    );
  } catch (err) {
    console.error(err);
  }

  console.log('\x1b[33m Finished! \x1b[0m');

}

void run();

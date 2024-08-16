import "dotenv/config"
import {Keypair} from "@solana/web3.js";

let keypair: Keypair;
let count = 0;

do {
    keypair = Keypair.generate();
    console.log(`The public key is: `, keypair.publicKey.toBase58());
    count++;
} while (!keypair.publicKey.toBase58().startsWith("6UT"));

console.log(`Congrads! The key you were looking for is: `, keypair.publicKey.toBase58());
console.log(`It took ${count} iterations to get it.`);

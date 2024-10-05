# Solana Subscription Service

This project demonstrates a subscription service built on the Solana blockchain.

## Prerequisites

- Rust
- Solana CLI
- Node.js

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/solana-subscription.git
    cd solana-subscription
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Build the Solana program:
    ```sh
    cargo build-bpf
    ```

## Usage

1. Deploy the Solana program:
    ```sh
    solana program deploy /path/to/your/solana-subscription/target/deploy/solana_subscription.so
    ```

2. Run the client:
    ```sh
    npm start
    ```

## Example Code

### Rust Program (Solana)

```rust
use solana_program::{
    account_info::AccountInfo,
    entrypoint,
    entrypoint::ProgramResult,
    pubkey::Pubkey,
};

entrypoint!(process_instruction);

fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    // Your Solana program logic here
    Ok(())
}
```

### JavaScript Client

```javascript
const solanaWeb3 = require('@solana/web3.js');

(async () => {
    const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed');
    const payer = solanaWeb3.Keypair.generate();

    // Your client logic here
})();
```

## License

This project is licensed under the MIT License.

## Usage
curl -X POST http://localhost:3000/register -H "Content-Type: application/json" -d '{"interval": 2000}'


## Improvements
https://www.npmjs.com/package/node-cron
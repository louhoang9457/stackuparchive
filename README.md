
# StackUpArchive

StackUpArchive is a project built on the Aptos blockchain to archive all StackUp bounties efficiently and securely.

## Features

-   Automatically fetch and store all StackUp bounty details
    
-   Secure and immutable archiving on Aptos
    
-   User-friendly interface for browsing archived bounties
    
-   Optimized for fast retrieval and minimal storage cost
    

## Getting Started

### Prerequisites

-   Aptos CLI installed
    
-   Aptos wallet set up
    
-   Node.js and npm installed (for frontend, if applicable)
    

### Installation

1.  Clone the repository:
    
    ```
    git clone https://github.com/louhoang9457/stackuparchive.git
    cd stackuparchive
    ```
    
2.  Install dependencies (if applicable):
    
    ```
    npm install
    ```
    
3.  Configure the Aptos blockchain connection:
    
    -   Update `config.json` with your Aptos wallet address and RPC endpoint
        

### Deployment

-   Deploy smart contracts using Aptos CLI:
    
    ```
    aptos move publish --profile default
    ```
    
-   Run the archive script:
    
    ```
    node archive.js
    ```
    

## Usage

-   View archived bounties via the frontend (if available) or query the Aptos blockchain directly.
    

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License.

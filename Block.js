class Block {
      constructor(blockchain, parentHash, nonce = sha256(new Date().getTime().toString()).toString()) {
          this.blockchain = blockchain;
              this.nonce = nonce;
                  this.parentHash = parentHash;
                     this.hash = sha256(this.nonce + this.parentHash).toString()
                        }
}


/* 
By pointing via hashes it is possible to enforce a specific order of blocks 
Changing a block would change it's hash and subsequently all blocks that are descendents of the block. (Following blocks)
The last block validates all data in the ascendent blocks. 
 */ 

class Block {
      isValid() {
          return this.parentHash === 'root' ||
                (this.hash.substr(-DIFFICULTY) === "0".repeat(DIFFICULTY) &&
                      this.hash === sha256(this.nonce + this.parentHash).toString())
                        }

                        setNonce(nonce) {
                              this.nonce = nonce
                                  this._setHash()
                                    }

                                      _setHash() {
                                          this.hash = sha256(this.nonce + this.parentHash).toString()
                                            }
                                            }

/*
Proof-of-work is what "secures" the blockchain, makes it decentralized.
The security of the blockchain relies on computational power to not be centralized within single parties.
*/
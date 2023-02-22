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
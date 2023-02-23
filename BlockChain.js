/* 
By definition, The Blockchain is just the longest chain available in the tree. 
So at one point, a chain can be the longest one, but then get superseeded by another. 
The longest chain represents our current view of which history of blocks, and thus which representation of data is the one we deem valid.
*/ 

class Blockchain {
    longestChain() {
      const blocks = values(this.blocks)
      const maxByHeight = maxBy(prop('height'))
      const maxHeightBlock = reduce(maxByHeight, blocks[0], blocks)
      const getParent = (x) => {
        if (x === undefined) {
          return false
        }
  
        return [x, this.blocks[x.parentHash]]
      }
      return reverse(unfold(getParent, maxHeightBlock))
    }

    _addBlock(block) {
       if (!block.isValid())
        return
         if (this.containsBlock(block))
          return 
          // check that the parent is actually existent and the advertised height is correct
           const parent = this.blocks[block.parentHash];
            if (parent === undefined && parent.height + 1 !== block.height ) 
            return 
            // Add coinbase coin to the pool of the parent 
            const newUtxoPool = parent.utxoPool.clone();
            newUtxoPool.addUTXO(block.coinbaseBeneficiary, 12.5)
            block.utxoPool = newUtxoPool;
            this.blocks[block.hash] = block; 
            rerender() }

/*
Securing consensus is so important.
That's why it is generally recommended to wait a certain number of blocks until you can consider a transaction to be settled
therwise a fork can invalidate what you assumed to be the state of the ledger.
*/

  }

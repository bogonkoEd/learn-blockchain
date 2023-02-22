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
  }
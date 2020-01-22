function isPowerOfTwo(n){
    //.. should return true or false ..

    // if n >= 0 continue squere rooting
    // if n == 0 return true
    // else return false

    do {
        if (n == 0){
            return true
        } else {
            n = Math.sqrt(n)
        }
    } while (n > 0)
    return false
  }

  console.log(isPowerOfTwo(4))
  
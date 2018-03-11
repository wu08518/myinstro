const filters = {
  filterNum (val) {
    if (val === '1') {
      return 'ABCDEF'
    }
    if (val === '2') {
      return 'GHIJKL'
    }
  },
  filterStr (str) {
    if (str === '是') {
      return '是我们'
    }
    if (str === '否') {
      return '不是你们'
    }
  }
}

export default filters

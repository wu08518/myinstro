const mixins = {
  methods: {
    jump (to) {
      if (this.$router) {
        this.$router.push(to)
      }
    },
    replaceTo (to) {
      if (this.$router) {
        this.$router.replace(to)
      }
    },
    go (n) {
      if (this.$router) {
        this.$router.go(n)
      }
    }
  }
}

export default mixins

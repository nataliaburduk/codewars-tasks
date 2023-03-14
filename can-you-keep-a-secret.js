function createSecretHolder(secret) {
  let secretStore = secret;
  return {
    getSecret: function() {
      return secretStore
    },
    setSecret: function(a) {
      return secretStore = a;
    }
  }
}

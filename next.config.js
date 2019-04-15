const path = require('path')

module.exports = {
  webpack (config, options) {
    config._addAlias = (directory) => {
      config.resolve.alias[directory] = path.join(__dirname, directory)
    }

    config._addAlias('components')
    config._addAlias('config')
    config._addAlias('helpers')

    delete config._addAlias

    return config
  }
}

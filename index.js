const fetchNicePackage = require('fetch-nice-package')

module.exports = async function (name, opts = {}) {
  const pkg = await fetchNicePackage(name)
  if (opts.dev) {
    return (pkg && pkg.devDepNames) ? pkg.devDepNames : []
  } else {
    return (pkg && pkg.depNames) ? pkg.depNames : []
  }
}

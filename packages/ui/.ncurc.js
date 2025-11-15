/** @type {import('npm-check-updates').RcOptions } */
module.exports = {
  /**
    @param name    The name of the dependency.
    @param semver  A parsed Semver array of the current version.
      (See: https://git.coolaj86.com/coolaj86/semver-utils.js#semverutils-parse-semverstring)
    @returns       True if the package should be excluded, false if it should be included.
  */
  reject: (name, semver) => {
    return !!name.includes('storybook');
  }
}

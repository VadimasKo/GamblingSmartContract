const GamblingPool = artifacts.require("./GamblingPool.sol")


module.exports = (deployer) => {
  deployer.deploy(GamblingPool)
}

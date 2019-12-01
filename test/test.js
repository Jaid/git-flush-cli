import path from "path"

import coffee from "coffee"
import simpleGit from "simple-git/promise"
import fsp from "@absolunet/fsp"

const main = path.resolve(process.env.MAIN)

it("should run", async () => {
  const directory = path.join(__dirname, "..", "dist", "test")
  await fsp.mkdirp(directory)
  await fsp.emptyDir(directory)
  const gitRepository = simpleGit(directory)
  await gitRepository.init()
  return coffee.fork(main, ["message", "--push=false"])
    .expect("code", 0)
    .debug()
    .end()
})
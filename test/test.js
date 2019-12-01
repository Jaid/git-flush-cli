import path from "path"

import coffee from "coffee"
import fsp from "@absolunet/fsp"
import simpleGit from "simple-git/promise"

const main = path.resolve(process.env.MAIN)

it("should run", async () => {
  const directory = path.join(__dirname, "..", "dist", "test")
  console.log(`Directory: ${directory}`)
  await fsp.mkdirp(directory)
  await fsp.emptyDir(directory)
  const gitRepository = simpleGit(directory)
  await gitRepository.init()
  return coffee.fork(main, ["message", "--directory", directory, "--skip-pull", "--skip-push"])
    .expect("stdout", "Nothing to commit\n")
    .expect("code", 0)
    .debug()
    .end()
})
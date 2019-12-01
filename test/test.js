import path from "path"

import coffee from "coffee"
import fsp from "@absolunet/fsp"

const main = path.resolve(process.env.MAIN)

it("should run", async () => {
  const directory = path.join(__dirname, "..", "dist", "test")
  await fsp.mkdirp(directory)
  await fsp.emptyDir(directory)
  return coffee.fork(main, ["message", "--directory", directory])
    .expect("stdout", "Not a git repository\n")
    .expect("code", 0)
    .debug()
    .end()
})
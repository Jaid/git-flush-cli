import yargs from "yargs"
import gitFlush from "git-flush"
import zahl from "zahl"
import chalk from "chalk"

const job = async argv => {
  const changes = await gitFlush(argv.message, argv)
  if (changes === null) {
    console.log(chalk.gray("Not a git repository"))
  } else if (changes === 0) {
    console.log(chalk.gray("Nothing to commit"))
  } else {
    console.log(chalk.green(`Committed ${zahl(changes, "change")} with message: `) + argv.message)
  }
}

const builder = {
  push: {
    type: "boolean",
    default: false,
  },
  directory: {
    type: "string",
    default: process.cwd(),
  },
}

yargs
  .scriptName(_PKG_NAME)
  .version(_PKG_VERSION)
  .command("$0 <message>", _PKG_DESCRIPTION, builder, job).argv
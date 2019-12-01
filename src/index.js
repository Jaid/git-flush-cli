import yargs from "yargs"
import gitFlush from "git-flush"
import zahl from "zahl"
import chalk from "chalk"

const job = async argv => {
  const changes = await gitFlush(argv.message, {
    directory: argv.directory,
    pull: !argv.skipPull,
    push: !argv.skipPush,
  })
  if (changes === null) {
    process.stdout.write(chalk.gray("Not a git repository\n"))
  } else if (changes === 0) {
    process.stdout.write(chalk.gray("Nothing to commit\n"))
  } else {
    process.stdout.write(`${chalk.green(`Committed ${zahl(changes, "change")} with message: `) + argv.message}\n`)
  }
}

const builder = {
  "skip-push": {
    type: "boolean",
    default: false,
  },
  "skip-pull": {
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
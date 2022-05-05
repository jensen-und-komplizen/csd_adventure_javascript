const commandNames = ["look at", "read", "view"];

class LookAtCommand {

    isResponsible(command) {
        return commandNames.some(name => {
            command.startsWith(name)
        });
    }

    execute(command, room, player) {

    }

}

module.exports = LookAtCommand

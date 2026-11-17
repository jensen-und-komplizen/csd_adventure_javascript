class TimeService {
    #tz

    constructor() {
        this.#tz = 'Europe/Berlin'
    }

    async currentTime() {
        return TimeService.currentTime(this.#tz)
    }

    static async currentTime(tz) {
        try {
            const response = await fetch('https://csd-timeservice.idiot.games/')
            if (!response.ok) {
                throw new Error('Wrong status: ' + response.status)
            }

            const match = (await response.text()).match(/(-?\d+)/)
            if (match) {
                return Number(match[1])
            }
        } catch (e) {
            console.log(e.toString())
        }

        return -1
    }
}

module.exports = TimeService

// 8ALL CORE – IST & SOLL + TECH-NORMEN
export const EightAll = {
    ist: {
        tech: "OK",
        norm: "OK",
        respo: "NEU"
    },
    soll: {
        tech: "OK",
        norm: "OK",
        respo: "NEU"
    },
    check() {
        const ist = this.ist;
        const soll = this.soll;
        const status = {
            tech: ist.tech === soll.tech,
            norm: ist.norm === soll.norm,
            respo: ist.respo === soll.respo
        };
        console.log("8ALL STATUS:", status);
        return status;
    }
};


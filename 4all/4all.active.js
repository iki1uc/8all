// 4ALL – System-Manager (IST/SOLL)
export const FourAll = {
    ist: {
        respo: "NEU",
        version: "1.0.0"
    },
    soll: {
        respo: "NEU",
        version: "1.0.0"
    },
    status() {
        console.log("4ALL IST:", this.ist);
        console.log("4ALL SOLL:", this.soll);
        return this.ist;
    }
};


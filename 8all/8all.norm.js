// 8ALL NORM – TECH-Stand & Normen
export const EightAllNorm = {
    version: "1.0",
    required: ["tech", "norm", "respo"],
    validate(obj) {
        return this.required.every(key => key in obj);
    }
};


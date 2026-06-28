// GEN‑Strang – 3D Kern
export const GEN_STRANG = {
    line: n => 3*n,
    instance: (base, n) => base + 3*n,
    axis: n => Math.floor(n/3) + 1
};

// GEN‑AST – 3 kurze Äste
export const GEN_AST = {
    ast1: "Raster-Kern",
    ast2: "Tiefen-Shift",
    ast3: "Aura-Kante"
};

// 2BE4 SCAN – verbindet GEN mit 8ALL
export function twoBeFourScan(state) {
    console.log("2BE4 SCAN – GEN aktiv:", {
        gen: GEN_STRANG,
        ast: GEN_AST,
        state
    });
    return { gen: GEN_STRANG, ast: GEN_AST };
}


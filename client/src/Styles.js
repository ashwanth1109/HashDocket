export const w = {
    screen: { width: "100vw" },
    full: { width: "100%" }
};
export const h = {
    screen: { height: "100vh" },
    full: { height: "100%" },
    h80: { height: "80px" }
};
export const bg = {
    darkGrey: { background: "#575A5E" },
    green: { background: "#35E584" }
};

export const t = {
    // size
    size2: { fontSize: "2rem" },

    // color
    white: { color: "#fff" }
};

export const f = {
    // display
    flex: { display: "flex" },
    col: { flexDirection: "column" },
    row: { flexDirection: "row" },
    flex1: { flex: 1 }
};

export const img = {
    contain: { objectFit: "contain" }
};

export const stylizer = obj => {
    let retObject = {};
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            let tempObj = {};
            const arr = obj[prop];
            arr.forEach(element => {
                tempObj = Object.assign(tempObj, element);
            });
            retObject[prop] = tempObj;
        }
    }
    console.log(retObject);
    return retObject;
};

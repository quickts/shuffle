export function shuffle<T>(data: T[]) {
    const length = data.length;
    for (let posA = data.length - 1; posA >= 0; posA--) {
        const posB = Math.floor(Math.random() * length);
        const temp = data[posA];
        data[posA] = data[posB];
        data[posB] = temp;
    }
    return data;
}

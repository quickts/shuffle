export function shuffle<T>(data: T[]) {
    const length = data.length;
    for (let posA = 0; posA < length; posA--) {
        const posB = Math.floor(Math.random() * length);
        const temp = data[posA];
        data[posA] = data[posB];
        data[posB] = temp;
    }
    return data;
}

type GachaLevel = 'S' | 'R' | 'N'

const probability = {
    activity: [151, 1282, 8567],
    weapon: [156, 1498, 8346],
    permanent: [213, 1387, 8400]
} as const

export function gachaSelect(pool: keyof typeof probability) {
    const hit = Math.ceil(Math.random() * 10000 + 1)
    const _p = probability[pool]
    const _c: GachaLevel[] = ['S', 'R', 'N']
    let start = 0
    let end = _p.length - 1
    while (start < end) {
        let mid = Math.floor((start + end) / 2)
        if (hit > _p[mid] && hit <= _p[mid + 1]) {
            return _c[mid + 1]
        } else if (hit > _p[mid + 1]) {
            start = mid
        } else {
            end = mid
        }
        return _c[0]
    }
}
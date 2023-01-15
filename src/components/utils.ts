export function formatCardNumber(value: string): string {
    try {
        var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        var matches = v.match(/\d{4,16}/g);
        var match = matches && matches[0] || ''
        var parts = []

        for (let i=0, len=match.length; i<len; i+=4) {
            parts.push(match.substring(i, i+4))
        }

        if (parts.length) {
            return parts.join(' ')
        } else {
            return value
        }
    } catch (error) {
        return ''
    }
    
}

export function formatCardDateNumber(value: string): string {
    if (!value) return ''
    if (value.length >= 3) {
        return `${value.substr(0, 2)}/${value.substr(2, 2)}`
    } else return value
}
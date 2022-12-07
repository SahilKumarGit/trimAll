function trimAll(value: any): any {
    if (!value) return value;
    if (Array.isArray(value)) return value.map((each) => trimAll(each));
    if (typeof value == 'object') {
        const _obj: any = {};
        for (const key in value) {
            _obj[key] = trimAll(value[key]);
        }
        return _obj;
    }
    if (typeof value == 'string') return value.trim();
    return value;
}
// all dine
export default trimAll;
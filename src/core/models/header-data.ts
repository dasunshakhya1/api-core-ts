export class HeaderData {


    private headerData: any = {}

    public setHeaderField(key: string, value: any) {
        this.headerData[key] = value
        return this
    }

    public getHeader() {
        return this.headerData
    }
}
import { Key } from "./key";

export class HistoryEntry {

    key : Key
    timestamp : Date
    pair : string
    
    constructor( key : Key, timestamp : Date, pair : string ) {
        this.key = key
        this.timestamp = timestamp
        this.pair = pair
    }
}

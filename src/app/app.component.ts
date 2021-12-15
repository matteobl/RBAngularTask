import { Component } from '@angular/core';
import { Key } from './key';
import { HistoryEntry } from './historyEntry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoambeeTask';

  keys : Key[][] = [
    [
      { primary : "1", secondary : "" },
      { primary : "2", secondary : "ABC" },
      { primary : "3", secondary : "DEF" }
    ],
    [
      { primary : "4", secondary : "GHI" },
      { primary : "5", secondary : "JKL" },
      { primary : "6", secondary : "MNO" }
    ],
    [
      { primary : "7", secondary : "PQRS" },
      { primary : "8", secondary : "TUV" },
      { primary : "9", secondary : "WXYZ" }
    ],
    [
      { primary : "*", secondary : "" },
      { primary : "0", secondary : "" },
      { primary : "#", secondary : "" }
    ]
  ]

  history : HistoryEntry[] = []

  keyPressed(key : Key) {
    const pair : string = this.getPair(key.primary)
    const entry : HistoryEntry = new HistoryEntry(key, new Date(), pair)
    this.history.push(entry)
    //this.history.unshift(entry)
    sessionStorage.setItem(entry.timestamp.toString(), key.primary+", "+pair)
  }

  getPair(key : string) : string {
    for (let i = 0; i<4; i++) {
      for (let j = 0; j<3; j++) {
        if(key == this.keys[i][j].primary) {
          return "[" + (i+1) + "," + (j+1) + "]"
        }
      }
    }
    return "Pair not found"
  }
}


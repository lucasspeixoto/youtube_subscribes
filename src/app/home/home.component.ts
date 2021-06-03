import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ElectronService } from '.././core/services/electron/electron.service'
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  channelInfo: any
  channelSubscription: Subscription

  constructor(
    private electronService: ElectronService,
    private dataService: DataService
    ) { }

  ngOnInit() {
    this.channel('UCy-R3H4s0z1HubB_uSiGsHA')
   }

  minimizeWindow() {
    this.electronService.window.minimize()
  }

  closeWindow() {
    this.electronService.window.destroy()
  }

  channel(name: string) {

    if (this.channelSubscription) {
      this.channelSubscription.unsubscribe()
    }

   this.channelSubscription = this.dataService.getStats(name)
   .subscribe(
     (res) => {
      this.channelInfo = res
      console.log(res)
     }
   )
  }

}

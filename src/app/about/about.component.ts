import {Component, Inject} from '@angular/core';
import {TUI_IS_CYPRESS} from "@taiga-ui/cdk";
import {of, timer} from 'rxjs';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  readonly fastValue$ = this.isCypress ? of(100) : timer(500, 100);
  readonly slowValue$ = this.isCypress ? of(4) : timer(500, 2000);
  readonly colors = [
    'var(--tui-support-01)',
    'var(--tui-support-21)',
    'lightskyblue',
    '#3682db',
    'var(--tui-primary)',
  ];

  constructor(@Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean) {}
}




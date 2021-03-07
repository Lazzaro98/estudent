import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'sr']);
    translate.setDefaultLang('en');
  }

  switchLang(lang: string) {
  this.translate.use(lang);
}
}

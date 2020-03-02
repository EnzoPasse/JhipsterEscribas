/* import { Component } from '@angular/core';

@Component({
  selector: 'jhi-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {}
 */

// Angular
import { Component, OnInit } from '@angular/core';
import { LayoutConfigService } from 'app/shared/config/layout.config.service';
import * as objectPath from 'object-path';

@Component({
  selector: 'jhi-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  today: number = Date.now();
  fluid: boolean | undefined;

  constructor(private layoutService: LayoutConfigService) {}

  ngOnInit(): void {
    const config = this.layoutService.getConfig();

    // footer width fluid
    this.fluid = objectPath.get(config, 'footer.self.width') === 'fluid';
  }
}

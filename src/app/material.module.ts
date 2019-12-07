import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule, MatIconModule, MatListModule, MatTabsModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  imports: [MatTabsModule, MatListModule, MatIconModule, MatToolbarModule, MatButtonModule, MatBadgeModule, MatSidenavModule],
  exports: [MatTabsModule, MatListModule, MatIconModule, MatToolbarModule, MatButtonModule, MatBadgeModule, MatSidenavModule]
})


export class MaterialModule {}

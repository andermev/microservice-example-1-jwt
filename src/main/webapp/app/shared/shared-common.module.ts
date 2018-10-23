import { NgModule } from '@angular/core';

import { MicroserviceExample1JwtSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MicroserviceExample1JwtSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MicroserviceExample1JwtSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MicroserviceExample1JwtSharedCommonModule {}

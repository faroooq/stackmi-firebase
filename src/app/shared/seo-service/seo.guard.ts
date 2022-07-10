import { SeoService } from './seo.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class SeoGuard implements CanActivate {

    public constructor(private seo: SeoService) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        const description = route.params['desc'];
        this.seo
            .setTitle(['codewithfarooq - Coding Made Easy..'])
            .setDescription(description)
            .setKeywords(route.data['keywords']);
        return true;
    }
}

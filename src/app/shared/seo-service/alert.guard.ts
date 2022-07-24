import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { NewArticleComponent } from "../../academy/new-article/new-article.component";
// alert.guard.ts
@Injectable()
export class AlertGuard implements CanDeactivate<NewArticleComponent> {
    canDeactivate(
        component: NewArticleComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        // console.log(component);
        return window.confirm("Are you sure, you want to discard the changes?");
    }
}
import { Injectable } from "@angular/core";

@Injectable()
export class AlertGuard {
    canDeactivate(): boolean {
        return window.confirm("Are you sure, you want to discard the changes?");
    }
}
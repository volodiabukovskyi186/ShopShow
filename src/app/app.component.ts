import { Component, OnInit, OnDestroy } from "@angular/core";
import { AppServerModule } from './app.server.module';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import {NavigationStart, Router} from '@angular/router';
export let browserRefresh = false;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public favIcon: HTMLLinkElement;
  subscription: Subscription;
  constructor(public http: HttpClient,
              private router: Router) {
    this.favIcon = document.querySelector('#appIcon') || document.querySelector("link[href='favicon.ico']");

    this.getAllSiteData();

    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
      }
    });
  }

  public ngOnInit(): void {
    // this.favIcon = document.querySelector('#appIcon');

  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.subscription.unsubscribe();
  }

  public getAllSiteData(): void {
    this.getSiteData()
    .pipe(takeUntil(this.destroy$))
    .subscribe((res) => {
      if (this.favIcon) {
        this.favIcon.href = 'https://api.showu.com.ua' + res?.data?.icon?.src;
      }

    })
  }

  public getSiteData(): Observable<any> {
    return this.http.get<any>(`${environment.host}site/1`);
  }
}

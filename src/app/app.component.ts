import { Component, OnInit, OnDestroy } from "@angular/core";
import { AppServerModule } from './app.server.module';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  public favIcon: HTMLLinkElement = document.querySelector('#appIcon');
  private destroy$: Subject<void> = new Subject<void>();

  constructor(public http: HttpClient) {}

  public ngOnInit(): void {
    this.getAllSiteData();
    console.log(this.favIcon);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public getAllSiteData(): void {
    this.getSiteData()
    .pipe(takeUntil(this.destroy$))
    .subscribe((res) => {
      this.favIcon.href = environment.host + res?.data?.icon?.src;
    })
  }

  public getSiteData(): Observable<any> {
    return this.http.get<any>(`${environment.host}site/1`);
  }
}

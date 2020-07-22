import { Component, Input, OnInit, HostBinding } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: "rap-svg-ico",
  template: "",
  styleUrls: ["./svg-ico.component.scss"]
})
export class SvgIcoComponent implements OnInit {
  ngOnInit(): void {
    this._http.get(this.src, { responseType: "text" }).subscribe(this.okHandle);
  }

  @HostBinding("innerHTML")
  svg: SafeHtml;

  okHandle = data => {
    this.svg = this._sanitizer.bypassSecurityTrustHtml(data);
  };

  constructor(private _http: HttpClient, private _sanitizer: DomSanitizer) {}

  @Input() src: string;
  @Input() alt: string;
}

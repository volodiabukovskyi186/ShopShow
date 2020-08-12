import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AppLangService } from '../core/app-lang.service';

export interface IResponseCollectionDesc {
  collection_id: number;
  created_at: string;
  description: string;
  id: number;
  lang_id: number;
  subtitle: string;
  title: string;
  updated_at: string;
}

export interface ICollectionImage {
  album_id: number;
  created_at: string;
  id: number;
  src: string;
  src_mini: string;
  updated_at: string;
  user_id: number;
}

export interface IResponseCollection {
  created_at: string;
  description: IResponseCollectionDesc;
  id: number;
  image_id: number;
  image: ICollectionImage;
  products: Array<any>;
  status: number;
  updated_at: string;
}

@Injectable({
  providedIn: "root",
})
export class CollectionService {
  list: Array<any> = [];
  item: IResponseCollection = {
    created_at: null,
    description: {
      collection_id: null,
      created_at: null,
      description: null,
      id: null,
      lang_id: null,
      subtitle: null,
      title: null,
      updated_at: null,
    },
    id: null,
    image: {
      album_id: null,
      created_at: null,
      id: null,
      src: null,
      src_mini: null,
      updated_at: null,
      user_id: null,
    },
    image_id: null,
    products: [],
    status: null,
    updated_at: null,
  };

  constructor(private http: HttpClient, private appLang: AppLangService) {}

  get(): Observable<any> {
    let lang = this.appLang.current;
    return this.http.get<any>(
      environment.host + `client/collection?lang=${lang}&skip=0`
    );
  }
  getLastThree(): Observable<any> {
    let lang = this.appLang.current;
    return this.http.get<any>(
      environment.host + `client/collection?lang=${lang}&skip=0&take=3`
    );
  }

  getBy(id: number): Observable<any> {
    return this.http.get<any>(
      environment.host + `/client/product_collection/${id}`
    );
  }
}

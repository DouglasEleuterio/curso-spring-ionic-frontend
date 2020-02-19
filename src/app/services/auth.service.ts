import {Injectable} from "@angular/core";
import {CredenciaisDto} from "../../models/credenciais.dto";
import {HttpClient} from "@angular/common/http";
import {API_CONFIG} from "../../config/api.config";

@Injectable()
export class AuthService {

  constructor(public http: HttpClient) {
  }

  autheticate(creds: CredenciaisDto) {
     return this.http.post(`${API_CONFIG.baseUrl}/login`,
      creds,
      {
        observe: 'response',
        responseType: 'text' // resposta de corpo vazip, se tentar fazer parse no Json não vai encontrar nada
      })
  }
}

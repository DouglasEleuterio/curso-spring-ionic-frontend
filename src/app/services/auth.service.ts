import {Injectable} from "@angular/core";
import {CredenciaisDto} from "../../models/credenciais.dto";
import {HttpClient} from "@angular/common/http";
import {API_CONFIG} from "../../config/api.config";
import {LocalUser} from "../../models/local_user";
import {StorageService} from "./storage.service";
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthService {

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(public http: HttpClient,
              public storage: StorageService) {
  }

  autheticate(creds: CredenciaisDto) {
    return this.http.post(`${API_CONFIG.baseUrl}/login`,
      creds,
      {
        observe: 'response',
        responseType: 'text' // resposta de corpo vazip, se tentar fazer parse no Json não vai encontrar nada
      })
  }

  /**
   * Recebe o Bearer que é obtido pelo cabeçalho
   */
  successFullLogin(authorizationValue: string) {
    let tok = authorizationValue.substr(7); // CORTA O STRING A PARTIR DA POSICAO 7
    let user: LocalUser = {
      token: tok,
      email: this.jwtHelper.decodeToken(tok).sub
    };

    this.storage.setLocalUser(user);
  }

  logout() {
    this.storage.setLocalUser(null)
  }

}

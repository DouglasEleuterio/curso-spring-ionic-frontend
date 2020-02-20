import {Injectable} from "@angular/core";
import {CredenciaisDto} from "../../models/credenciais.dto";
import {HttpClient} from "@angular/common/http";
import {API_CONFIG} from "../../config/api.config";
import {LocalUser} from "../../models/local_user";
import {StorageService} from "./storage.service";

@Injectable()
export class AuthService {

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
      token: tok
    };

    this.storage.setLocalUser(user);
  }

  logout(){
    this.storage.setLocalUser(null)
  }

}

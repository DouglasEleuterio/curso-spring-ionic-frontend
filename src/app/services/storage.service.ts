import {Injectable} from "@angular/core";
import {LocalUser} from "../../models/local_user";
import {STORAGE_KEYS} from "../../config/storage_keys.config";

@Injectable()
export class StorageService {

  constructor() {
  }

  /**
   * Retorna um usuario logado
   */
  getLocalUser(): LocalUser {

    let usr = localStorage.getItem(STORAGE_KEYS.localUser)

    if (usr == null) {
      return null;
    } else {
      return JSON.parse(usr); // OBTEM O USUARIO NO FORMATO JSON
    }

  }

  /**
   * Recebe usuario logado e armazena no local storage
   */
  setLocalUser(obj: LocalUser) {
    if (obj == null) { // para jogar um nulo no usuario que está armazenado no storage
      localStorage.removeItem(STORAGE_KEYS.localUser);
    } else {
        localStorage.setItem(STORAGE_KEYS.localUser,JSON.stringify(obj)); // ARMAZENA EM STRING
    }
  }
}

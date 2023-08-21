import {BASE_URL} from "../core/utils/configs";
import {RequestHandler} from "../core/utils/request-handler";
import {Pet} from "../models/pet";

export class PetController {


    static async getPetsByStatus(petStatus: string) {
        const url = `${BASE_URL}/pet/findByStatus?status=${petStatus}`
        const {data, status} = await RequestHandler.sendGetRequest(url)
        const pets:Pet[] = [...data]

        return {pets,status}
    }
}
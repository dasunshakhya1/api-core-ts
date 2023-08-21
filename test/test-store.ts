import {PetController} from "../src/controllers/pet-controller";
import {expect} from "chai";

describe("asdfa", () => {
    it('should return all ptes', async  () => {
const {pets,status} = await PetController.getPetsByStatus("available")
        console.log(pets[0])
        expect(status).to.equal(200)
    });
})
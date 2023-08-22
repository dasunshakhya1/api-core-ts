import {PetController} from "../src/controllers/pet-controller";
import {expect} from "chai";

describe("Test /pet endpoint", () => {
    it('should return all available pets', async () => {
        const {pets, status} = await PetController.getPetsByStatus("available")
        expect(status).to.equal(200)
    });
    it('should return all pending pets', async () => {
        const {pets, status} = await PetController.getPetsByStatus("pending")
        expect(status).to.equal(200)
    });

    it('should return all sold pets', async () => {
        const {pets, status} = await PetController.getPetsByStatus("sold")
        expect(status).to.equal(200)
    });
})
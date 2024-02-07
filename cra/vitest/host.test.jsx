import {describe, it} from "vitest";
import {render,screen} from "@testing-library/react";
import Banner from "../host/src/Components/Banner";
describe("Host Banner",()=>{
    it("Is visble",()=>{
        render(<Banner title={"Banniere image"}/>);
        expect(screen.getByText("/Banner title : Banniere image/i"))
    })
})
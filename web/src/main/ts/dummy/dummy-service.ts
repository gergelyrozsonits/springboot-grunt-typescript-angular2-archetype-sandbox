export class DummyService {
    public double(value:number):number {
        let result:number = 2 * value;
        console.log(`The double of ${value} is ${result}`);
        return result;
    }
}

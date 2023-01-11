// Find all our documentation at https://docs.near.org
import { NearBindgen, near, call, view } from 'near-sdk-js';
import { signerAccountId } from 'near-sdk-js/lib/api';

@NearBindgen({})
class HelloNear {
  message: string = "Hello";
  abc: string = "aloha";
  dem: number = 0;

  @view({}) // This method is read-only and can be called for free
  get_greeting(): string {
    return this.message;
  }

  @call({}) // This method changes the state, for which it cost gas
  set_greeting({ message }: { message: string }): void {
    near.log(`Saving greeting ${message}`);
    this.message = message;
  }

  @view({}) // This method is read-only and can be called for free
  countTest(): number {
    return this.dem;
  }

  @call({}) // This method changes the state, for which it cost gas
  printHi({ abc }: { abc: string }): void {
    this.abc = abc;
  }

  @call({}) // This method changes the state, for which it cost gas
  tangGiaTri({ abc }: { abc: string }): void {
    this.abc = abc;
    this.dem++;
  }


}
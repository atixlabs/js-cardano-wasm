const expect = require('chai').expect;
const CardanoCrypto = require('../../dist/index.js');

const NUM_ADDRESSES = 10000;
const XPRV = "301604045de9138b8b23b6730495f7e34b5151d29bA3456BC9B332F6F084A551D646BC30CF126FA8ED776C05A8932A5AB35C8BAC41EB01BB9A16CFE229B94B405D3661DEB9064F2D0E03FE85D68070B2FE33B4916059658E28AC7F7F91CA4B12";
const UNKNOWN_ADDRESS = "DdzFFzCqrht8bHGhehfWkQHYQ6oXwXanJF12e2AmqwerXV5WE4NY95VmGTcZH676VQpjjPWczLq68f1CmbdkEKkQ8JDEVDYqmtpyq2s1";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe('Random Address Checker', async function() {
    console.log('Taking a break...');
    await sleep(2);

    const checker = CardanoCrypto.RandomAddressChecker.newChecker(XPRV).result;
    const addresses = Array.apply(null, Array(NUM_ADDRESSES)).map(() => { return UNKNOWN_ADDRESS; });

    describe("Check " + NUM_ADDRESSES + " random addresses are not mine", function() {
        let result = { failed: true };
        it('runs the checkaddresses', function() {
            result = CardanoCrypto.RandomAddressChecker.checkAddresses(checker, addresses);
        });

        it('didn\'t fail', function() {
            expect(result.failed).equals(false);
        });
        it('result length is empty', function() {
            expect(result.result.length).equals(0);
        });
    });
    console.log('check passes');
});

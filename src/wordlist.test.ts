import { expect, test} from '@jest/globals';
import { convert_wordlist, wordlist } from './wordlist';

test('one word',() => {
    expect(convert_wordlist('test')).toEqual([['test']])
});

test('multiple word',() => {
    expect(convert_wordlist('a b cde')).toEqual([['a', 'b', 'cde']])
});

test('multiple lines', () => {
    const input = `ab cd
ef gh`
    expect(convert_wordlist(input)).toEqual([['ab', 'cd'], ['ef', 'gh']])
});

test('wordlist is defined', () => {
    expect(wordlist).toBeTruthy()
});
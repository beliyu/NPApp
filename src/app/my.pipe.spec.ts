import {
    inject,
    fakeAsync,
    TestBed
} from '@angular/core/testing';
import {
    CatPipe,
    YearPipe
} from './my.pipe';

describe('my.pipe - pCateg', () => {
    let pipe: CatPipe;
    beforeEach(() => {
        pipe = new CatPipe();
    });
    it('passes physics=physics', () => {
        let niz = [{cat: 'physics'}];
        expect(pipe.transform(niz, 'physics')).toContain({cat: 'physics'});
    });
    it('passes physics=', () => {
        let niz = [{cat: 'physics'}];
        expect(pipe.transform(niz, '')).toContain({cat: 'physics'});
    });
    it('does not pass physics=economics', () => {
        let niz = [{cat: 'physics'}];
        expect(pipe.transform(niz, 'economics')).toEqual([]);
    });
});

describe('my.pipe - pYear', () => {
    let pipe: YearPipe;
    let niz;
    beforeEach(() => {
        pipe = new YearPipe();
        niz = [{year: 1975}];
    });
    it('passes in the range', () => {
        expect(pipe.transform(niz, 1970, 2015)).toContain({year: 1975});
    });
    it('passes at the end of the range', () => {
        expect(pipe.transform(niz, 1970, 1975)).toContain({year: 1975});
    });
    it('does not pass outside the scope', () => {
        expect(pipe.transform(niz, 1990, 2015)).toEqual([]);
    });
});
